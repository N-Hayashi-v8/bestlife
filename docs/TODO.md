# TODO

## 次回すぐやる

- [ ] 実機での全体見た目確認・微調整
  - `--sports` の illust 縦位置（現状 `align-items: center`、mock との差分要確認）
  - 各セクション間の `gap`・余白バランス
  - text の `height` で 4 行目の頭が見えていないか確認
- [ ] media / temp / placement / care の 4 Modifier 集約検討（同値なので DRY 化可能、ただし将来の分岐余地とのトレードオフ）

## レビュー後の検討候補

- [ ] `pages/aboutus.html` Google Map ボタン × 3 のリンク先決定（現状 `href="#"`、住所プレースホルダのため保留中）
- [ ] `pages/news-detail.html` 「次の記事」リンクの仕様決定（最新記事の場合の分岐ロジック、現状 `href="#"`）
- [ ] 全ページ `<title>` の命名統一（現状サブページはシンプル、トップは「Best Life模写」。サイト名付き例：`会社案内 | ベストライフなんば`）
- [ ] iframe（Google Maps）に `title` 属性付与（アクセシビリティ）
- [ ] page-header 系メインビジュアル画像の `alt` 見直し（装飾でない画像は意味のある alt を当てる）

## SCSS 実装予定

### Layout

### Component

### Project

## 保留・仮置き

- [ ] `img/Frame 88.png` のリネーム（スペース入りファイル名、説明図プレースホルダ用途）
- [ ] サービス詳細部の「※事業の詳細が決まり次第画像差替」注記をHTMLに反映するか検討
- [ ] p-cta タイトル文言の見直し（現状「事業内容」のまま、aboutus / service でも同じ）
- [ ] `c-news-list__date` の `<time datetime="...">` 属性付与（ダミーデータ確定後）
- [ ] `c-location-card__address` 1.4rem で窮屈に見えないか実機確認（NG なら 1.3rem に戻す）
- [ ] aboutus 事業所一覧の住所データ確定（現状3店舗とも仮で1号店住所）
- [ ] レスポンシブ対応の方針決め（PC固定実装からブレークポイント設計へ）
- [ ] `pages/service.html` 一部インデント崩れの整形（class 適用時の編集差分による軽微なズレ。HTML構造は整合）
- [ ] `p-service--page` Modifier 名のリネーム検討（`--page` は意味性が弱い → `--lower` / `--sub` 等）
- [ ] `$color-catch` を border にも流用中。将来分岐したら `$color-border` 新設検討

## メモ

- 事業内容カードの矢印は CSS疑似要素（`::before` + 親div）で実装済
- `c-section-title` は装飾線・フォントのみ持ち、`padding-left` は使用先の Project 側で個別指定する方針
- `c-section-title` の色は body から継承、装飾線は `currentColor` 追従（ダーク背景でも自動で白）
- ボタン・カードの矢印は `currentColor` で色を継承する方針（outline/ダーク背景でも自動追従）
- マップは `https://maps.google.com/maps?q=...&output=embed` の iframe で埋め込み（API キー不要）
- 住所テキストは全箇所 1.4rem で統一
- aboutus / service など子ページは `pages/` 配下に配置。CSS / ロゴ等のパスは `../` で1段上参照
- `<dl>` 直下の `<div>` は HTML5 で許可、行ごとのレイアウト制御に使用
- `p-page-header` は下層ページ共通の見出し帯として運用（aboutus 以外でも使い回す前提）
- 文章の行数制限は `-webkit-line-clamp` + `display: -webkit-box` + `-webkit-box-orient: vertical` + `overflow: hidden` の4点セット
- 複数 dd を縦積みする場合は CSS Grid の auto-placement（dt: col1 / dd: col2 固定）が簡潔
- ダーク背景は `$color-bg-dark`、ライト背景は `$color-bg-light`（対称命名）
- 線を l-inner 幅に収める：`::after` を `position: absolute` + `max-width: 116.4rem` + `margin-inline: auto` で擬似ボーダー化
- 「最後の同クラス要素」を選ぶ：`:not(:has(+ .同クラス))` パターン（`:last-child` は親の最終子限定で意図と合わないケースあり）
- カード内の絶対配置：`__item` に `position: relative` + 子要素に `position: absolute` で Figma 座標を直訳。カードサイズ固定時に有効
- text の `height` を `overflow: hidden` で切る時は、line-height × 行数 と合わせて「行の途中で切れない」値にする方針
