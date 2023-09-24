let button=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
button.addEventListener('click',function(){
    console.log(input.value);
    let li=document.createElement("li");
    li.innerText=input.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    delbtn.style.marginLeft="2rem";

    ul.appendChild(li);
    li.appendChild(delbtn);
    input.value="";
})
// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener('click',function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Item deleted")
    }
})