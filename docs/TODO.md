# TODO

## 0416 作業ログ

### 完了

- FLOCSS ディレクトリ構成作成（scss/foundation, layout, object）
- Live Sass Compiler 設定（.vscode/settings.json）
- index.html 骨格作成
- l-header：ロゴ・グローバルナビ（c-nav / c-nav__link--cta）
- p-mv：キャッチフレーズ・c-news-list（NEW / date / text）

---

## 0420 作業ログ

### 完了

- p-service セクション追加（c-service-card × 8枚、jigyou01〜08）
  - カード構成：`__img` / `__body` / `__en` / `__title` / `__arrow`
  - 矢印はCSS疑似要素（`::after`）で実装予定
- p-contact セクション追加（当社へのご連絡）
  - 上段：`p-contact__main`（大マップ＋１号店情報）
  - 下段：`p-contact__grid`（`c-location-card` × 3枚）
  - マップはGoogleマップ iframeで後日埋め込み

### 未対応・残作業

- p-contact の住所データが仮置き（なんば3号店・那覇の住所を正しいものに差し替え）
- マップ埋め込み（Google Maps iframe）
- あと1セクション追加予定（内容未定）
- p-mv / p-about の HTML 見直し（必要なら）
- フッター HTML

### 次回やること（HTML完成後）SCSS着手

- scss/layout/_header.scss（l-header / c-nav）
- scss/object/project/_mv.scss
- scss/object/project/_about.scss
- scss/object/project/_service.scss（c-service-card含む）
- scss/object/project/_contact.scss（c-location-card含む）
- scss/object/component/_nav.scss
- scss/object/component/_news-list.scss
- scss/object/component/_btn.scss
- scss/object/component/_section-title.scss（c-section-title は複数セクションで共通）
