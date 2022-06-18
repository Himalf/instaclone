let clicked = document.getElementsByClassName("clicked")[0];
clicked.addEventListener("click",()=>{
// alert("hello")
if(clicked.style. background=="white")
{
    clicked.style.background= "blue";
}
else{
    clicked.style.background = "white";
}
})