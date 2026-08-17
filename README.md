# 旅暦珈琲 TABIGOYOMI COFFEE

横浜のスペシャルティコーヒー焙煎所という設定の、架空企業のWeb制作事例です。
Next.js (App Router) + 素のCSSで構成しています。

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## 構成

```
app/
  layout.js   ルートレイアウト(フォント読み込み・メタ情報)
  page.js     トップページ本体
  globals.css 全体スタイル
public/       静的ファイル置き場(未使用・任意で画像追加可)
```

## GitHubへの公開手順

このディレクトリはローカルで `git init` 済み、初回コミット済みの状態で渡しています。

```bash
git remote add origin https://github.com/<あなたのアカウント>/tabigoyomi-coffee.git
git branch -M main
git push -u origin main
```

先にGitHub側で空のリポジトリ(README等は追加しない状態)を作成してから実行してください。

## デプロイ

Vercelにそのままインポートするだけで公開できます(Next.jsのデフォルト設定のみで動作します)。
