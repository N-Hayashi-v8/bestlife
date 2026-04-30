# 作業ログ

## 2026-04-30

- `pages/aboutus.html` 新規作成（会社案内ページ）
  - `index.html` をベースに `pages/` 配下へ配置
  - 各種パス調整（`../` で1階層上へ）：CSS / ロゴ画像 / HOMEリンク
  - `<main>` タグ補完
- HTMLパーツ配置（クラス名なしで全セクション配置 → 後でまとめて命名）
  - p-mv（About US / 会社案内）
  - メッセージ（リード文 image+text）
  - 01/02 特徴ブロック
  - Philosophy（企業理念）
  - 会社概要（dl/dt/dd）
  - 事業所一覧（3店舗 × 住所+map+iframe）
  - p-cta（流用）
- 構造リファクタ
  - 事業所一覧：div ネストの繰り返し → `<ul>` / `<li>` 構成、住所部は `<address>` 化
  - メッセージセクション：1つの `<section>` 内に「リード」+「01/02」が同居 → 2セクションに分割（`p-message` / `p-features`）
  - 01/02 の `<h2>` → `<span>` に変更（番号は装飾扱い、本来の見出しは `<h3>` のキャッチフレーズ）
- クラス命名（FLOCSS / BEM）
  - Project: `p-message` / `p-features` / `p-philosophy` / `p-company` / `p-offices`（index.html の既存名と衝突回避）
  - Component: `c-feature`（01/02 カードを再利用可能パーツとして切り出し）
  - 既存 `c-section-title` を「会社概要」「事業所一覧」の見出しに流用
  - `p-company` の dl 行ラップ用に `__row` 命名（HTML5 で `<dl>` 直下の `<div>` は許可）

## 2026-04-29

- `scss/layout/_footer.scss` 実装
  - `l-footer`：背景 `$color-footer-bg`・color white・padding 6rem 0 3rem（p-cta と連続するダーク帯）
  - `__upper`：flex space-between でロゴと nav を両端配置
  - `__address`：`<address>` の italic を解除（`font-style: normal`）
  - `__shop-name` / `__address-detail` / `__bottom`：text-align・font-size 個別調整
- `scss/object/component/_nav.scss`：`&--footer` 派生追加
  - flex-wrap・gap 1.6rem 2.4rem、配下の `.c-nav__link` を白文字・font-weight 400 に上書き
  - 派生内では `&__link` ではなくフルクラス名 `.c-nav__link` で書く（BEM の連結ミス回避）
- 全体リファクタ
  - `index.html`：`p-contact__main-map/main-info` → `p-contact__map/info`（BEM の二重ハイフン解消）
  - `index.html`：`p-cta__title` → `c-section-title`（重複定義の解消）
  - `_cta.scss`：`__title` ブロック削除、`.c-section-title` への上書き（text-align left / margin-bottom）に置換
  - `_header.scss`：`padding: 0.04rem` 削除、`__logo` の `padding-left: 15rem` を親 `.l-header` に移譲
  - `_section-title.scss`：`color: $color-primary` 削除（body から継承）、`::before` の background を `currentColor` 化 → ダーク背景で自動追従
  - `_contact.scss`：`.c-section-title { padding-left: 4.5rem }` 追加（p-service の見出し位置と揃える、`12.5rem - 8rem`）
  - 住所フォント統一：`l-footer__address-detail` 1.6rem→1.4rem、`c-location-card__address` 1.3rem→1.4rem
  - `style.scss`：未使用の `@use "layout/main"` を撤去

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
