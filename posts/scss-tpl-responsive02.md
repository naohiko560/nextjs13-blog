---
title: '画像のように拡大・縮小するレスポンシブ'
date: '2023-08-22'
description: '画像のように拡大・縮小するレスポンシブ'
image: css.jpeg
category: ['performance']
---

```scss

$px-vw-viewport-num: 620; // 基準となるビューポート(innerに合わせる)
@function px-vw($px-vw-num, $px-vw-width: $px-vw-viewport-num) {
  @return (1vw * $px-vw-num / $px-vw-width * 100);
}

@media (max-width: 619px) {
  .head {
    font-size: px-vw(24);
    // font-size: 3.870967742vw;
    /* 24(px) / 620(px) * 100vw */
  }

  .body {
    margin-top: px-vw(24);
    margin-top: 3.870967742vw;
    /* 24(px) / 620(px) * 100vw */
  }

  .body-img {
    width: px-vw(200);
    // width: 32.2580645161vw;
    /* 200(px) / 620(px) * 100vw */
  }

  .body-content {
    width: px-vw(300);
    // width: 48.3870967742vw;
    /* 300(px) / 620(px) * 100vw */
    padding: px-vw(12);
    // padding: 1.935483871vw;
    /* 12(px) / 620(px) * 100vw */
  }

  .body-content-head {
    font-size: px-vw(20);
    // font-size: 3.22580645161vw;
    /* 20(px) / 620(px) * 100vw */
  }

  .body-content-body {
    font-size: px-vw(16);
    // font-size: 2.5806451613vw;
    /* 16(px) / 620(px) * 100vw */
    margin-top: px-vw(16);
    // margin-top: 2.5806451613vw;
    /* 16(px) / 620(px) * 100vw */
  }
}

```