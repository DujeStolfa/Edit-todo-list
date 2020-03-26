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
            () => {this.removeSelf()}
            );

        let divider = document.createElement("hr");

        this.addChildren(
            [
                titleElement,
                descElement,
                removeButton,
                divider,
            ]
        )
    }

    removeSelf() {
        let parent = this.rootElement.parentNode;
        parent.removeChild(this.rootElement);
        controller.removeTodo(this.id);
    }
}

module.exports = TodoItem;