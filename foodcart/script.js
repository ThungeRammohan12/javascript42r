let items_cart = [];

let container = document.createElement("div");
document.body.appendChild(container);
container.style.background = "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
container.style.padding = "25px";
container.style.border = "3px solid #333";
container.style.textAlign = "center";
container.style.borderRadius = "15px";
container.style.margin = "8% 30%";
container.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.2)";

let heading = document.createElement("h1");
heading.textContent = "🍔 Food Items Cart 🍕";
heading.style.color = "#333";
heading.style.fontFamily = "Verdana, sans-serif";
heading.style.textShadow = "1px 1px 2px #fff";
container.appendChild(heading);

let user_input = document.createElement("input");
container.appendChild(user_input);
user_input.placeholder = "Enter food item...";
user_input.style.padding = "8px 15px";
user_input.style.borderRadius = "8px";
user_input.style.border = "2px solid #666";
user_input.style.outline = "none";
user_input.style.fontSize = "16px";

let btn1 = document.createElement("button");
container.appendChild(btn1);
btn1.textContent = "➕ Add Item";
btn1.style.padding = "8px 15px";
btn1.style.marginLeft = "10px";
btn1.style.border = "none";
btn1.style.borderRadius = "8px";
btn1.style.background = "#ff7eb3";
btn1.style.color = "white";
btn1.style.fontSize = "15px";
btn1.style.cursor = "pointer";
btn1.style.transition = "0.3s";

btn1.onmouseover = () => (btn1.style.background = "#ff4f8b");
btn1.onmouseout = () => (btn1.style.background = "#ff7eb3");

// container for items
let listContainer = document.createElement("div");
listContainer.style.marginTop = "20px";
container.appendChild(listContainer);

// 🔑 render function
function renderList() {
    listContainer.innerHTML = ""; // clear old UI

    items_cart.forEach((item, index) => {
        let itemDiv = document.createElement("div");
        itemDiv.style.margin = "8px 0";
        itemDiv.style.padding = "10px";
        itemDiv.style.borderRadius = "10px";
        itemDiv.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
        itemDiv.style.display = "flex";
        itemDiv.style.justifyContent = "space-between";
        itemDiv.style.alignItems = "center";
        itemDiv.style.fontSize = "18px";
        itemDiv.style.fontWeight = "bold";
        itemDiv.style.color = "#333";
        itemDiv.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.15)";

        let h1ele = document.createElement("span");
        h1ele.textContent = "🍴 " + item;
        itemDiv.appendChild(h1ele);

        // remove button
        let sub_btn = document.createElement("button");
        sub_btn.textContent = "❌ Remove";
        sub_btn.style.padding = "6px 12px";
        sub_btn.style.border = "none";
        sub_btn.style.borderRadius = "6px";
        sub_btn.style.background = "#ff4f4f";
        sub_btn.style.color = "white";
        sub_btn.style.cursor = "pointer";
        sub_btn.style.transition = "0.3s";
        sub_btn.onmouseover = () => (sub_btn.style.background = "#cc0000");
        sub_btn.onmouseout = () => (sub_btn.style.background = "#ff4f4f");

        sub_btn.onclick = function () {
            items_cart.splice(index, 1); // remove item
            renderList(); // re-render UI
        };

        itemDiv.appendChild(sub_btn);
        listContainer.appendChild(itemDiv);
    });
}

// add button click
btn1.onclick = function () {
    let cur_item = user_input.value.trim();
    if (cur_item === "") return; // ignore empty
    items_cart.push(cur_item);
    console.log(items_cart);
    user_input.value = "";
    renderList(); // re-render UI
};
