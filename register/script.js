var selectionBoxes = document.getElementsByClassName("select-box");

for (var i = 0; i < selectionBoxes.length; i++) {
    let item = selectionBoxes.item(i);
    let itemValue = item.querySelector(".value")
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        
        if (item.dataset.open === "true") {
            item.dataset.open = "false";
        } else {
            item.dataset.open = "true";
        }
    });

    var options = item.getElementsByClassName("option");
    for (var j = 0; j < options.length; j++) {
        let option = options.item(j);
        option.addEventListener("click", () => {
            itemValue.innerText = option.innerText; 
        })
    }
}

window.addEventListener("click", () => {
    for (var i = 0; i < selectionBoxes.length; i++) {
        selectionBoxes.item(i).dataset.open = "false";
    }
})
