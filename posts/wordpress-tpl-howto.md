---
title: 'Wordpress化の手順書'
date: '2023-07-17'
description: 'Wordpress化の手順メモ'
image:
category: ['performance']
---

## 手順
1. Wordpressのローカル環境構築
2. themeフォルダにテーマ名のフォルダ作って必要ファイルを作成
3. themeフォルダにコーディングした html/css/js 一式を入れる
4. index.php に index.html をコピペ
6. header と footer を分割して index.php に適用 『<?php get_header(); ?>』『<?php get_footer(); ?>』
7. cssとjsを wp_head();　/ wp_footer(); で読み込み

```php
/* CSSとJavaScriptの読み込み */
function my_script_init()
{
  wp_enqueue_style('reset', get_template_directory_uri() . '/css/reset.css', array(), '1.0.0', 'all');
  wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.6.1/css/all.css', array(), '5.8.2', 'all');
  wp_enqueue_style('drawer', 'https://cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/css/drawer.min.css', array(), '3.2.2', 'screen and (max-width:767px)');
  wp_enqueue_script('iScroll', 'https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.2.0/iscroll.min.js', array( 'jquery' ), '5.2.0', true);
  wp_enqueue_script('drawer', 'https://cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/js/drawer.min.js', array( 'iScroll' ), '3.2.2', true);
  wp_enqueue_script('wow', get_template_directory_uri() . '/js/wow.min.js', array( 'jquery' ), '1.3.1', true);
  wp_enqueue_style('wow', get_template_directory_uri() . '/css/animate.css', array(), '1.3.1', 'all');
  wp_enqueue_style('my', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all');
  wp_enqueue_script('my', get_template_directory_uri() . '/js/script.js', array( 'jquery' ), '1.0.0', true);
}
add_action( 'wp_enqueue_scripts', 'my_script_init' );   
```
1. script.jsファイルの 『$(function()』を 『jQuery(function($)』 に変更
2.  画像のパス変更「src="」→「src="<?php echo get_template_directory_uri(); ?>」
3.  プラグイン『Show Current Template』で表示テンプレートを見える化
4.  トップページの記事一覧を記事データ取得してループに
5.  ヘッダー・フッター・ドロワーメニューを動的に：（固定ページを作る）
6.  archive.php（category.php）を作成：確認用カテゴリを作成する
7.  プラグイン『BreadcrumbNavXT』でパンくずを表示
8.  （date.php/tag.php も同じように作成）
9.  single.phpを編集して投稿ページを作る
10. page.php を編集 + template-parts フォルダを作って共通パーツ作成 『get_template_part('template-parts/header-single');』
11. ヴィジェットの有効化
12. 日付アーカイブの表示
13. 検索結果ページ＋404ページを作る
14. 本番環境へ移行

## 必須ファイル
* index.php 
* page.php
* single.php
* archive.php
* header.php
* footer.php
* search.php
* 404.php
* functions.php
* style.css

## 準必須ファイル
* sidebar.php
* category.php
* tag.php


## function.php
``` php
/**
* CSSとJavaScriptの読み込み
*
* @codex https://wpdocs.osdn.jp/%E3%83%8A%E3%83%93%E3%82%B2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC
*/
function my_script_init()
{
wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.8.2/css/all.css', array(), '5.8.2', 'all');
wp_enqueue_style('my', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all');
wp_enqueue_script('my', get_template_directory_uri() . '/js/script.js', array( 'jquery' ), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'my_script_init');
```