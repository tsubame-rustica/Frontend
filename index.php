<?php
$host = "localhost";
$user = "root";
$password = "password";
$dbname = "kitao_test";
$table_name = 'plant';

$db = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
?>
<html lang="ja">
<head>
    <title>fire</title>
    <!--<link rel="stylesheet" href="app.css">-->
    <link rel="stylesheet" href="stylus.css">
    <link rel="stylesheet" href="index.css">
</head>
<body>
<h1 class="title">管理画面dayo</h1>
<div class="buttons">
    <form action="edit_plant.php" method="post">
        <div class="add_button">
            <button type="submit">追加</button>
        </div>
        <div class="edit_button">
            <button type="submit">編集</button>
        </div>
    </form>
</div>
<table class="plant_db">
    <div class="search">
        <label>
            <input type="text" placeholder="植物検索">
            <button type="submit">検索</button>
            <button class="plant_db_filter">絞り込み</button>
        </label>
    </div>
    <thead>
    <tr>
        <th>id</th>
        <th>名前</th>
        <th>説明</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <?php
    $stmt = $db->prepare("SELECT * FROM $table_name");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $preview_button = '<button class="preview_button_in_table">プレビュー</button>';
    $edit_button = '<button class="edit_button_in_table">編集</button>';
    foreach ($result as $row) {
      echo '<tr>';
      echo '<td>' . $row['id'] . '</td>';
      echo '<td>' . $row['plant_name'] . '</td>';
      echo '<td>' . $row['plant_description'] . '</td>';
      echo '<td>' . $preview_button . $edit_button . '</td>';
      echo '</tr>';
    }
    ?>
    </tbody>
</table>
</body>
</html>



