
let istatus = document.querySelector("h5")
let  btn = document.querySelector("#add")
let check = 0


btn.addEventListener("click", function(){
        if (check== 0) {
        istatus.innerHTML = "Follow";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend"
        check = 1 
    }else{
        istatus.innerHTML = "Unfollow";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend"
        check = 0

    }
    
})