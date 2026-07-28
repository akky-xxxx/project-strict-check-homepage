---
name: sync-strict-check
description: 本家 strict-check(eslint-config-sc-* / eslint-plugin-sc-js)のリリース内容を、このドキュメントサイトへ一方向に同期するためのスキル。パッケージごとの最新リリースタグを正とし、同期マトリクスに沿って差分を検知・提示し、承認後に実装・検証まで行う。`/sync-strict-check` で明示的に起動する他、本家のリリース内容をドキュメントへ反映する作業を検知した際にも使う。
model: opus
---

# sync-strict-check

このスキルは、本家 [strict-check](https://github.com/akky-xxxx/strict-check) の公開内容を、このドキュメントサイトへ反映するための手順書です。同期は **strict-check(正)→ 本リポジトリ(従)の一方向** であり、逆方向の書き換えは行いません。

ドキュメントは npm に publish 済みの内容を掲載すべきなので、**パッケージごとの最新リリースタグ** を正とします(未リリースの `develop` の変更を先行掲載しない)。

差分の実装は `.claude/rules/implementation-rules.md` により着手前の承認が必須のため、手順3の確認ステップを飛ばしてはいけません。

## 手順

### 参照元の解決

1. **ローカルクローンの確認**: `STRICT_CHECK_DIR=/Users/shogo_akimoto/src/01.private/strict-check` の存在を確認する。存在しない場合のみ `gh api repos/akky-xxxx/strict-check/contents/<path>?ref=<tag>` にフォールバックする(複数ファイルの取得が遅いため、ローカルクローンを優先する)
2. **タグの取得**: `git -C "$STRICT_CHECK_DIR" fetch --tags --prune`
3. **パッケージごとの最新リリースタグを解決**: タグは `<npm パッケージ名>/v<version>` 形式(例: `eslint-config-sc-js/v0.2.2`、`eslint-plugin-sc-js/v0.3.0`)。パッケージごとにバージョンが異なりうるため個別に解決する

   ```bash
   git -C "$STRICT_CHECK_DIR" tag --list "<npm パッケージ名>/v*" --sort=-v:refname | head -1
   ```

4. **ディレクトリ名と npm 名の対応**: 両者は一致しない(`packages/eslint-config-js` → `eslint-config-sc-js`、`packages/eslint-plugin-js` → `eslint-plugin-sc-js`)。対応は必ずタグ時点の `packages/*/package.json` の `name` から導出し、ハードコードしない

   ```bash
   for dir in $(git -C "$STRICT_CHECK_DIR" ls-tree -d --name-only "$tag" packages/); do
     git -C "$STRICT_CHECK_DIR" show "$tag:$dir/package.json"
   done
   ```

5. **ファイルの読み取り**: `git -C "$STRICT_CHECK_DIR" show <tag>:<path>` で読む。作業ツリーやチェックアウト中のブランチを直接読まない
6. **ref の明示指定**: 起動時に引数で ref を渡された場合(例: `/sync-strict-check develop`)はそれを全パッケージ共通の参照先として優先し、「未リリース内容を参照している」旨をレポートに明記する

### 差分の抽出(同期マトリクス)

以下の観点ごとに、strict-check 側の正本と本リポジトリ側の反映先を突き合わせる。

| 観点 | strict-check 側の正本 | 本リポジトリ側の反映先 |
|---|---|---|
| パッケージ一覧の増減 | `packages/*/package.json` の `name` | `src/app/packages/<name>/page.tsx`、`src/components/templates/EslintConfigSC*/`、`src/components/templates/Packages/constants/ESLINT_CONFIG_ITEMS`・`ESLINT_PLUGIN_ITEMS`、`src/shared/constants/HEADINGS_INFO`、`src/components/atoms/*Introduction/` |
| config の公開 API(`configs` のキー) | `packages/eslint-config-*/src/index.ts` | `src/components/templates/EslintConfigSC*/components/atoms/Setup/constants/CODES`(`FLAT1`〜`FLAT3`) |
| recommended の合成順 | `packages/eslint-config-*/src/flatConfig/index.ts` の配列順 | 同上 CODES の記載順 |
| `eslint-config-sc-all` の関数シグネチャ | `packages/eslint-config-all/src/getConfigs/index.ts` の `GetConfigs` 型、`src/shared/types/Library/index.ts` | `src/components/templates/EslintConfigSCAll/components/atoms/Setup`・`Arguments` |
| plugin ルールの増減と recommended 収録 | `packages/eslint-plugin-js/src/ruleBase/index.ts`(severity が `OFF` 以外 = 一覧表の ✅) | `src/components/atoms/EslintPluginJsRules/constants/ITEMS`、`src/app/packages/eslint-plugin-sc-js/rules/<rule>/page.tsx`、`src/components/templates/EslintPluginSCJsRules<Rule>/` |
| ルールのオプション仕様 | `packages/eslint-plugin-js/src/rules/<rule>/schema/optionSchema/index.ts`(zod)と `types/` | `src/components/templates/EslintPluginSCJsRules<Rule>/constants/CODES` の `OPTIONS`、および各オプションの Heading3 セクション |
| ルールの検知内容 | `packages/eslint-plugin-js/src/rules/<rule>/index.ts` の `meta.messages` / `meta.type` と `modules/` の判定ロジック | 各ルールページの説明文、`INCORRECT_EXAMPLE` / `CORRECT_EXAMPLE` |
| peerDependencies | `packages/*/package.json` の `peerDependencies` | 各 `Installation`(追加インストールの案内が必要か) |
| shared config の由来説明("This package sets some rules based on the shared config of below packages." 等) | `packages/eslint-config-*/src/shared/config/records/**/*.ts`(**全ファイル**。`modules/`・`settings/` 配下のサブモジュールも含む) | `src/components/atoms/*Introduction/`(`index.tsx` の文言と `constants/LINK_ITEMS`) |
| plugin の登録キーとルール名の prefix | `modules/shared-for-eslint-plugin/src/constants/SUFFIX`(`"sc-"`)+ `packages/eslint-plugin-js/src/index.ts` の `PLUGIN_NAME`(`"js"`)。`getFlatConfig` が `plugins` のキーを、`getConfigRules` がルール名を、いずれも `` `${SUFFIX}${PLUGIN_NAME}` `` として組み立てる | `src/components/templates/EslintPluginSCJs/components/atoms/Setup`・`src/components/templates/EslintPluginSCJsRules/components/atoms/Setup` の `plugins` キー、および各ルールページ `constants/CODES` の `OPTIONS` のルール名 |

観点ごとの補足:

- **ルールの description 文言**: strict-check 側のルールは `meta.docs` を持たないため、一覧表(`EslintPluginJsRules/constants/ITEMS`)の説明文はこのドキュメントサイトが唯一の正本。**ここは strict-check 側の内容で上書きしない**(ルールが新規追加されたときのみ新規に書き起こす)
- **peerDependencies**: 現状 `Installation` はパッケージ本体のインストールのみを案内しており、peer の明示は意図的に省略されている可能性がある。差分があっても自動的に書き換えず、レポートで記載要否をユーザーに確認する
  - **`package.json` の `peerDependencies` だけでは正確な実態を捉えられない**。過大申告(例: `eslint-config-sc-js` は `@eslint/eslintrc` を peer に挙げているが、実装内では型宣言 `declare module "@eslint/eslintrc"` に使われているだけで実行時には一切参照されない)と過小申告(例: `eslint-config-sc-react` の `reactRecords` は `getCompatExtends("plugin:react/recommended", ...)` 経由で実行時に `eslint-plugin-react` を要求するが、`package.json` の `peerDependencies` には載っていない)の両方が起こりうる。**必ず各 record ファイルの実装(`require(...)` / `import ... from "..."` / `getCompatExtends(...)` の引数)を読んで実際の依存を確認し、宣言だけを鵜呑みにしない**
  - `eslint-config-sc-all` は特に注意: `getConfigs(language, libraries)` の `language` 引数により `eslint-config-sc-js` と `eslint-config-sc-ts` は**どちらか一方のみ**が使われる(`src/getConfigs/modules/getConfigsBase/modules/getConfigsBaseForJavascript` / `getConfigsBaseForTypescript` を参照)。`package.json` の `peerDependenciesMeta` はこの2つを optional 扱いにしておらず(4つの library 系 peer のみ optional)、鵜呑みにすると両方を無条件必須として案内してしまう誤りを犯す(実際に一度そう実装してしまった実例あり)
- **plugin の登録キー**: `PLUGIN_NAME` を単体で見て `"js"` と早合点しない。`SUFFIX`(`"sc-"`)との連結が実際のキーであり、正解は `"sc-js"`。`getFlatConfig` のテスト(`modules/shared-for-eslint-plugin/spec/utilities/getFlatConfig/index.test.ts`)が `getFlatConfig("test", {}, [])` → `plugins: { "sc-test": {} }` と明示的に assert しているので、迷ったらこのテストを見る。手動登録のサンプル(recommended を使わない場合)でキーを間違えると、各ルールページが案内する `sc-js/<rule>` というルール名が解決できず「Definition for rule not found」になる(実際に `"js"` と誤記されていた実例あり)
- **CODES の網羅検証**: 目視のスポットチェックで済ませず、CODES から `configs.<key>` の参照を機械的に全件抽出し、各パッケージの `src/index.ts` の実在キーと総当たりで突き合わせる。存在しないキーの記載(過去に `stylisticRecord` / `resetRecordForStylistic` / `typescriptEslintStylisticTypeCheckedRecords` の実例あり)と、実在するのに記載漏れのキー(`importRecommendedRecord` の実例あり)の両方を検出できる

  ```bash
  grep -rhoE "eslintConfigSC[A-Za-z]+\.configs\.[A-Za-z]+" \
    src/components/templates/EslintConfigSC*/components/atoms/Setup/constants/CODES/index.ts | sort -u
  ```

- **shared config の由来説明**: `src/index.ts` の `configs` キー一覧だけでなく、**各 record ファイルの中身を1つずつ読んで**、(a) 実在の npm パッケージの `recommended`/`flatConfigs` 等を丸ごと spread しているもの(例: `unicornRecommendedRecords` → `eslint-plugin-unicorn`)、(b) 他の `eslint-config-sc-*` パッケージの `configs` に委譲しているだけのもの(例: `eslint-config-sc-ts` の大半は `eslintConfigSCJs.configs.*` を re-export)、(c) 特定パッケージのルールを手動で移植した自前実装(例: `airbnbBaseReplacement.ts` は `eslint-config-airbnb-base` のルールを個別にコピーしただけで、そのパッケージ自体には依存していない)を判別する。Introduction の「shared config of below packages」に列挙してよいのは (a)(b) のみで、(c) を実在パッケージへの依存であるかのように書かない(除外する)

### 差分レポートの提示(承認必須)

観点ごとに「対象パッケージ / 参照タグ / strict-check 側の現在値 / 本リポジトリ側の現在値 / 差分 / 対応方針」を提示し、着手前に承認を得る。差分が無い場合はその旨を報告して終了する。

### 実装

- 既存ページの文言・サンプルコードの修正で済む場合は、承認された対応方針に沿ってこのスキル内で実装する
- **ページの新規追加(パッケージ追加・ルール追加)を伴う場合は `/feature-flow` に委譲する**。委譲時は以下の変更対象を引き継ぐ
  - `src/app/packages/.../page.tsx`(薄いラッパー。`src/components/templates` を描画するだけ)
  - `src/components/templates/<Name>/`(`index.tsx` と `index.stories.tsx`。既存の同種テンプレートを参考にする)
  - 一覧の constants: `templates/Packages/constants/ESLINT_CONFIG_ITEMS`・`ESLINT_PLUGIN_ITEMS`、`atoms/EslintPluginJsRules/constants/ITEMS`
  - `src/shared/constants/HEADINGS_INFO`(`searchTitle` はサイト内検索が参照するため必ず埋める)
  - `src/components/atoms/*Introduction/`(パッケージ追加時)
  - `pnpm build:pathpida` で `@lib/$path` を再生成してから `pagesPath` を参照する

### 検証

`pnpm check-code`(lint 一式・spell-check・type-check・test-jest)を実行する。ページを新規追加した場合は pathpida の生成物が絡むため `pnpm build` も実行する。

### 完了報告

同期した観点・参照タグ・後述の「報告のみに留めた事項」をユーザーに報告して、このスキルの担当範囲は終わり。コミット以降は `.claude/rules/commit-rules.md` に従う。

## 注意点

- 同期は一方向。このスキルから strict-check 側のファイルを書き換えない。逆方向の要修正点(例: strict-check の `packages/*/package.json` の `homepage` と各 README が旧 Cloudflare URL `strict-check-series.pages.dev` を指したままで、Vercel 移行後の URL と乖離している)を見つけた場合は**報告のみ**に留める
- 参照は必ずタグ経由の `git show` で行う。ローカルの作業ツリーやチェックアウト中のブランチの内容を正としない(strict-check 側は通常 `develop` がチェックアウトされており、未リリースの変更を含む)
- パッケージのバージョンはパッケージごとに異なりうる。全パッケージを同一バージョンとみなさない
- 一覧表の ✅ は「recommended 構成に含まれるか」を意味する。`ruleBase` の severity が `OFF` 以外であることが条件で、`WARN` でも ✅ が付く
- `src/lib/$path.ts`(pathpida)と `styled-system/`(Panda CSS)は生成物のため直接編集しない
- 差分の実装着手前の承認(「差分レポートの提示」)は省略しない。auto mode 等の既定動作より `.claude/rules/implementation-rules.md` を優先する
