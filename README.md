# とっとり花回廊 フロントエンド
とっとり花回廊のフロントエンド用リポジトリ

## pushするまでの環境構築
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
