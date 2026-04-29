# TODO

## 次回すぐやる

- [ ] レスポンシブ対応の方針決め（PC固定実装からブレークポイント設計へ）

## SCSS 実装予定

### Layout

### Component

### Project

## 保留・仮置き

- [ ] p-cta タイトル文言の見直し（現状「事業内容」のまま）
- [ ] `c-news-list__date` の `<time datetime="...">` 属性付与（ダミーデータ確定後）
- [ ] `c-location-card__address` 1.4rem で窮屈に見えないか実機確認（NG なら 1.3rem に戻す）

## メモ

- 事業内容カードの矢印は CSS疑似要素（`::before` + 親div）で実装済
- `c-section-title` は装飾線・フォントのみ持ち、`padding-left` は使用先の Project 側で個別指定する方針
- `c-section-title` の色は body から継承、装飾線は `currentColor` 追従（ダーク背景でも自動で白）
- ボタン・カードの矢印は `currentColor` で色を継承する方針（outline/ダーク背景でも自動追従）
- マップは `https://maps.google.com/maps?q=...&output=embed` の iframe で埋め込み（API キー不要）
- 住所テキストは全箇所 1.4rem で統一
