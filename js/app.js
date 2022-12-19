let open = document.getElementById("open");
let close = document.getElementById("close");
let mobile = document.getElementById("mobile");

let items = document.querySelectorAll(".item1");
items.forEach((item)=>{
    item.addEventListener("click", ()=>{
        mobile.classList.add("disabled");
    });
}) 


open.addEventListener("click", ()=> {
    mobile.classList.remove("disabled");
})

close.addEventListener("click", ()=> {
    mobile.classList.add("disabled");
})
