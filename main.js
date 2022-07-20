let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")

let btn = document.getElementById("btn")

let arr = ["v", "i","j","a","y"]

box1.textContent = "v"
box2.textContent = "i"
box3.textContent = "j"
box4.textContent = "a"
box5.textContent = "y"

let boxArr = [box1,box2,box3,box4,box5]

let arr1 = Object.assign([],arr)

btn.addEventListener("click",function(){
    
    
 
// console.log(ran);
        
    boxArr.forEach(b=>{
     let ran = Math.floor(Math.random()*arr1.length)
    b.textContent= arr1[ran]
    arr1.splice(ran,1)  
    })
    
    arr1 = Object.assign([],arr)
})

