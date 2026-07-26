# test

- `describe` / `it` のメッセージは日本語で記述する
- カバレッジ75%を目指す
- 対象に応じてブラックボックステストとホワイトボックステストを使い分ける
  - component(`index.test.tsx`): ブラックボックステスト。公開された props / DOM を通して振る舞いを検証し、内部実装(state 変数名や内部関数など)には依存しない
  - hook・utility(`index.test.ts`、例: `useCounter`, `getPackageName`, `getMetadata`): ホワイトボックステスト。内部状態やロジックの分岐を直接検証し、カバレッジを担保する
- テストは対象のモジュール/hook の隣に `index.test.ts(x)` として co-location する(単独ケース向けの `spec/tests/` は既存の例外であり、新規テストでは使わない)
- Storybook のストーリー(`index.stories.tsx`)はテストそのものではないが、`pnpm test-storybook` の対象になるため、見た目・インタラクションの確認が必要な component には co-location する
