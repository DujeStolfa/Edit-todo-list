import controller from "../modelAndController";
import Component from "../baseComponent";
import TodoInput from "./todoInput";
import TodoList from "./todoList";


class TodoApp extends Component {
    constructor() {
        super("div");
        this.todoInput = new TodoInput();
        this.todoList = new TodoList();

        this.addChildren(
            [
                this.todoInput.rootElement,
                this.todoList.rootElement,
            ]
        )
    }
}

module.exports = TodoApp;