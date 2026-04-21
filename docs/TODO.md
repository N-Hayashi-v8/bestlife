# TODO

## 0416 作業ログ

### 0416 完了

- FLOCSS ディレクトリ構成作成（scss/foundation, layout, object）
- Live Sass Compiler 設定（.vscode/settings.json）
- index.html 骨格作成
- l-header：ロゴ・グローバルナビ（c-nav / c-nav__link--cta）
- p-mv：キャッチフレーズ・c-news-list（NEW / date / text）

---

## 0420 作業ログ

### 0420 完了

- p-service セクション追加（c-service-card × 8枚、jigyou01〜08）
  - カード構成：`__img` / `__body` / `__en` / `__title` / `__arrow`
  - 矢印はCSS疑似要素（`::after`）で実装予定
- p-contact セクション追加（当社へのご連絡）
  - 上段：`p-contact__main`（大マップ＋１号店情報）
  - 下段：`p-contact__grid`（`c-location-card` × 3枚）
  - マップはGoogleマップ iframeで後日埋め込み

### 0420 未対応・残作業

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
- scss/object/project/_cta.scss
- scss/layout/_footer.scss（l-footer / c-nav--footer）
- scss/object/component/_nav.scss
- scss/object/component/_news-list.scss
- scss/object/component/_btn.scss（c-btn--outline含む）
- scss/object/component/_section-title.scss（c-section-title は複数セクションで共通）
- scss/object/component/_service-card.scss
- scss/object/component/_location-card.scss

---

## 0421 作業ログ

### 0421 完了

- p-cta セクション追加（全幅ダーク背景・フッターと連続・共通セクション想定）
  - 構成：`p-cta__inner` / `p-cta__title` / `p-cta__text` / `c-btn c-btn--outline`
- l-footer HTML 完成
  - `l-footer__upper`：ロゴ＋`c-nav c-nav--footer`（`c-nav__link` 付き）
  - `l-footer__address`：`l-footer__shop-name` / `l-footer__address-detail`
  - `l-footer__bottom`：`<small>` コピーライト
- クラス定義の修正・補完
  - フッターnavの `<a>` に `c-nav__link` 追加
  - `p-contact__main-info__name/address`（BEM二重ネスト）→ `p-contact__info-name/address` に修正
  - `p-about__body` 内 `<p>` に `p-about__text` 追加
  - `l-footer__address` 内 `<p>` に `l-footer__address-detail` 追加

### 0421 未対応・残作業

- p-contact の住所データが仮置き（なんば3号店・那覇の住所を正しいものに差し替え）
- マップ埋め込み（Google Maps iframe）
