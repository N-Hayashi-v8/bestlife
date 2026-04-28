# 作業ログ

## 2026-04-28

- `scss/object/project/_about.scss` 新規作成
  - `p-about__inner`：flex 2カラム（lead 36rem / body 51.2rem）・背景 `$color-bg-light`・border-radius 上2隅のみ・overflow hidden
  - `p-about__image`：max-width 116.4rem 中央寄せ・object-fit cover
  - `p-about::after`：画像エリアにグラデーションオーバーレイ（`$color-bg-light` → transparent）・画像幅に揃える
- `scss/object/component/_btn.scss`：矢印追加
  - `::after`（横線 2.4rem）+ `::before`（斜線 1rem を rotate 45deg）の2擬似要素構成
  - `transform-origin: right center` で軸固定、ホバーで両方が `translateX(0.5rem)`
  - `currentColor` 利用で outline 派生も自動で白矢印
- `scss/foundation/_base.scss`：`$color-about-bg` → `$color-bg-light` にリネーム（汎用化）
- `scss/object/project/_service.scss` 新規作成
  - `p-service`：背景 `$color-bg-light` 全幅
  - `p-service__grid`：grid 2列×4行・カード固定幅 55.4rem・column-gap 5.6rem
- `scss/object/component/_service-card.scss` 新規作成
  - flex 横並び（image 17.4rem / body 38rem）、背景 `$color-card-bg`、border-radius
  - `__arrow` 自身を横線にし、`::before` で斜め線を保持
  - `:hover` で `__arrow` 全体を translateX → 中の `::before` も追従
- `scss/object/project/_contact.scss` 新規作成
  - `p-contact__inner`：背景 `$color-bg-light`・border-radius・padding 6rem 8rem
  - `p-contact__main`：flex 横並び（map 44.4×30.4rem + info）
  - `p-contact__grid`：grid 3列・カード固定幅 27.4rem・`justify-content: space-between`
- `scss/object/component/_location-card.scss` 新規作成
  - 縦並び（map 27.4×18.7rem + name + address）・border-radius + overflow hidden
- `index.html`：`p-contact` 配下を更新
  - `<div class="l-inner">` → `<div class="p-contact__inner l-inner">`
  - 各 `__map` 配下に Google Maps iframe を挿入（皇居・大阪城・名古屋城・首里城）
  - 3号店・那覇の住所データを差し替え
- `scss/object/project/_cta.scss` 新規作成
  - 全幅ダーク背景（`$color-footer-bg`）・color: white・padding 8rem 0
  - `__inner`：text-align center（テキスト・ボタン中央寄せ）
  - `__title`：text-align left で上書き、装飾線 `::before` も左寄せ
- `scss/object/component/_section-title.scss`：`padding-left: 12.5rem` を削除（責任を Project 側へ移譲）
- `scss/object/project/_service.scss`：c-section-title に対する `padding-left: 12.5rem` を追加（既存の見た目維持）
- `scss/style.scss`：service / service-card / contact / location-card / cta の `@use` 追記

## 2026-04-27

- `scss/object/project/_mv.scss` 新規作成
  - `p-mv`：`position: relative` / `::before` で左グラデーション（白→透明）
  - `p-mv__img`：`width: 100%` / `display: block`
  - `p-mv__catch`：`position: absolute` でキャッチフレーズ配置
  - `p-mv__phrase` / `p-mv__phrase-en`：フォントサイズ・色
  - `p-mv__news`：`position: absolute`・左下固定・白背景・`border-top-right-radius`・flex縦中央
  - `p-mv__news-more`：右寄せ・`::after` 擬似要素でアンダーライン（`position: absolute` + `translateX(-50%)` で中央配置）
- `scss/object/component/_news-list.scss` 新規作成（`c-news-list`：flex横並び・`__label` / `__date` / `__text`）
- `scss/foundation/_base.scss`：`$color-gray: #A2A2A2` 追加
- `scss/style.scss`：mv・news-list の `@use` 追記
- `index.html`：`c-news-list__more` → `p-mv__news-more`（BEM修正）

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
