let btn = document.querySelector("button");
let imp = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = imp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    imp.value = "";
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
})
ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let del = event.target.parentElement;
        del.remove(); 
    }
})