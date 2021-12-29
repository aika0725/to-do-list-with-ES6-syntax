//window.localStorage

const form = document.querySelector('#task-form');
const inputValue = document.querySelector('#input-content');
const todoContainer = document.querySelector('#items');
const completedContainer = document.querySelector('#completed-items')

let items = [];
let completedItemItems = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = inputValue.value;

    if (!task) {
        alert("please add a task");
        return;
    }

    //<todoContainer> -> <item> -> <checkbox><content><action>
    const taskItem = document.createElement("div");
    taskItem.classList.add("item");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add = "checkbox";

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");
    taskContent.innerHTML = task;

    const taskActionDelete = document.createElement("button");
    taskActionDelete.classList.add("delete");
    taskActionDelete.innerHTML = "Delete";

    //<completedContainer> -> <completed item> -> <checkbox><content><action>
    const taskCompletedItem = document.createElement("div");
    taskCompletedItem.classList.add("completed");
    
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskActionDelete);

    todoContainer.appendChild(taskItem);

    items.push(taskItem);
    setIDtoTasks(items,"task");

    inputValue.value="";

    //delete action
    taskActionDelete.addEventListener('click', function(){ deletTask(taskItem, taskCompletedItem) });

    //set task as completed 
    taskCheckbox.addEventListener('change', function(){ completeTask(taskCheckbox, taskContent, taskActionDelete, taskItem, taskCompletedItem) });

});

//delete action
const deletTask = (taskItem,taskCompletedItem) => {

    let index = items.indexOf(taskItem);

    if (index > -1){

        items.splice(index,1);
        todoContainer.removeChild(taskItem);
        setIDtoTasks(items,"task");

    } else {

        let indexCompleted = completedItemItems.indexOf(taskCompletedItem);
        console.log("not here");
        completedItemItems.splice(indexCompleted,1);
        completedContainer.removeChild(taskCompletedItem);
        setIDtoTasks(completedItemItems,"compeleted");
    }
}

//set task as completed

const completeTask = (taskCheckbox, taskContent, taskActionDelete, taskItem, taskCompletedItem) => {
        
    if (taskCheckbox.checked){

        //delete from to-do list
        let index = items.indexOf(taskItem);
        items.splice(index,1);
        todoContainer.removeChild(taskItem);
        setIDtoTasks(items,"task");

        //add to the completed list
        taskCompletedItem.appendChild(taskCheckbox);
        taskCompletedItem.appendChild(taskContent);
        taskCompletedItem.appendChild(taskActionDelete);
        completedItemItems.push(taskCompletedItem);
        setIDtoTasks(completedItemItems,"compeleted");
        completedContainer.appendChild(taskCompletedItem);

        //add line-through
        taskContent.classList.add('completedItem')

    } else {

        //delete from the completed list
        let index = items.indexOf(taskCompletedItem);
        completedItemItems.splice(index,1);
        completedContainer.removeChild(taskCompletedItem);
        setIDtoTasks(completedItemItems,"compeleted");

        //add to the to-do list
        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskActionDelete);
        items.push(taskItem);
        todoContainer.appendChild(taskItem);
        setIDtoTasks(items,"task");

        //remove line-through
        taskContent.classList.remove('completedItem');
    }
}

//assign ID;
const setIDtoTasks = (array, string) => {
    let i;
    for (i = 0; i < array.length; i++) {
        array[i].id = string + i;
    }
    return i + 1;
}

//setIDtoTasks(items,"task");
//setIDtoTasks(completedItemItems,"completedTask");