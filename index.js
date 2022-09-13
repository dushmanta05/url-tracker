let savedUrl = [];
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el");


let render = (url) => {let listItems = "";

    for (let i = 0; i < url.length; i++) {
        listItems += `<li><a href="${url[i]}" target= "_blank">${url[i]}</a></li>`
    }

    ulEl.innerHTML = listItems;
}

const urlFromLocalStorage = JSON.parse(localStorage.getItem("savedUrl"))

if (urlFromLocalStorage){
    savedUrl = urlFromLocalStorage;
    render(savedUrl);
}

const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", () => {
    savedUrl.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("savedUrl", JSON.stringify(savedUrl))
    render(savedUrl);
    
})

const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    savedUrl = [];
    render(savedUrl);
} )
