# react structures

- `src/app` 配下は Next.js の App Router に必要な最低限のファイルのみ設置する
  - page/layout の実装本体は `src/components/templates` 配下に置き、`src/app` 側は薄いラッパーとして描画するだけにする
  - 例: `src/app/page.tsx` は `const HomePage: FC = () => <Home />` のみで、`Home` は `src/components/templates/Home` から import する
  - metadata が必要な場合は `@shared/utils/getMetadata` の `getMetadata()` を使う

## component design

- component は例外なく `components/{atoms|molecules|organisms|templates}/{ComponentName}` 配下に置く(category 省略不可)
  - co-location を基本とし、`index.tsx` の隣に必要に応じて `components/`, `modules/`, `constants/`, `types/`, `styles/` を配置する
  - あるコンポーネント専属のサブコンポーネントも、そのコンポーネントの `components/` 配下で再度 `{atoms|molecules|organisms|templates}/{Name}` の形を取る(ネストしても category は省略しない)
    - 例: `organisms/SearchModal/components/organisms/SearchModalBase/components/molecules/SearchResult/components/atoms/NoResult`
- 汎用的に複数のコンポーネントツリーで使うロジック・型・定数・schema は `src/shared` 配下に置く。1つの component ツリー内でしか使わないものは、そのコンポーネント自身の `modules/`/`constants/` に留める

### category

本リポジトリの `atoms`/`molecules`/`organisms`/`templates` は Brad Frost の Atomic Design(UI の見た目の粒度で分類)ではなく、[Atomic ReDesign](https://zenn.dev/takepepe/articles/atomic-redesign) の考え方(**依存関係の種類**で分類する)を採用している。見た目の複雑さでは判断しない。component を置く前に、まず「何に依存しているか」でこの4つのどれに当てはまるかを決めてから配置する。

- atoms
  - props 以外への依存を持たない(JS の state・グローバル state・副作用がない)。見た目が複雑でも state を持たなければ atoms
  - 例: `Card`(props のみ)、`TwoColumnsLayout`(複雑なレイアウトだが `:has(:checked)` 等 CSS のみで完結し JS state を持たない)
- molecules
  - コンポーネント内に閉じた **ローカル state**(`useState` 等)に依存する
  - 例: `Counter`(`useCounter` フックのローカル state)、`Portal`(`isMounted` state)、`Header`(`isOpenedMenu` state)
- organisms
  - **グローバル state**(zustand の `storeProviders`, Context)に依存する
  - 例: `SetPackageName`(`usePackageNameStore`)、`ThemeSwitch`(`useThemeSwitch` 経由で theme store)、`MainContentProviders`(`PackageManagerProvider`)
- templates
  - ページ固有の構成(そのページでしか使わない `constants/` 等)に依存し、atoms/molecules/organisms を組み立ててページ全体を構成する。`src/app` の各ルートから直接描画される
  - 例: `Packages`(`ESLINT_CONFIG_ITEMS`/`ESLINT_PLUGIN_ITEMS` というページ固有 constants で組み立てる)

判断に迷ったら「このコンポーネントは何に依存して再描画されるか」で考える(props のみ → atoms、自分だけの state → molecules、他所と共有する state → organisms、そのページ固有の構成 → templates)。

### props の型

- component を定義しているファイル内で定義する type alias は `Props`
- 別ファイルで定義して import する必要がある場合は `{ComponentName}Props`

## スタイル(Panda CSS)

- `@panda/css` の `css()` をコンポーネント定義の下にトップレベルの `const` としてエクスポートする(例: `src/components/atoms/Card/index.tsx` の `link`, `titleStyle`)
- スタイル定義が複数・複雑になる場合は `styles/index.ts` に切り出し、`export const styles = { ... } as const` の形でまとめて公開する(例: `src/components/atoms/TwoColumnsLayout/styles`)
- テーマトークンは `src/config/panda/THEME` を経由し、値をハードコードしない

## 状態管理(zustand)

- client state は `src/shared/storeProviders/{name}/` 配下に provider + store の分離構成で置く
  - `index.tsx`: `createContext` した store を渡す Provider と、`useStore` でラップした `use{Name}Store` hook
  - `store/`: `createStore` / `initializeStore` 等の store 本体
- 新しい client state を追加する場合もこの構成に従う(例: `theme`, `packageManager`, `packageName`)

## ルーティング・バリデーション

- ルート文字列はハードコードせず、`pathpida` が `src/app` から生成する `@lib/$path` の `pagesPath` を使う(例: `pagesPath.packages.eslint_plugin_sc_js.rules.$url().path`)。外部サイトへのリンク(npm, GitHub 等)は対象外で、そのままハードコードしてよい
- 外部入力(cookie 値等)の検証は `valibot` を使い、スキーマは `src/shared/schemas/*Schema` に置く

## Server Component / Client Component の境界

- デフォルトは Server Component。状態(`useState`/`zustand` の hook)・副作用(`useEffect`)・ブラウザ専用 API・イベントハンドラを持つ component にのみ、そのファイルの先頭に `"use client"` を付ける
- `"use client"` は境界となる component にだけ付け、その配下の子 component まで機能的に必要なければ引きずられて追加しない(現状 `src/components` 配下で13ファイルが該当。多くは `atoms`/`molecules`/`organisms` の末端、または zustand の `storeProviders`)
- server/client のどちらにすべきか迷う場合は、「サーバー側で完結できる(状態・イベント・ブラウザ API 不要)なら server のまま」を原則にする
