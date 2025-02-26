import controller from "../modelAndController";
import Component from "../baseComponent";
import CompletedItem from "./completedItem";


class CompletedList extends Component {
    constructor() {
        super("div");

        controller.addEventListener("newCompleted",
            event => this.addCompletedElement(event)
        )
    }

    addCompletedElement(event) {
        let completed = event.detail.completed;
        console.log(event);
        console.log(completed);

        let completedItem = new CompletedItem(
            completed.id,
            completed.title,
            completed.desc
        );

        this.addChild(completedItem.rootElement);
    }
}

module.exports = CompletedList;