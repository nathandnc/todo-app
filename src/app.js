const todos = [];

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const addItem = () => {
    const text = todoInput.value.trim();
    if (text === '') {
        return;
    }
    todos.push(text);
    todoInput.value = '';
    renderList();
};

const removeItem = (index) => {
    todos.splice(index, 1);
    renderList();
};

const renderList = () => {
    todoList.innerHTML = '';
    todos.forEach((text, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = text;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', () => removeItem(index));

        li.appendChild(span);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
};

addBtn.addEventListener('click', addItem);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});
