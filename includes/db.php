<?php
$severname = "localhost";
$username = "root";
$password = "";
$dbname = "todo_list";
$logFile = "error_log.txt";

try {
    // Create a new PDO instance
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);

    // Set error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Uncomment this to check if the connection is successful
    // echo "Connected successfully";
} catch (PDOException $e) {
    // Error message
    $errorMessage = date('Y-m-d H:i:s') . " - Connection failed: " . $e->getMessage() . "\n";

    // Write error to log file
    file_put_contents($logFile, $errorMessage, FILE_APPEND);

    // Display generic message to user (for security reasons)
    die("Connection failed. Please check the log file for details.");
}
?>