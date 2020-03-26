model = {
    todos: []
};


class Controller extends EventTarget {
    constructor() {
        super();
        this.todoIds = 0;
    }

    addTodo(title, desc) {
        let todoObj = {
            id: this.todoIds,
            title: title,
            desc: desc,
        };

        model.todos.push(todoObj);
        console.log(todoObj);

        this.dispatchEvent(
            new CustomEvent(
                "newTodo",
                {detail: {todo: todoObj}}
                )
        );

        this.todoIds++;
    }

    removeTodo(id) {
        model.todos = model.todos.filter(
            (todo) => todo.id !== id
        );

        console.log(model);
    }
}

let controller = new Controller();

module.exports = controller;