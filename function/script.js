//window.localStorage

const form = document.querySelector('#task-form')
const inputValue = document.querySelector('#input-content')
const todoContainer = document.querySelector('#items')
const completedContainer = document.querySelector('#completed-items')


const todos = []
const todo = {
    id:null,
    name:'',
    status:false,
    delete: function(){
        return `<button class="delete" onClick="deleteTodo(this)">Delete</button>`
    },
    test: function(){
        console.log(this)
    }
}


let taskLists = new Array;
let task = new Object;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskValue = inputValue.value;
    if (!taskValue) {
        alert("please add a task");
        return;
    }

    task.id;
    task.isChecked = false;
    task.content = taskValue;

    taskLists.push(task);
    setIDtoTasks(taskLists);

    console.log(task.id);
    console.log(taskLists);
    
    const item = `<div class="item">
                    <input type="checkbox" class="checkbox"/>
                    <div class="content">${task.content}</div>
                    <button class="delete"">Delete</button>
                </div>`;

    const completedItem = `<div class="completed">
                    <input type="checkbox" class="checkbox" checked/>
                    <div class="content completed">${task.content}</div>
                    <button class="delete" onClick="">Delete</button>
                </div>`;

    todoContainer.innerHTML+=item;

    //add eventlistener 
    ifCheck(task.isChecked);
    deleteTask();


    inputValue.value="";
});
const test= ()=>{
    console.log("hi");
}
//console.log(task.isChecked);
const ifCheck = (isChecked) => {
    let checkboxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i< checkboxes.length;i++){
        checkboxes[i].addEventListener('change', (eee) => {
            eee.preventDefault();
            if (isChecked){
                isChecked = false;
            } else {
                isChecked = true;
            }
        })
    }
    return isChecked;
}

const deleteTask = () =>{
   
    let delBtns = document.getElementsByClassName('delete');

    for (let i = 0; i< delBtns.length;i++) {
        delBtns[i].addEventListener('click',(ee) =>{
            ee.preventDefault();
            ee.target.closest('.item').remove();
        })
    }
}

//assign ID;
const setIDtoTasks = (array) => {
    let i;
    for (i = 0; i < array.length; i++) {
        array[i].id = i;
    }
}
