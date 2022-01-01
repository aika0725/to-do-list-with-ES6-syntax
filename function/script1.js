todos = getSavedTodos()
renderList()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const todo = {
        id: Math.floor(Math.random() * 10000),
        text:'',
        isCompleted: false,
        category: 'none'
    }
    if (!e.target.elements.inputValue.value.trim()) {
        alert("please add a todo");
        return;
    }

    todo.text = e.target.elements.inputValue.value.trim()
    todos.push(todo)
    renderList()
    saveTodo()

    e.target.elements.inputValue.value=''
})

