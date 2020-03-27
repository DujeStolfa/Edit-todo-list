import Component from "../baseComponent";
import controller from "../modelAndController"


class TodoInput extends Component {
    constructor() {
        super("div");

        this.inputTitle = document.createElement("input");
        this.inputTitle.placeholder = "Title";

        this.inputDesc = document.createElement("input");
        this.inputDesc.placeholder = "Description";

        this.submitBtn = document.createElement("button");
        this.submitBtn.innerHTML = "SUBMIT";
        this.submitBtn.addEventListener("click", () => {
            this.onSubmit();
        });


        this.addChildren(
            [
                this.inputTitle,
                document.createElement("br"),
                this.inputDesc,
                document.createElement("br"),
                this.submitBtn
            ]
        );
    }

    getInputData() {
        return {
            title: this.inputTitle.value,
            desc: this.inputDesc.value
        }
    }

    onSubmit() {
        let inputData = this.getInputData();
        controller.addTodo(
            inputData.title,
            inputData.desc,
        );
    }

}


module.exports = TodoInput;