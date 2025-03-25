
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addTaskForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let formData = new FormData(this);
        fetch("add_task.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(res => {
            if (res.status === "success") {
                location.reload();
            } else {
                alert("Failed to add task");
            }
        })
        .catch(error => console.error("Error:", error));
    }

// Function to delete a task
function deleteTask(id) {
    // Send an AJAX POST request using fetch
    fetch("delete_task.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `id=${id}`
    })
    .then(response => response.json()) // Parse the JSON response
    .then(res => {
        if (res.status === "success") {
            location.reload(); // Reload the page if the task was deleted successfully
        } else {
            alert("Failed to delete task"); // Show an error message if the task deletion failed
        }
    })document.addEventListener("DOMContentLoaded", function () {
        // Add a Task
        document.getElementById("addTaskForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let formData = new FormData(this);
            fetch("add_task.php", { method: "POST", body: formData })
                .then(response => response.json())
                .then(res => {
                    if (res.status === "success") location.reload();
                    else alert("Failed to add task");
                })
                .catch(error => console.error("Error:", error));
        });
    });
    
    // Delete a task
    function deleteTask(id) {
        fetch("delete_task.php", { method: "POST", body: `id=${id}` })
            .then(response => response.json())
            .then(res => {
                if (res.status === "success") location.reload();
                else alert("Failed to delete task");
            })
            .catch(error => console.error("Error:", error));
    }
    
    // Update the task
    function updateTask(id, status) {
        fetch("update_task.php", { method: "POST", body: `id=${id}&status=${status}` })
            .then(response => response.json())
            .then(res => {
                if (res.status === "success") {
                    let button = document.querySelector(`#task-${id} .btn-complete`);
                    button.textContent = status === "completed" ? "Completed" : "Complete";
                    button.classList.toggle("btn-success", status !== "completed");
                    button.classList.toggle("btn-secondary", status === "completed");
                } else {
                    alert("Failed to update task");
                }
            })
            .catch(error => console.error("Error:", error));
    }
    
    // ویرایش عنوان تسک
    function editTask(id) {
        let taskTitleElement = document.querySelector(`#task-${id} .task-title`);
        let newTitle = prompt("Edit Task:", taskTitleElement.textContent);
        if (newTitle && newTitle.trim() !== "") {
            fetch("update_task.php", { method: "POST", body: `id=${id}&title=${encodeURIComponent(newTitle)}` })
                .then(response => response.json())
                .then(res => {
                    if (res.status === "success") taskTitleElement.textContent = newTitle;
                    else alert("Failed to update task");
                })
                .catch(error => console.error("Error:", error));
        }
    }
    .catch(error => console.error("Error:", error));
}

// Function to update a task's status
function updateTask(id, status) {
    // Send an AJAX POST request using fetch
    fetch("update_task.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `id=${id}&status=${status}`
    })
    .then(response => response.json()) // Parse the JSON response
    .then(res => {
        if (res.status === "success") {
            // Find the complete button for the task
            let button = document.querySelector(`#task-${id} .btn-complete`);
            if (status === "completed") {
                button.textContent = "Completed"; // Update button text
                button.classList.remove("btn-success");
                button.classList.add("btn-secondary"); // Change button class for styling
            } else {
                button.textContent = "Complete"; // Update button text
                button.classList.remove("btn-secondary");
                button.classList.add("btn-success"); // Change button class for styling
            }
        } else {
            alert("Failed to update task"); // Show an error message if the task update failed
        }
    })
    .catch(error => console.error("Error:", error));
}

// Function to edit a task's title
function editTask(id) {
    // Get the current title of the task
    let taskTitleElement = document.querySelector(`#task-${id} .task-title`);
    let taskTitle = taskTitleElement.textContent;

    // Prompt the user to enter a new title
    let newTitle = prompt("Edit Task:", taskTitle);
    if (newTitle && newTitle.trim() !== "") {
        // Send an AJAX POST request using fetch
        fetch("update_task.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `id=${id}&title=${encodeURIComponent(newTitle)}`
        })
        .then(response => response.json()) // Parse the JSON response
        .then(res => {
            if (res.status === "success") {
                taskTitleElement.textContent = newTitle; // Update the task title in the DOM
            } else {
                alert("Failed to update task"); // Show an error message if the task update failed
            }
        })
        .catch(error => console.error("Error:", error));
    }
}