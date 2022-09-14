let savedUrl = [];
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el");
const urlFromLocalStorage = JSON.parse(localStorage.getItem("savedUrl"));
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");

let render = (url) => {
    let listItems = "";
    for (let i = 0; i < url.length; i++) {
        listItems += `<li><a href="${url[i]}" target= "_blank">${url[i]}</a></li>`
    }
    ulEl.innerHTML = listItems;
}
if (urlFromLocalStorage){
    savedUrl = urlFromLocalStorage;
    render(savedUrl);
}
inputBtn.addEventListener("click", () => {
    savedUrl.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("savedUrl", JSON.stringify(savedUrl))
    render(savedUrl);    
})
tabBtn.addEventListener("click", () => {

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        savedUrl.push(tabs[0].url);
        localStorage.setItem("savedUrl", JSON.stringify(savedUrl));
        render(savedUrl);
    })
})
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    savedUrl = [];
    render(savedUrl);
} )
