const form = document.querySelector('#task-form')
const inputValue = document.querySelector('#input-content')
const todoContainer = document.querySelector('#items')
const completedContainer = document.querySelector('#completed-items')


let todos = []
let completedTodos = []
const todo = {
    id: Math.floor(Math.random() * 10000),
    name:'',
}

const addDeleteEvents = function () {
    const deleteBtns = document.querySelectorAll('.delete')
    const deleteBtnsArr = Array.from(deleteBtns)

    deleteBtnsArr.forEach(btns => btns.addEventListener('click', function (){
        let i = 0
        if (todoContainer.contains(this) == false){
            completedTodos.splice(i,1)
        } else {
            todos.splice(i,1)
        }
        i++
        updateList()
        
    }))

}

const addCompletedEvents = function () {
    const checkboxs = document.querySelectorAll('.checkbox')
    for (let i =0; i < checkboxs.length; i++){
        checkboxs[i].addEventListener('change', function (){

            if (todoContainer.contains(this) == false){//completed
                todos.push(completedTodos.splice(i,1)[0])
                
            } else {
                completedTodos.push(todos.splice(i,1)[0])
                console.log(completedTodos)
            }
            updateList()
        })
    }
}

const updateList = function(){
    todoContainer.innerHTML = ''
    completedContainer.innerHTML = ''

    todos.forEach( () => {
        let i = 0
        const todoContent =`<div class="item">
        <input type="checkbox" class="checkbox"/>
        <div class="content">${todos[i].name}</div>
        <button class="delete">Delete</button>
        </div>`
        todoContainer.innerHTML += todoContent
        i++
    })

    completedTodos.forEach ( () => {
        let i = 0
        const todoContentCompleted =`<div class="item">
        <input type="checkbox" class="checkbox" />
        <div class="content completed">${completedTodos[i].name}</div>
        <button class="delete">Delete</button>
        </div>`
        completedContainer.innerHTML+=todoContentCompleted
        i++
    })
    addDeleteEvents()
    addCompletedEvents()
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskValue = inputValue.value.trim();
    if (!taskValue) {
        alert("please add a task");
        return;
    }
    todo.name = taskValue
    let todoItem = todo
    todos.push(todoItem)
    updateList()

    console.log(todo)

    inputValue.value = ''
})
