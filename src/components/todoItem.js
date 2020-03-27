import controller from "../modelAndController";
import Component from "../baseComponent";


class TodoItem extends Component {
    constructor(id, title, desc) {
        super("div");

        this.id = id;

        let titleElement = document.createElement("h3");
        titleElement.innerHTML = title;

        let descElement = document.createElement("p");
        descElement.innerHTML = desc;

        let removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.id = "remove-button";
        removeButton.addEventListener(
            "click",
            () => { this.removeSelf() }
        );

        let completedButton = document.createElement("button");
        completedButton.innerHTML = "!";
        completedButton.id = "completed-button";
        completedButton.addEventListener(
            "click",
            () => this.complete()
        );

        let divider = document.createElement("hr");

        this.addChildren(
            [
                titleElement,
                descElement,
                removeButton,
                completedButton,
                divider
            ]
        )
    }

    removeSelf() {
        let parent = this.rootElement.parentNode;
        parent.removeChild(this.rootElement);
        controller.removeTodo(this.id);
    }

    complete() {
        controller.addCompleted(this.id);
        this.removeSelf();
    }
}

module.exports = TodoItem;