---
title: 'Next.js13におけるreact-burger-menuの使い方'
date: '2023-05-23'
description: 'LaravelのデフォルトのフロントエンドアセットバンドラーはViteに変更したので動作確認をしています。'
image: laravel.png
category: ['laravel']
---
## インストール方法
### TypeScriptの場合
## ハンバーガーメニューの実装
### Componentsフォルダにjs/tsx（例：Burger.tsx）ファイルを作成
ハンバーガーメニュー用のコンポーネントを記述
※ここに例コードを貼り付け
#### 'use client'; を1行目に追加
※クライアントコンポーネントにする？
#### globals.css をimportする
TailwindCssを適用
<Menu></Menu>を<div></div>で囲ってclassName="md:hidden"を追加
PCモードでハンバーガーメニューを消す
### styles フォルダにcssファイルを作成
ハンバーガーメニュー用のスタイル（例：Burger.css）を記述
※ここに例コードを貼り付け
## 自分好みにカスタマイズ
ハンバーガーメニュー用のスタイルをイジるなどして自分好みにカスタマイズ
### 右側に変更する場合
1.  .bm-burger-button を left から right へ変更
2. <Menu right> にする