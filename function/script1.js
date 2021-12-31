const form = document.querySelector('#task-form')
const todoContainer = document.querySelector('#todo-items')
const completedContainer = document.querySelector('#completed-items')

let todos = []

const printList = (list)=>{
    list.forEach((todo)=>{
        const listContent = `<div class="item" id="${todo.id}">
        <label class="checkbox"><input type="checkbox">${todo.text}</label>
        <button class="delBtn">Delete</button>
        </div>`
        if (!todo.isCompleted){
            todoContainer.innerHTML += listContent
        }else{
            const listContent = `<div class="item" id="${todo.id}">
            <label class="checkbox completed"><input type="checkbox" class="checkbox" checked>${todo.text}</label>
            <button class="delBtn">Delete</button>
            </div>`
            completedContainer.innerHTML += listContent
        }
    })
}

const renderList = () => {
    todoContainer.innerHTML = ''
    completedContainer.innerHTML=''
    printList(todos)
    removeToto()
    completedTodo()
}

const removeToto = ()=>{
    const btns = document.querySelectorAll('.delBtn')
    btns.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const id = e.target.closest('.item').getAttribute('id')
            const selectedIndex = todos.findIndex((todo)=>{
                return todo.id == id
            })
            todos.splice(selectedIndex,1)
            renderList()
        })
    })
}

const completedTodo = () =>{
    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((box)=>{
        box.addEventListener('change', (e)=>{
            const id = e.target.closest('.item').getAttribute('id')
            const selectedIndex = todos.findIndex((todo)=>{
                return todo.id == id
            })
            todos[selectedIndex].isCompleted = e.target.checked
            renderList()
        })
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const todo = {
        id: Math.floor(Math.random() * 10000),
        text:'',
        isCompleted: false
    }
    
    todo.text = e.target.elements.inputValue.value
    todos.push(todo)
    renderList()

    e.target.elements.inputValue.value=''
})