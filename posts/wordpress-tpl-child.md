---
title: 'WordPress：テーマとして認識させる初期設定'
date: '2023-07-17'
description: 'WordPressをテーマとして認識させる初期設定'
image:
category: ['performance']
---

## style.css(独自テーマファイル直下)
```css
@charset "utf-8";
/*
theme Name: TF-30
Author: Shohei Ohtaki
Description: 自作テーマ
version： 1.0.0
*/
```

## functions.php
```PHP

<?php
function my_setup()
{
add_theme_support('post-thumbnails'); 
add_theme_support('automatic-feed-links'); 
add_theme_support('title-tag'); 
add_theme_support(
'html5',
array( 
'search-form',
'comment-form',
'comment-list',
'gallery',
'caption',
)
);
}

add_action('after_setup_theme', 'my_setup');
```

## 参考URL
https://www.daily-trial.com/lessons/web_site/courses/7722a840/articles/95c9d9b1