---
name: green-keeping
description: 依存関係(node/pnpm バージョンおよび npm パッケージ)をカテゴリ単位で棚卸し・更新し、`pnpm check-code` で都度グリーンな状態を維持しながら進め、develop への PR 作成まで含めて完結させるためのスキル。依存関係の変更は着手前にカテゴリと更新方針をユーザーに提示し承認を得る。`/green-keeping` で明示的に起動する他、依存関係の一括更新作業を検知した際にも使う。
---

# green-keeping

このスキルは、本リポジトリ(単一パッケージの Next.js アプリ)の依存関係を安全に最新化するための手順書です。過去の green keeping 実績(PR #14, #17, #21 等)から抽出したパターンに従い、カテゴリ単位で「更新 → 検証 → コミット」を繰り返します。依存関係の変更は `.claude/rules/implementation-rules.md` により着手前の承認が必須のため、この確認ステップを飛ばしてはいけません。

## 手順

### 依存関係の更新

1. **棚卸し**: `pnpm outdated -r` で更新可能な依存を洗い出す(`-r` は本リポジトリでは root にのみ作用するが、`pnpm-workspace.yaml` が存在するため将来 workspace 化されても安全なよう付けておく)
2. **カテゴリ分類と方針提示(承認必須)**: 過去の実績パターンを踏まえ、以下のようにカテゴリ分けして各カテゴリの対象パッケージ・現在バージョン・提案バージョンをユーザーに提示する。特に major バージョンアップは breaking changes の有無を確認し、他カテゴリと分離して提示する。着手前に承認を得る
   - node バージョン(`.node-version` / `package.json` の `engines.node`)
   - pnpm バージョン(`package.json` の `packageManager` **と** `.github/actions/setup-node-version/action.yml` の `corepack prepare pnpm@<version> --activate` — この2箇所を同期する必要がある)
   - eslint 関連(`eslint`, `eslint-config-sc-*`, `eslint-plugin-*`, `typescript-eslint`)
   - Next.js / React / Vercel 関連(`next`, `react`, `react-dom`, `preact`, `vercel`)
   - Panda CSS 関連(`@pandacss/dev`)
   - Storybook 関連(`@storybook/*`, `@chromatic-com/storybook`)
   - TypeScript / 型定義関連(`typescript`, `@tsconfig/*`, `@types/*`)
   - テスト関連(`jest`, `jest-environment-jsdom`, `@testing-library/*`, `@swc/jest`, `next-router-mock`, `playwright`)
   - コミット / フォーマット関連(`@commitlint/*`, `husky`, `prettier`, `fixpack`, `cspell`, `npm-run-all2`)
   - その他個別パッケージ(上記に当てはまらないもの)
3. **カテゴリ単位での更新実行(agent が非対話で完結させる)**: 承認されたカテゴリを1つずつ、対象パッケージ名を指定して `pnpm upgrade -L -r <package1> <package2> ...` を実行する(`-L`/`--latest` で semver range を無視して最新へ、対話 UI である `-i` は使わない)
   - node バージョンは `.node-version` と `package.json` の `engines.node` を手動で編集する(npm パッケージではないため `pnpm upgrade` の対象外)
   - pnpm バージョンは `package.json` の `packageManager` と `.github/actions/setup-node-version/action.yml` の両方を手動で編集する
4. **カテゴリ単位での検証**: 更新のたびに `pnpm check-code`(lint 一式・spell-check・type-check・test-jest)を実行する。Next.js/Vercel 関連を更新した場合は `pnpm build` も実行し、ビルドが通ることを確認する
5. **カテゴリ単位でのコミット**: `.claude/rules/commit-rules.md` に従い、staged diff とコミットメッセージを提示し、承認を得てから commit する。過去実績の粒度に合わせ、原則カテゴリごとに1コミットとする
   - node バージョン: `chore: upgrade node version to <version>`
   - pnpm バージョン: `chore: upgrade pnpm version to <version>`
   - パッケージ本体: `chore: upgrade packages`(カテゴリが複数ある場合はカテゴリ名を含めてもよい)
6. **検証失敗時の修正**: 新しい recommended ルールの追加やバージョン要件変更などで検証が落ちた場合、原因ごとに分けて修正する(例: 新しい lint エラーへの追従は `style: apply fix task` や `refactor: resolve <rule> error`、config の追随は `chore: update config for <plugin>`)。修正コミットも手順5と同様に承認を得てから commit する
7. **全カテゴリ完了後の最終確認**: `pnpm check-code` を通し、全体がグリーンであることを確認する

### develop への PR 作成

1. **作業ブランチ**: `develop` から `foundation/greenkeeping<YYYYMMDD>` を切る(`<YYYYMMDD>` は作業開始日)
2. **PR 規約の適用(固定)**: 過去実績(PR #14, #17, #21)に基づき、以下を固定値として用いる
   - base ブランチ: `develop`
   - タイトル: `green keeping <YYYYMMDD>`(`<YYYYMMDD>` は作業ブランチ名に含まれる日付)
   - ラベル: `01.greenkeeping`(`gh label list` で存在を確認する)
3. **PR 本文の作成**: 過去実績(PR #17)の形式を踏襲し、`dependencies:`/`devDependencies:` ごとに `- <package> <旧version>` / `+ <package> <新version>` の diff 形式で列挙する
4. **PR 提示と承認(必須)**: push 先、タイトル、ラベル、base ブランチ、本文をまとめてユーザーに提示し、明示的な承認を得る。承認前に push・PR 作成のいずれも実行しない
5. **push**: 対象ブランチが未 push、または upstream 未追跡の場合は `git push -u origin <branch>` を、追跡済みの場合は `git push` を実行する
6. **PR 作成**: `gh pr create --base develop --head <branch> --title "green keeping <YYYYMMDD>" --label "01.greenkeeping" --body <body>` を実行する
7. **完了報告**: 更新したカテゴリ・主要パッケージ・発生した修正内容・作成した PR の URL をユーザーに報告する

## 注意点

- 依存関係の変更はカテゴリ分類の時点(手順2)で必ず事前承認を取る。auto mode 等の既定動作より `.claude/rules/implementation-rules.md` を優先する
- 1カテゴリ = 1 コミットの粒度を保ち、検証失敗時の修正は原因ごとに別コミットへ分離する(cherry-pick しやすい粒度、`.claude/rules/commit-rules.md`)
- pnpm バージョン更新時は `package.json` の `packageManager` だけでなく `.github/actions/setup-node-version/action.yml` の `corepack prepare` 行も必ず同期する(片方だけ更新すると CI と手元の pnpm バージョンが乖離する)
- major バージョンアップは他カテゴリと分離し、breaking changes を個別に確認してから提案する
- 「develop への PR 作成」の手順4(PR 提示と承認)は省略しない。push は origin への共有操作、PR 作成は GitHub 上に公開される操作であり、いずれも取り消しにくい/他者に見える変更のため
- 本リポジトリは `packages/*`/`modules/*`/`dry-run/*` を持つモノレポではなく単一パッケージのため、`pnpm bootstrap` や `ws-check-code` のようなワークスペース横断コマンドは存在しない。検証は常に `pnpm check-code`(必要に応じて `pnpm build`)で行う
