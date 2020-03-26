import TodoApp from "./components/todoApp";


let todoApp = new TodoApp();
let body = document.getElementsByTagName("body")[0];
body.appendChild(todoApp.rootElement);
