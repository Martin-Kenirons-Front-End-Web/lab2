var Tasks = [];
function addTask(task) {
    Tasks.push(task);
    console.log(task + " has been added to my Tasks list.");
    return Tasks.length;
}
function listAllTasks() {
    Tasks.forEach(function (ele) {
        console.log("Item: " + ele + " is in my Tasks list.");
    });
}
function deleteTask(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been removed from my Task list.");
    }
    else {
        console.log(task + " is NOT in my Tasks list.");
    }
    return Tasks.length;
}
addTask("Work!");
addTask("Eat");
listAllTasks();
deleteTask("Sleep");
deleteTask("Eat");
