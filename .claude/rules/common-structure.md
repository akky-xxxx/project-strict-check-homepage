# common structure

- 原則として co-location とする
- 原則として1ファイル1エクスポート

## ネームケース

- component: UpperCamelCase
- constant: SCREAMING_SNAKE_CASE
- function: camelCase
- type(schema の型エイリアスを含む): UpperCamelCase
- variable(schema 変数 = valibot スキーマ等の値を含む): camelCase

## ディレクトリ構成

```
src
  ├ app                # Next.js App Router。ルートは薄く保ち、components/templates を描画するだけにする
  │ └ modules           # ルートセグメント固有のロジック(cookie 解析等)
  ├ components
  │ ├ atoms              # Atomic ReDesign(依存関係ベースの分類)。詳細なネスト/co-location 規約は react/structures.md 参照
  │ ├ molecules
  │ ├ organisms
  │ └ templates
  ├ config
  │ └ panda              # panda.config.ts から参照するテーマトークン等
  ├ lib                 # pathpida 等の生成コード置き場(基本的に手編集しない)
  └ shared              # 複数のコンポーネントツリーで再利用する横断的コード
    ├ constants
    ├ schemas             # valibot スキーマ
    ├ storeProviders       # zustand の provider + store
    ├ styles
    ├ types
    └ utils
```

- パスエイリアス(`tsconfig.json`): `@lib/*` → `src/lib/*`、`@panda/*` → `styled-system/*`、`@shared/*` → `src/shared/*`
  - `src/components`, `src/app` にはエイリアスがないため相対 import を使う
- component のカテゴリ分け・co-location の詳細規約は `react/structures.md` を参照する
