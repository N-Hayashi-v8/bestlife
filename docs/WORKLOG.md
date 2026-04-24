# 作業ログ

## 2026-04-24

- `scss/layout/_header.scss`：`l-header__logo` に `padding-left: 15rem` 追加
- `scss/object/component/_nav.scss` 新規作成（c-nav / c-nav__item / c-nav__link / c-nav__link--cta）
- `scss/object/component/_btn.scss` 新規作成（c-btn / c-btn--outline、幅30.4rem・高さ6.5rem・角丸3.25rem）
- `scss/object/component/_section-title.scss` 新規作成（3rem・装飾線 `::before` / 幅4.65rem・高さ1px）
- `scss/layout/_inner.scss` 新規作成（l-inner、max-width: 116.4rem / margin: 0 auto）
- `index.html`：p-about / p-service / p-contact / p-cta / l-footer に `l-inner` 適用
- `scss/style.scss`：nav / btn / section-title / inner の `@use` 追記

## 2026-04-23

- SCSS着手
- `scss/foundation/_base.scss`：カラー変数・フォント変数・html/body基底スタイル
- `scss/layout/_header.scss`：l-header レイアウト（position: absolute / pill形状 / flex横並び）
- `index.html` にGoogle Fonts（Noto Sans JP）読み込み追加
- `index.html` にヘッダー画像を追加

## 2026-04-21

- p-cta セクション追加（全幅ダーク背景・フッターと連続）
  - 構成：`p-cta__inner` / `p-cta__title` / `p-cta__text` / `c-btn c-btn--outline`
- l-footer HTML 完成
  - `l-footer__upper`：ロゴ＋`c-nav c-nav--footer`
  - `l-footer__address`：`l-footer__shop-name` / `l-footer__address-detail`
  - `l-footer__bottom`：`<small>` コピーライト
- クラス定義の修正・補完
  - フッターnavの `<a>` に `c-nav__link` 追加
  - `p-contact__main-info__name/address`（BEM二重ネスト）→ `p-contact__info-name/address`
  - `p-about__body` 内 `<p>` に `p-about__text` 追加
  - `l-footer__address` 内 `<p>` に `l-footer__address-detail` 追加

## 2026-04-20

- p-service セクション追加（c-service-card × 8枚、jigyou01〜08）
  - カード構成：`__img` / `__body` / `__en` / `__title` / `__arrow`
- p-contact セクション追加（当社へのご連絡）
  - 上段：`p-contact__main`（大マップ＋１号店情報）
  - 下段：`p-contact__grid`（`c-location-card` × 3枚）

## 2026-04-16

- FLOCSS ディレクトリ構成作成（scss/foundation, layout, object）
- Live Sass Compiler 設定（.vscode/settings.json）
- index.html 骨格作成
- l-header：ロゴ・グローバルナビ（c-nav / c-nav__link--cta）
- p-mv：キャッチフレーズ・c-news-list（NEW / date / text）
