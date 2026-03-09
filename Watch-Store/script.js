let cart=[]
let total=0

function scrollToProducts(){
document.getElementById("products").scrollIntoView()
}

function addToCart(name,price){

cart.push({name,price})

total+=price

updateCart()

}

function updateCart(){

let list=document.getElementById("cart-items")
list.innerHTML=""

cart.forEach(item=>{

let li=document.createElement("li")
li.textContent=item.name+" - $"+item.price
list.appendChild(li)

})

document.getElementById("total").innerText=total
document.getElementById("cart-count").innerText=cart.length

}

function checkout(){

if(cart.length===0){
alert("Cart is empty")
return
}

alert("Order placed successfully!")

cart=[]
total=0

updateCart()

}

function showDetails(title,desc,price){

document.getElementById("popup").style.display="block"

document.getElementById("p-title").innerText=title
document.getElementById("p-desc").innerText=desc
document.getElementById("p-price").innerText=price

}

function closePopup(){

document.getElementById("popup").style.display="none"

}