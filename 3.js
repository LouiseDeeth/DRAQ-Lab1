//a. Create an array of strings
let Tasks = [];

//b. Create an addTask function:
//i. It receives a string as a parameter called task.
//ii. It adds the task to the array.
//iii. It prints a message in the console indicating the insertion.
//iv. It returns the number of elements in the array after the insertion.

let addTask = (task) => {
    Tasks.push(task);
    console.log(task + " has been added to my tasks");
    return Tasks.length;
}

//c. Create a listAllTasks function:
//i. It iterates over all the tasks in the array.
//ii. It prints each array item in the console.

let listAllTasks = () => {
    Tasks.forEach((element) => {
        console.log(element);
    })
}

//d.  Create a deleteTask function:
//i. It receives a string as a parameter called task.
//ii. It removes that string from the array.
//iii. It prints in console a message indicating the deletion.
//iv. It returns the number of elements in the array after the deletion.

let deleteTask = (task) => {
    let index = Tasks.indexOf(task);
    if(index > -1){
        Tasks.splice(index, 1);
        console.log(task + " has been deleted from my tasks");        
    }else{
        console.log(task + " not found in array.");        
    }
    return Tasks.length;
}

addTask("Work");
addTask("Eat");
addTask("Sleep");
listAllTasks();
deleteTask("Work");
deleteTask("cgergeye");
