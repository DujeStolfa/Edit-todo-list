import controller from "../modelAndController";
import Component from "../baseComponent";
import TodoItem from "./todoItem";


class TodoList extends Component {
    constructor() {
        super("div");

        controller.addEventListener("newTodo",
            (event) => {
            this.addTodoElement(event);
        })
    }

    addTodoElement(event) {
        let todo = event.detail.todo;
        console.log(event);
        console.log(todo);
        let todoItem = new TodoItem(
            todo.id,
            todo.title,
            todo.desc,
        );

        this.addChild(todoItem.rootElement);
    }
}

module.exports = TodoList;