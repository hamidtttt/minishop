let navElem = document.getElementById('mainNav')
let imgElem = document.querySelector('img')
let productsContainer = document.querySelector('.container')


function loading(){
    let loader = document.querySelector('.loader')
    loader.classList.add('hidden')
}

let productsArrOne = [
    {id:1 , title : 'Blue Shoe' , price : 121 , src : './images/1.png' },
    {id:2 , title : 'Green Shoe' , price : 119 , src : './images/2.png' },
    {id:3 , title : 'Yellow Shoe' , price : 102 , src : './images/3.png'},
    {id:4 , title : 'Red T-Shirt' , price : 41 , src : './images/red-t-shirt.png'},
    {id:5 , title : 'Balck T-Shirt' , price : 39 , src : './images/black-t-shirt.png'},
    {id:6 , title : 'Blue Hoodie' , price : 80 , src : './images/blue-hoodie.png'},
    {id:7 , title : 'Balck Hoodie' , price : 84 , src : './images/black-hoodie.png'}
]


productsArrOne.forEach((product)=>{
    productsContainer.insertAdjacentHTML('beforeend' , '      <div class="product-card"> <h1>'+ product.title +'</h1> <p> Click on the (( see more )) option to get information </p> <div class="product-pic" style="background-image: url('+ product.src +');"></div> <div class="product-info"> <div class="product-price">'+ product.price +'$</div> <a href="product.html?id='+ product.id +'" class="product-button">See More</a></div></div><br/><br/>')
})

function Scroll(event){
    var scrollTop = document.documentElement.scrollTop
    if(scrollTop > 0){
        // navElem.style.backgroundColor = 'blue'
        navElem.classList.add("bg-black");
        navElem.classList.add("txt-white");
        imgElem.style.height = '52px'
    }
    else{
        navElem.classList.remove("bg-black");
        navElem.classList.remove("txt-white");
        imgElem.style.height = '84px'
    }
}