// Save todo to localstorage
const saveTodo = () => {
    const todosJSON = JSON.stringify(todos)
    localStorage.setItem('todoList', todosJSON)
}

// Get todos from localstorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todoList')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Create and print the todo list
const printList = (list) => {
    list.forEach((todo) => {
        const listContent = `<div class="form-check item" id="${todo.id}">
        <label class="${!todo.isCompleted ? "form-check-label" : "completed"} checkbox" >
        <input class="form-check-input" type="checkbox" ${todo.isCompleted && 'checked'}>${todo.text}</label>
        <button class="btn btn-outline-light btn-sm delBtn right1">❌</button>
        </div>`
        if (!todo.isCompleted) {
            todoContainer.innerHTML += listContent
        } else {
            completedContainer.innerHTML += listContent
        }
    })
}

// Remove todo
const removeToto = () => {
    const btns = document.querySelectorAll('.delBtn')
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.target.closest('.item').getAttribute('id')
            const selectedIndex = todos.findIndex((todo) => {
                return todo.id == id
            })
            todos.splice(selectedIndex, 1)
            saveTodo()
            renderList()
        })
    })
}

// Set completed status for todo 
const completedTodo = () => {
    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((box) => {
        box.addEventListener('change', (e) => {
            const id = e.target.closest('.item').getAttribute('id')
            const selectedIndex = todos.findIndex((todo) => {
                return todo.id == id
            })
            todos[selectedIndex].isCompleted = e.target.checked
            renderList()
            saveTodo()
        })
    })
}

// Render the todo list 
const renderList = () => {
    todoContainer.innerHTML = ''
    completedContainer.innerHTML = ''
    printList(todos)
    removeToto()
    completedTodo()
}