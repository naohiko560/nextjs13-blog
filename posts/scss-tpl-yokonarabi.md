---
title: '横並び'
date: '2023-07-07'
description: '記事一覧などに使える'
image: css.jpeg
category: ['performance']
---

```html

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.min.css">
  </head>
  <body>
    <section class="inner section">
      <div class="card__items">
        <div class="cards__item">
          <figure class="card__img-wrapper">
            <img src="/img/laravel.png" alt="" class="card__img" />
          </figure>
          <div class="card__body">
            <h3 class="card__title">webサイト制作</h3>
            <p class="card__text">
              ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
            </p>
          </div>
        </div>
        <div class="cards__item">
          <figure class="card__img-wrapper">
            <img src="/img/laravel.png" alt="" class="card__img" />
          </figure>
          <div class="card__body">
            <h3 class="card__title">webサイト制作</h3>
            <p class="card__text">
              ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
            </p>
          </div>
        </div>
        <div class="cards__item">
          <figure class="card__img-wrapper">
            <img src="/img/laravel.png" alt="" class="card__img" />
          </figure>
          <div class="card__body">
            <h3 class="card__title">webサイト制作</h3>
            <p class="card__text">
              ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
            </p>
          </div>
        </div>
        <div class="cards__item">
          <figure class="card__img-wrapper">
            <img src="/img/laravel.png" alt="" class="card__img" />
          </figure>
          <div class="card__body">
            <h3 class="card__title">webサイト制作</h3>
            <p class="card__text">
              ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
            </p>
          </div>
        </div>
        <div class="cards__item">
          <figure class="card__img-wrapper">
            <img src="/img/laravel.png" alt="" class="card__img" />
          </figure>
          <div class="card__body">
            <h3 class="card__title">webサイト制作</h3>
            <p class="card__text">
              ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
            </p>
          </div>
        </div>
        <div class="cards__item">
          <figure class="card__img-wrapper">
            <img src="/img/laravel.png" alt="" class="card__img" />
          </figure>
          <div class="card__body">
            <h3 class="card__title">webサイト制作</h3>
            <p class="card__text">
              ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- /3カラム -->
  </body>
</html>

```

```scss

.inner {
  max-width: 1200px;
  margin: 0 auto;
}

.card__items {
  display: flex;
  flex-wrap: wrap;
}

.cards__item {
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(17, 51, 72, 0.2);
  color: #3c3c3c;
  margin: 0 0 50px 50px;
  padding: 20px 20px 22px 20px;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  width: calc(33.33333333% - 50px * 2 / 3);

  &:nth-child(3n + 1) {
    margin-left: 0;
  }
}

.card__img-wrapper {
  margin: 0;
  img {
    max-width: 100%;
  }
}

```