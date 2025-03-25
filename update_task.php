<?php
include 'includes/functions.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
   
    $status = isset($_POST['status']) ? $_POST['status'] : null;
    $title= isset($_POST['title']) ? $_POST['title'] : null;
    if (updateTask($pdo, $id, $status, $title)) {
        echo json_encode(['status' => 'success', 'message' => 'Task updated successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update task']);
    }
}