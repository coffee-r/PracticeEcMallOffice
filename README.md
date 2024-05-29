## このリポジトリについて

ECモール管理者向けCMSの練習用プロジェクトです。

## プロジェクト作成

```sh
$ composer create-project laravel/laravel PracticeEcMallOffice
$ cd PracticeEcMallOffice/
```

## Breezeを使ってフロントエンドをセットアップ

```sh
$ composer require laravel/breeze --dev
$ php artisan breeze:install react --typescript
```

## Sailの導入

```sh
$ composer require laravel/sail --dev
$ php artisan sail:install
### mysqlを選択

$ ./vendor/bin/sail up -d
$ ./vendor/bin/sail npm install
$ ./vendor/bin/sail npm run dev
```

## DaisyUIの導入 (仮)

ここはデザイナーが組みやすいTailwindベースのものを使いたい

```sh
$ ./vendor/bin/sail npm install daisyui
```

```js
// tailwind.config.js
module.exports = {
  plugins: [forms, daisyui],
}
```

## セッション管理をファイルベースに変更

* .envファイル SESSION_DRIVER=file

## 実装

### ダッシュボードUIを作る


### usersでないテーブル(このプロジェクトではoperators)で認証できるようにする


参考 : https://qiita.com/n_oshiumi/items/a466ff2c8f20c3494538

```sh
$ php artisan make:Model Operator --migration
```

* Operatorモデルクラスを編集
* マイグレーションファイルを編集したあと、マイグレーション実行

```sh
$ ./vendor/bin/sail artisan migrate
```

ログインコントローラーを作成。

```sh
$ ./vendor/bin/sail artisan make:controller LoginController
```


コードを書いていく。

* 出品者申請一覧を見る
* 出品者申請詳細を見る
* 出品者申請を承認する


## 各環境のDockerファイルを作る

## Oracleと接続させる

## オンプレミスの仮想マシンで環境構築する

## オンプレミスの仮想マシンにデプロイする

## 