const slipper = document.querySelector ('.slipper1');
const rightBtn = document.querySelector ('.previous1');
const leftBtn = document.querySelector ('.previous');
const thumbnails = document.querySelectorAll ('.thumbnails');
const overlay=document.querySelector(".overlay")
const overall1=document.querySelector(".overall1")
const close=document.querySelector(".close")
const number=document.getElementById("number")
const container=document.querySelector(".container")
const emptycart=document.getElementById("emptycart")
const price=document.getElementById("price")
const head=document.getElementById("head")


const images = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
];

let currentIndex = 0;

rightBtn.addEventListener ('click', function () {
  currentIndex = (currentIndex + 1) % images.length;
  slipper.src = images[currentIndex];
});

leftBtn.addEventListener ('click', function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slipper.src = images[currentIndex];
});

thumbnails.forEach ((thumb, index) => {
  thumb.addEventListener ('click', function () {
    slipper.src = images[index];
    currentIndex = index;
  });
});

function handleclick(){
     overlay.style.display="block"
     overall1.style.display="block"
}

close.addEventListener("click",function(){
  overlay.style.display="none"
     overall1.style.display="none"
})

numbers=0
total=125

function handleincrese(){
  number.textContent=++numbers
  var all= numbers*total;
  price.textContent= `$  ${all}`
}


function handledecrese(){
  if(numbers>=0){
    numbers--
    number.textContent=numbers
    var all2= numbers*total;
    price.textContent= `$  ${all2}`
  }
  }

function handlecart(){
    container.style.display="block"
}

function handlecross(){
    container.style.display="none"
}

function handleappend(){

  emptycart.style.display="none"

  var div=document.createElement("div")
  div.classList.add("item")

  var shoeimg=document.createElement("img")
  shoeimg.src="images/image-product-1.jpg"
  shoeimg.classList.add("shoeimg")

  var img =document.createElement("p")
  img.textContent=head.textContent
  img.style.marginBottom="1px"
  

  let p = document.createElement("p");
  p.innerHTML = `${numbers} x $${total} = <strong>$${numbers*total}</strong>`
  p.style.marginTop="0px"
  

  var dltbtn=document.createElement("img")
  dltbtn.src="images/icon-delete.svg"
  dltbtn.style.cursor="pointer";
  dltbtn.style.marginLeft="10px"

  dltbtn.addEventListener("click",function(){
       div.remove()
  })

  var div2=document.createElement("div")

  div2.append(img,p)


  div.appendChild(shoeimg)
  div.appendChild(div2)
  div.appendChild(dltbtn)

  container.appendChild(div)

}


function handlelocate(url){
    window.open(url, "_blank");
}

function handlewindow(){
      window.location="shoelist.html"
 }



