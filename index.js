let pushBtn = document.getElementById("push-btn");
let popBtn = document.getElementById("pop-btn");
let input = document.getElementById("input");
let list = document.getElementById("list");

let items= [];

function pushToList(){
    let value = input.value;
    items.push(value)
    renderList();
}

function popToList(){
    items.pop()
    renderList();
}

function renderList(){
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    }
    input.value ="";
}

pushBtn.addEventListener("click",pushToList);
popBtn.addEventListener("click",popToList);