# TODO

## 次回すぐやる

- [ ] `_footer.scss`（l-footer / c-nav--footer との連携）

## SCSS 実装予定

### Layout

### Component

### Project

## 保留・仮置き

- [ ] p-cta タイトル文言の見直し（現状「事業内容」になっている）

## メモ

- 事業内容カードの矢印は CSS疑似要素（`::before` + 親div）で実装済
- `c-section-title` は装飾線・フォントのみ持ち、`padding-left` は使用先の Project 側で個別指定する方針
- ボタン・カードの矢印は `currentColor` で色を継承する方針（outline/ダーク背景でも自動追従）
- マップは `https://maps.google.com/maps?q=...&output=embed` の iframe で埋め込み（API キー不要）
