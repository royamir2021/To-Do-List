<?php 
include'include/function.php';
if ($_SERVER['REQUEST_METHOD']=='POST') {
    $title=$_POST['task'];
    if(addTask($pdo,$title)){
        echo json_encode(['status'=>'success']);;

    }else{
        echo json_encode(['status'=>'error']);
    }
    }


?>