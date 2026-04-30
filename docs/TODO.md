# TODO

## 次回すぐやる

- [ ] aboutus ページの SCSS 実装着手（どのセクションから手を付けるか決定 → 実装）

## SCSS 実装予定

### Layout

### Component

- [ ] `c-feature`（01/02 番号カード：`__num` / `__title` / `__text`）

### Project

- [ ] `p-mv`：aboutus 用バリエーション対応（既存の `p-mv` を流用するか派生を作るか判断）
- [ ] `p-message`：リード文ブロック（画像 + キャッチ + 本文）
- [ ] `p-features`：01/02 カード並びレイアウト
- [ ] `p-philosophy`：英語見出し + 日本語サブ + キャッチ
- [ ] `p-company`：dl/dt/dd の2カラム表組み（業務内容だけ dd 複数）
- [ ] `p-offices`：店舗リスト（名前 / 住所+Mapボタン / iframe の3カラム）

## 保留・仮置き

- [ ] p-cta タイトル文言の見直し（現状「事業内容」のまま、aboutus でも同じ）
- [ ] `c-news-list__date` の `<time datetime="...">` 属性付与（ダミーデータ確定後）
- [ ] `c-location-card__address` 1.4rem で窮屈に見えないか実機確認（NG なら 1.3rem に戻す）
- [ ] aboutus 事業所一覧の住所データ確定（現状3店舗とも仮で1号店住所）
- [ ] aboutus 事業所一覧の iframe `src` に Google Maps 埋め込み URL 設定
- [ ] `p-offices__map-link` のスタイル方針（既存 `c-btn--outline` 派生にするか独立スタイルにするか）
- [ ] `p-philosophy` の見出し構造再検討（現状 `<h2>Philosophy</h2>` + `<p>企業理念</p>`、英語=装飾／日本語=本見出しの可能性）
- [ ] レスポンシブ対応の方針決め（PC固定実装からブレークポイント設計へ）

## メモ

- 事業内容カードの矢印は CSS疑似要素（`::before` + 親div）で実装済
- `c-section-title` は装飾線・フォントのみ持ち、`padding-left` は使用先の Project 側で個別指定する方針
- `c-section-title` の色は body から継承、装飾線は `currentColor` 追従（ダーク背景でも自動で白）
- ボタン・カードの矢印は `currentColor` で色を継承する方針（outline/ダーク背景でも自動追従）
- マップは `https://maps.google.com/maps?q=...&output=embed` の iframe で埋め込み（API キー不要）
- 住所テキストは全箇所 1.4rem で統一
- aboutus は `pages/` 配下に配置。CSS / ロゴ等のパスは `../` で1段上参照
- `<dl>` 直下の `<div>` は HTML5 で許可、行ごとのレイアウト制御に使用
