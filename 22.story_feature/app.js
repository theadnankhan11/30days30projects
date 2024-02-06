let arr = [
    {dp:"https://images.unsplash.com/photo-1706866555725-c1ecb4342c36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1707076463996-e17fb5f8fa95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1706803501715-8d0e4445e446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1706651475202-025ad8eda6b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1621061403547-47987c57c683?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwbGV8ZW58MHx8MHx8fDA%3D",
     story:"https://images.unsplash.com/photo-1585424579564-51238f85935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVwbGV8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1631911950144-5d6d45a73665?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcGxlfGVufDB8fDB8fHww",
     story:"https://images.unsplash.com/photo-1556819793-5acee9fb0a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcGxlfGVufDB8fDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1664267832588-650cc54fcea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcGxlfGVufDB8fDB8fHww",
     story:"https://images.unsplash.com/photo-1521170291036-a72fda091292?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcGxlfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1653152232504-3e1a9891dc46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcGxlfGVufDB8fDB8fHww",
     story:"https://images.unsplash.com/photo-1667558365052-e1cf0ab65329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcGxlfGVufDB8fDB8fHww"},
]
let storys = document.querySelector("#storys")
let clutter = ""
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
     <img id="${idx}" src="${elem.dp}" alt= "">
     </div>`
})

document.querySelector("#storys").innerHTML = clutter

storys.addEventListener("click",function(dets){
   document.querySelector("#full-screen").style.display = "block"

   document.querySelector("#full-screen").style.backgroundImage =`url(${ (arr[dets.target.id].story)})`

   setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none"
   }, 3000);
})