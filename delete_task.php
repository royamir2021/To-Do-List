<?php
include 'includes/functions.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    if (deleteTask($pdo,$id)) {
        echo json_encode(['status' => 'success', 'message' => 'Task deleted successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete task']);
        
    }
}
?>