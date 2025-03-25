
# 📝 PHP To-Do List Web Application
A simple and efficient To-Do List web application built using PHP, HTML, CSS, JavaScript, Bootstrap, and MySQL. This application allows users to add, edit, delete, and update tasks with a user-friendly interface.

## 🌟 Features
- Add new tasks 🆕
- Edit existing tasks ✏️
- Mark tasks as completed ✔️
- Delete tasks ❌
- Responsive design using Bootstrap 📱💻

## 🛠️ Technologies Used
- **Frontend**: HTML, CSS, Bootstrap, JavaScript
- **Backend**: PHP, MySQL
- **AJAX**: For seamless updates

## 📝 Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/royamir2021/To-Do-List.git
cd to-do-list
```

### 2. Set Up the Database
1. Start your local server using XAMPP, WAMP, or MAMP.
2. Open phpMyAdmin and create a new database named `todo_list`.
3. Import the SQL file to set up the `tasks` table:
   ```sql
   CREATE DATABASE todo_list;
   USE todo_list;

   CREATE TABLE tasks (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       status ENUM('pending', 'completed') DEFAULT 'pending',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

### 3. Configure the Database Connection
Edit `includes/db.php` with your database connection details:
```php
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
```

### 4. Run the Application
Open a web browser and navigate to `http://localhost/to-do-list`.

## 🎨 Customization
### 1. Update Styles
Modify the styles in `assets/css/styles.css` to match your design preferences.

### 2. Update JavaScript
Enhance the JavaScript functionality in `assets/js/scripts.js` to customize the interactivity.

### 3. Update Content
Modify the HTML content in `index.php` to personalize the text and tasks.

## 👥 Contributors
- [Roya Mir](https://github.com/royamir2021)
