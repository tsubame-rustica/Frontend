# pushするまでの環境構築
**※githubのアカウントを持っていてログインできている前提です**
> ### gitをインストール（Windows向け）
1.  windowsキーを押し、`powershell`と入力しEnterキー
2.  powershellを開いて以下のコマンドを実行する  
```powershell
winget install --id Git.Git -e --source winget 
git config --global user.name "登録している名前"
git config --global user.email "登録しているメールアドレス"
```
を実行する

> ### SSH接続
#### Powershell側
**※秘密鍵は公開しないようにしてください**
1.  `cd ~/.ssh`を実行する（`no such file or directory: ~/.ssh`が出たら`mkdir ~/.ssh`を実行し、再度`cd ~/.ssh`を実行）
2.  1を実行し、.sshが開けたら`ssh-keygen -t rsa`を実行する
3.  文字が出てくるのではじめに`id_git_rsa`と入力しEnterキーを押す。そのあと2回ほどEnterキーを押すと実行が完了する。
4.  `clip < ~/.ssh/id_git_rsa.pub`を実行すると公開鍵の内容がクリップボードにコピーできる。

#### GitHub側
1.  [GitHub](https://github.com)にログイン
2.  右上のアイコンをクリック→"Setting"（または設定）をクリック
3.  左側の"SSH and GPG key"（またはSSHおよびGPGキー）をクリック
4.  画像の赤枠部分の"New SSH key"をクリック  <img width="700" alt="New SSH key button" src="https://github.com/tsubame-rustica/Frontend/assets/120567038/7ea99dfc-0d5e-4430-8ffc-a3ea25bc7e93">
5. "Title"にはわかりやすい名前を入力し、"Key"には先ほどコピーした公開鍵をペーストします
6.  入力したら"Add SSH key"を押す

#### Powershell側
1.  powershellの画面に戻って`ssh -T git@github.com`を実行します
2.  ```Hi (アカウント名)! You've successfully authenticated, but GitHub does not provide shell access.```が返ってくればSSh接続ができています。エラーが返ってきたときはどこかが間違っているということなのでもう一度正しいかどうか見直してみてください。

> ### リモート接続をしてpushする
#### リモート接続
1.  まず作業用のディレクトリを作成してpowershellで作成したディレクトリを開く
2.  **（初回のみ）** 以下のコマンドを実行し、初期設定から最新のプロジェクトを取り込む
```
git init
git remote add https://github.com/tsubame-rustica/Frontend.git
git pull origin master
```
を実行する

作業は基本的に同一ディレクトリで行う

#### ブランチを作成しpushする
1.  作業前に`git fetch`でローカルのmainブランチを最新化する
2.  `git merge main`で今いる作業用ブランチにmainブランチの情報を更新する
ある程度の進捗を生み出したらリポジトリにpushします  
3.  `git checkout -b 作成したいブランチ名`を実行しブランチを作成する
ブランチ名はバージョンや日付など誰もが分かりやすい名前を付ける  
例）`git checkout -b 01-01-00-00`（1月1日0時0分に作成した場合）
4.  `git add .`を実行
5.  `git commit -m "コミットメッセージ（任意の文字）"`を実行しコミットする
6.  `git push origin ブランチ名`を実行しpushする
7.  pushが完了したらpull requestが送られるのでその旨を権限（リーダー等）のある人に伝える

## 用語・コマンドの説明
> ### 用語
- ### ブランチ
    あるプロジェクトから枝分かれをさせて作業をすることで、プロジェクト本体に影響を与えないように開発できる。ブランチを切るというのはブランチを作成するという意味である。
- ### コミット
    追加・変更したファイルをGitに登録すること
- ### マージ
    ブランチ等で分岐した履歴を統合すること
- ### プルリクエスト
    略してプルリクとも言う。あるブランチから別のブランチに一連の変更をマージする提案。
- ### コンフリクト
    コミットされた複数のブランチで同じ行に変更が加えられていた場合にコンフリクト=競合が起きる  
    かなり面倒くさいのでなるべく起こしたくない

> ### gitコマンド
- ### git init  
    リポジトリのセットアップに使用するコマンドです
- ### git checkout [ブランチ名]
    ブランチを移動するコマンド。ブランチを新規作成する場合は`-b`オプションを使用する
- ### git add
    現在作業しているブランチのファイルを登録するコマンド。さまざまなオプションがある
    - #### git add .
        すべてのファイルを登録する "."はカレントディレクトリを指す
    - #### git add [ファイル名]
        特定のファイルだけを登録する（登録したくないファイルがあるときはこちらを使用する）
- ### git commit
    コミットするためのコマンド。`-m "メッセージ"`でコミットメッセージを追加できる
- ### git push
    リモートリポジトリにpushするためのコマンド。リモートに更新内容を反映させるために使う
- ### git fetch
    リモートの最新のプロジェクトをローカルに取り込むコマンド。この状態ではローカルに反映できていないので注意
- ### git merge [ブランチ名]
    コミットされたブランチを`[ブランチ名]`にマージする
    `git merge main`で`git fetch`で取り込んだ最新のプロジェクトを`main`ブランチに反映させる
