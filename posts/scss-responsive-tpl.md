---
title: 'SCSSでのレシポンシブ対応テンプレート'
date: '2023-07-06'
description: 'SCSSでのレシポンシブ対応テンプレート'
image: css.jpeg
category: ['performance']
---

```css
@charset "utf-8";

/*=====================================================================
# mixins
=====================================================================*/
//マップ型変数breakpointsを定義
$breakpoints: (
//キー  値
 'sm': 'screen and (max-width: 576px)',
 'md': 'screen and (max-width: 767px)',
 'lg': 'screen and (max-width: 992px)',
 'pc': 'screen and (min-width: 768px)',
) !default;

//メディアクエリ用のmixinを定義。デフォ値はmd
@mixin mq($breakpoint: md) {
//map-get(マップ型変数, キー)で値を取得
  @media #{map-get($breakpoints, $breakpoint)} {
    //この中をカスタムできる
    @content;
  }
}

/*=====================================================================
# colors
=====================================================================*/
$btn-color: #C63205;
$font-color1: #333;
$font-color2:#421F15;

/*=====================================================================
# common - 全体に共通するスタイル
=====================================================================*/
@include mq(sm) {
  .is-pc {
    display: none;
  }
}

@include mq(pc) {
  .is-sp {
    display: none;
  }
}

body {
  font-size: 16px;
  color: $font-color1;
  font-family: open-sans, 'メイリオ', 'Meiryo', sans-serif;
  line-height: 1.75;
  background-image: url(../img/body-bg.png);
  background-attachment: fixed;
}

img {
  width: 100%;
}

.inner {
  max-width: 810px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: content-box;

  @include mq (md) {
    padding: 0 15px;
  }
}

/* header
------------------------------------------------------------*/
.header {
  box-sizing: border-box;
  padding: 23px 80px 29px;

  @include mq (md) {
    padding: 15px 15px 0;
    font-weight: bold;
    max-width: 550px;
  }

  @include mq (sm) {
    padding: 20px 10px;
  }
}

.header-nav-list {
  display: flex;
  justify-content: space-between;

  @include mq (sm) {
    overflow-x: scroll;
  }

  a {
    display: block;
    transition: opacity .3s;
    font-size: 12px;
  
    &:hover {
      opacity: .8;
    }
  }
}

.header-nav-top a {
  position: relative;
  color: $font-color2;
  min-width: 36px;

  &::before {
    content: "TOP";
    position: absolute;
    font-size: 22px;
    color: $font-color2;
    top: 14px;
    left: -7%;
        
    @include mq (md) {
      display: none;
    }
  }
}

.header-nav-news a {
  margin-left: 1.9em;
  position: relative;
  color: $font-color2;
  min-width: 48px;

  @include mq (md) {
    margin-left: 10px;
  }

  &::before {
    content: "NEWS";
    position: absolute;
    font-size: 22px;
    color: $font-color2;
    top: 14px;
    left: -14%;
        
    @include mq (md) {
      display: none;;
    }
  }
}

.header-nav-story a {
  margin-left: 2.1em;
  position: relative;
  color: $font-color2;
  min-width: 60px;
  
  @include mq (md) {
    margin-left: 10px;
  }

  &::before {
    content: "STORY";
    position: absolute;
    font-size: 22px;
    color: $font-color2;
    top: 14px;
    left: -7%;
        
    @include mq (md) {
      display: none;
    }
  }
}

.header-nav-comic a {
  margin-left: 2.1em;
  position: relative;
  color: $font-color2;
  min-width: 60px;
  
  @include mq (md) {
    margin-left: 10px;
  }

  &::before {
    content: "COMIC";
    position: absolute;
    font-size: 22px;
    color: $font-color2;
    top: 14px;
    left: -20%;
        
    @include mq (md) {
      display: none;
    }
  }
}

.header-nav-comments a {
  position: relative;
  margin-left: 2.4em;
  color: $font-color2;
  min-width: 84px;
  
  @include mq (md) {
    margin-left: 10px;
  }

  &::before {
    content: "COMMENTS";
    position: absolute;
    font-size: 22px;
    color: $font-color2;
    top: 14px;
    left: -24%;
        
    @include mq (md) {
      display: none;
    }
  }
}

.header-nav-cast a {
  margin-left: 2.25em;
  position: relative;
  color: $font-color2;
  min-width: 48px;
  
  @include mq (md) {
    margin-left: 10px;
  }

  &::before {
    content: "CAST";
    position: absolute;
    font-size: 22px;
    color: $font-color2;
    top: 14px;
    left: -7%;
    
    @include mq (md) {
      display: none;
     }
  }
}

.header-nav-inquiry a {
  margin-left: 2em;
  position: relative;
  color: $font-color2;
  min-width: 60px;
  
  @include mq (md) {
    margin-left: 10px;
  }
  
  &::before {
    content: "INQUIRY";
    position: absolute;
    font-size: 22px;
    color: $font-color2;
    top: 14px;
    left: -22%;

    @include mq (md) {
      display: none;
     }
  }
}


/* footer
------------------------------------------------------------*/
.footer {
  background:#1A1A1A;
}

.footer-copyright {
  font-size: 12px;
  text-align: center;
  padding: 30px 0;
  color: #fff;
}

/*=====================================================================
# main-index
==================================================================== */
/* common
------------------------------------------------------------*/
.main {
  padding-top: 19px;

  @include mq (sm) {
    padding-top: 0;
  }
}

/* util
------------------------------------------------------------*/
.util-title {
  font-size: 43px;
  line-height: 1;
  text-align: center;

  @include mq (sm) {
    font-size: 30px;
  }
}

.util-link-bg {
  display: inline-block;
  padding: 21px 46px;
  color: #fff;
  font-size: 14px;
  background: $btn-color;
  transition: opacity .3s;

  &:hover {
    opacity: .8;
  }

  @include mq (sm) {
    width: 100%;
  }
}

.util-link-sm {
  display: inline-block;
  padding: 8px 12px;
  color: #fff;
  font-size: 14px;
  background: $btn-color;
  transition: opacity .3s;

  &:hover {
    opacity: .8;
  }
}

/* top
------------------------------------------------------------*/

```