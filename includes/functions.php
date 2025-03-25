<?php
include 'db.php';
function getTasks($pdo)
{
    $sql = "select * from tasks order by created_at desc";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function addTask($pdo, $title)
{
    $sql = "insert into tasks (title) values (?)";
    $stmt = $pdo->prepare($sql);
    $stmt->bind_param("s", $title);
    return $stmt->execute();

}
function deleteTask($pdo, $id)
{
    $sql = "delete from tasks where id=?";
    $stmt = $pdo->prepare($sql);
    $stmt->bind_param("i", $id);
    return $stmt->execute();
}

function updateTask($pdo, $id, $status = null, $title = null)
{
    if ($status !== null) {
        $sql = "update tasks set status=? where id=?";
        $stmt = $pdo->prepare($sql);
        $stmt->bind_param("si", $status, $id);

    } elseif ($title !== null) {
        $sql = "update tasks set title=? where id=?";
        $stmt = $pdo->prepare($sql);
        $stmt->bind_param("si", $title, $id);
    }
    return $stmt->execute();
}
?>