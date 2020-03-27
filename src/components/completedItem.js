import controller from "../modelAndController";
import Component from "../baseComponent";

//TODO implement class Item
class CompletedItem extends Component {
    constructor(id, title, desc) {
        super("div");

        this.id = id;

        let titleElement = document.createElement("h3");
        titleElement.innerHTML = title;

        let descElement = document.createElement("p");
        descElement.innerHTML = desc;

        let divider = document.createElement("hr");

        this.addChildren(
            [
                titleElement,
                descElement,
                divider
            ]
        )
    }
}

module.exports = CompletedItem;