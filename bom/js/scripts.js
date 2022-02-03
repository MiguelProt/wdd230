const input = document.getElementById("favchap");
const button = document.querySelector("button[type='submit']");
const list = document.querySelector(".list");

button.setAttribute("disabled", true);

button.addEventListener("click", function () {
    console.log(input.value);
    const createdLi = document.createElement('li');
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", deleteItem);




    createdLi.textContent = input.value;
    createdLi.appendChild(deleteButton);
    list.appendChild(createdLi);
    clearInput();
});

function deleteItem() {
    const parentLi = (this).parentNode.remove();
    clearInput();
}

function clearInput() {
    input.value = '';
    input.focus();
}

input.addEventListener("input", function () {
    console.log(input.value);
    console.log(button);
    if (input.value != '' && input.value != null )
        button.removeAttribute("disabled");
    else
        button.setAttribute("disabled", true);
});