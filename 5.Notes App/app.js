const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");

}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);

}

createbtn.addEventListener("click" ,()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
    
})


notescontainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll("input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})