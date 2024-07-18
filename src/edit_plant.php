<html lang="ja">
<head>
    <title>植物の追加・編集</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="edit_plant.css">
</head>
<body>
<a class="go_back" onclick="window.history.back()" href="#">戻る</a>
<div class="form">
<form class="send_information" action="edit_plant.php" method="post">
    <div class="form-item">
        <div class="form-item-label">
            <p>植物名</p>
        </div>
        <label>
            <input type="text" class="form-item-input" name="name">
        </label>
    </div>
    <div class="form-item">
        <div class="form-item-label">
            <p>学名</p>
        </div>
        <label>
            <input type="text" name="gamumei" class="form-item-input">
        </label>
    </div>
    <div class="form-item">
        <div class="form-item-label">
            <p>説明</p>
        </div>
        <label>
            <textarea class="form-item-textarea" name="desc"></textarea>
        </label>
    </div>
    <button class="send_button" type="submit">登録</button>
</form>
</div>

</body>
</html>
<?php
$host = "localhost";
$user = "root";
$password = "password";
$dbname = "kitao_test";
$table_name = 'plant';

$db = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);

if(isset($_POST['name']) && isset($_POST['gamumei']) && isset($_POST['desc'])) {
    $name = $_POST['name'];
    $gamumei = $_POST['gamumei'];
    $desc = $_POST['desc'];

}
