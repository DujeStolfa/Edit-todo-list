import controller from "../modelAndController";
import Component from "../baseComponent";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
import CompletedList from "./completedList";


class TodoApp extends Component {
    constructor() {
        super("div");
        this.todoInput = new TodoInput();
        this.todoList = new TodoList();
        this.completedList = new CompletedList();

        this.addChildren(
            [
                this.todoInput.rootElement,
                this.todoList.rootElement,
                this.completedList.rootElement
            ]
        )
    }
}

module.exports = TodoApp;