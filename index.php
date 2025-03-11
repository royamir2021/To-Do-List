<?php 
include 'includes/functions.php';
include 'templates/header.php';
$task = getTasks($conn);
?>
<div class="container">
        <div class="row">
            <div class="col-md-12">
                <form class="input-group mb-3" id="addTaskForm" >
                    <input type="text" class="form-control" placeholder="Add Task"  name="task" required>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Add</button>
                    </div>
                </form>
                <ul class="list-group" id="taskList">
                    <?php while ($task = $task->fetch_assoc()): ?>
                   <li class="list-group-item d-flex justify-content-between align-items-center" id="task-"">
                        <span id="task-title"><?php echo htmlspecialchars($task['title']);?></span>
                        <div>
                            <button class="btn btn-sm btn-success btn-complete" onclick="updateTask(<?php echo $task['id']; ?>, 'completed')" <?php echo $task['status'] == 'completed' ? 'style="display: none;"' : ''; ?>Complete</button>
                            <button class="btn btn-sm btn-secondary" <?php echo $task['status'] == 'pending' ? 'style="display: none;"' : ''; ?>Completed</button>
                            <button class="btn btn-sm btn-warning" onclick="editTask(<?php echo $task['id']; ?>)">Edit</button>
                            <button class="btn btn-sm btn-danger" onclick="deleteTask(<?php echo $task['id']; ?>)">Delete</button>
                            
                        </div>
                    </li>
                    <?php endwhile;?>
                </ul>
            </div>
        </div>
    </div>
    
<؟php 
include 'templates/footer.php';
?>