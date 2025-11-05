// let div=document.querySelector("div");
let ul=document.querySelector("ul");
let list=document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul is clicked");
// });

// for(li of list){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

let input=document.querySelector("#task");
let btn=document.querySelector("button");

btn.addEventListener("click", function(){
    // console.log(input.value);
    let newLi=document.createElement("li");
    let newBtn=document.createElement("button");
    newLi.innerText=input.value;
    newBtn.innerText="Delete";
    newBtn.classList.add("delete");
    ul.append(newLi);
    newLi.append(newBtn);
})
/*  it will not work for i(i-> list item) we have to use event delegation(work on parent element)
let del=document.querySelectorAll(".delete");
for(i of del){
    i.addEventListener("click", function(){
    // console.log(i.parentElement, "Deleted");
        let par=this.parentElement;
        console.log(par);
        par.remove();
    })
}
*/

ul.addEventListener("click", function (event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
        console.dir(listItem);
    }
})