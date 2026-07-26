# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

[strict-check](https://github.com/akky-xxxx/strict-check)(`eslint-config-sc-*` / `eslint-plugin-sc-js` パッケージ群)の公式ドキュメントサイト。Next.js 14(App Router)で構築し、`@cloudflare/next-on-pages` 経由で Cloudflare Pages にデプロイする。

## コマンド

パッケージマネージャーは **pnpm のみ**。npm / yarn は使用しない。

```bash
pnpm dev            # 開発サーバー起動(next dev と pathpida --watch を並列実行)
pnpm storybook       # Storybook を 6006 番ポートで起動(事前に build:pathpida を実行)
pnpm check-code      # CI のゲート一式: lint + spell-check + type-check を並列実行後、test-jest
pnpm fix             # eslint / prettier / package.json のソート(fixpack)を自動修正
```

個別チェック(いずれも `check-code` に含まれる):

```bash
pnpm lint:config       # リポジトリ全体(設定ファイル等、src 以外)への eslint
pnpm lint:product-code # src/**/*.ts(x) のみへの eslint
pnpm lint:prettier     # json/toml/yaml の prettier --check
pnpm lint:pack         # fixpack --dryRun(package.json のキー順序・フォーマット)
pnpm spell-check       # js/mjs/ts/tsx への cspell
pnpm type-check        # tsc(no emit、tsconfig.json を使用)
pnpm test-jest         # jest --coverage
```

特定のテストファイル・パターンのみを実行する場合は jest を直接呼ぶ:

```bash
pnpm exec jest src/shared/utils/getPackageName
pnpm exec jest -t "テスト名の一部"
```

ビルド / デプロイ:

```bash
pnpm build           # pathpida 生成 + next build
pnpm preview         # next-on-pages ビルド + wrangler pages dev(ローカルの Cloudflare プレビュー)
pnpm run deploy       # next-on-pages ビルド + wrangler pages deploy(main ブランチは本番、それ以外はプレビュー環境へ)
pnpm log              # プレビュー環境のログを tail(wrangler)
```

## アーキテクチャ

- **Next.js App Router**(`src/app` 配下)。ルートセグメントは薄く、`page.tsx` は基本的に `src/components/templates` 配下のテンプレートコンポーネントを描画するだけで、実処理は `src/app/modules/*`(例: `getPackageManager`, `getTheme`)やコンポーネント側に置く。
- **コンポーネント階層**(`src/components` 配下)は [Atomic ReDesign](https://zenn.dev/takepepe/articles/atomic-redesign) 準拠で `atoms` → `molecules` → `organisms` → `templates`。UI の見た目の粒度ではなく依存関係の種類で分類する(atoms: props 以外に依存しない、molecules: ローカル state に依存、organisms: グローバル state(zustand/Context)に依存、templates: ページ固有の構成に依存)。詳細な判定基準は `.claude/rules/react/structures.md` を参照。ネストが深いコンポーネントは `index.tsx` の隣に自身専用の `components/`, `modules/`, `constants/`, `types/`, `styles/` を co-location する(深い例として `src/components/organisms/Layout/components/molecules/Header/...` を参照)。新規ロジックを追加する際は、そのコンポーネントツリー内で最も範囲の狭い `modules/`/`constants/` を優先し、局所的な処理のために安易に `src/shared` へ持っていかない。
- **`src/shared`** は複数のコンポーネントツリーをまたいで再利用される横断的なコード置き場: `constants`, `schemas`(valibot), `storeProviders`(zustand), `styles`(panda の `css()` レシピ), `types`, `utils`。
- **状態管理**: `zustand` ストアは `src/shared/storeProviders/<name>/` 配下で context provider パターンによりラップする — provider/hook を持つ `index.tsx` と `store/` サブモジュールのペア構成(`theme`, `packageManager`, `packageName` を参照)。新しい client state を追加する際もこの provider + store の分割構成に従う。
- **スタイリング**: Panda CSS。設定は `panda.config.ts`、テーマトークンは `src/config/panda/THEME`。生成された CSS システムの出力先は `styled-system/`(gitignore 対象、`panda codegen` / `prepare:panda` で再生成)で、`@panda/*` パスエイリアス経由でインポートする(例: `import { css } from "@panda/css"`)。コンポーネントはインラインで `css({...})` を呼び出し、結果のクラスをコンポーネント定義の下にトップレベルの `const` としてエクスポートする(`src/components/atoms/Card/index.tsx` を参照)。
- **型付きルート**: `pathpida` が `src/app` のルートツリーから `src/lib/$path.ts` を生成する(gitignore 対象、`build:pathpida` / `dev:path --watch` で再生成)。ルート文字列をハードコードせずこれを使う。
- **バリデーション**: `valibot` スキーマは `src/shared/schemas/*Schema` に置き、cookie 値(`nextCookiesSchemas`)やパッケージマネージャー/パッケージ名の state などを検証する。
- **パスエイリアス**(`tsconfig.json`): `@lib/*` → `src/lib/*`、`@panda/*` → `styled-system/*`、`@shared/*` → `src/shared/*`。`src/components` や `src/app` 用のエイリアスは無く、そこでは相対インポートを使う。
- **デプロイ先**: `@cloudflare/next-on-pages` 経由の Cloudflare Pages。`wrangler.toml` の config name は `strict-check-series`。`next.config.mjs` はビルド時の ESLint/TS チェックを無効化している(`ignoreDuringBuilds` / `ignoreBuildErrors`)。実質的なゲートは `next build` ではなく `check-code` である。

## テスト

- ランナーは Jest(`jsdom` environment、`@swc/jest` transform、`@testing-library/react` + `jest-dom`)。
- テストはほぼ常に対象のモジュール/hook の隣に `index.test.ts(x)` として **co-location** する(例: `src/shared/utils/getPackageName/index.test.ts`)。単独ケース向けに `spec/tests/` ディレクトリも存在するが、新規テストは co-location をデフォルトとする。
- Storybook のストーリー(`index.stories.tsx`)はコンポーネントの隣に配置する。`pnpm test-storybook` は起動中の Storybook インスタンスに対して Storybook test-runner を実行する(事前に `pnpm storybook` の起動が必要)。
- カバレッジ: `pnpm test-jest` は `--coverage` 付きで実行する。`/styled-system/` はカバレッジ対象外。

## Lint / フォーマットのスタック

- ESLint はこのリポジトリ自身が開発しているパッケージ(`eslint-config-sc-*`, `eslint-plugin-sc-js`)を使用する — 本リポジトリはこれらパッケージの利用者であると同時にドキュメントのソースでもあるため、`src/app/packages/*` がそれらのルールをミラー/デモンストレーションしている。
- eslint の実行は2系統に分かれる: `eslint.config.js.mjs`(リポジトリ全体の設定・ツール類ファイル対象)と `eslint.config.mjs`(`src/*/*.ts{,x}` のプロダクトコードのみ対象、より厳格な `eslint-config-sc-all` プリセット)。いずれも `--max-warnings 0` で実行する。
- `cspell` は `config/cspell/domain.txt` と `config/cspell/packages.txt` のカスタム辞書を使用する — プロジェクト固有/ドメイン固有の単語はインラインの ignore コメントではなくこちらに追加する。
- `fixpack` が `package.json` のキー順序を強制する(`.fixpackrc` 参照)。`package.json` を手動編集した後は `pnpm fix:pack` を実行する。
- コミットメッセージは commitlint(`commitlint.config.js`)により husky の `commit-msg` フックで検証される: Conventional Commits に準拠し、type は `chore|feat|fix|docs|style|refactor|test|revert` に限定、body の前に空行が必須。
