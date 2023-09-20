const val1 = document.querySelector("#val1");
const val2 = document.querySelector("#val2");
const answer = document.querySelector("#answer");

function inputHandler() {
    // val1とval2のvalue属性の値を足し合わせます。
    // val1.valueは文字列で取得されるため、Numberによって数値型に変換します。
    answer.textContent = Number(val1.value) + Number(val2.value);
}

val1.addEventListener("input", inputHandler);
val2.addEventListener("input", inputHandler);

const createInput = document.querySelector("#create-input");
const createBtn = document.querySelector("#create-btn");
const todoList = document.querySelector("#todo-List");
const todoItemTmpl = document.querySelector("#todo-item-tmpl");
const todoItem = todoItemTmpl.content;

console.log(todoItem);

createBtn.addEventListener("click", () => {
    createTodoItem(createInput.value);
});

function createTodoItem(value) {
    const newItem = todoItem.cloneNode(true);
    const newTitle = newItem.querySelector(".todo-title");
    const newDelBtn = newItem.querySelector(".delete-btn");
    const newComBtn = newItem.querySelector(".complete-btn");

    newTitle.textContent = value;

    newDelBtn.addEventListener("click", (event) => {
        deleteTodoItem(event.target.parentElement);
    });

    newComBtn.addEventListener("click", (event) => {
        completeTodoItem(event.target.parentElement);
    });

    todoList.append(newItem);
    createInput.value = "";
}

function deleteTodoItem(item) {
    item.remove();
}

function completeTodoItem(item) {
    item.classList.toggle("completed");
}
