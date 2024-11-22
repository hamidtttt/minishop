const divHour = document.getElementById('hour')
const divMinute = document.getElementById('minute')
const divsSconds = document.getElementById('seconds')
let shoeTitle = document.querySelector('h1')
let shoeDetail = document.querySelector('p')
let shoeImg = document.querySelector('img')
let backBtn = document.querySelector('button')

let productsArr = [
    {id:1 , title : 'Blue Shoe' , price : 121 , src : './images/1.png' , hour : 21 , desc : '          Blue shoes help the health of your feet with comfortable breathing and soft soles This sports shoe helps to improve and comfort your feet in walking and various sports Until end of discount : 121$ → 115$'},
    {id:2 , title : 'Green Shoe' , price : 119 , src : './images/2.png' , hour : 11 , desc : '          Green shoes help the health of your feet with comfortable breathing and soft soles This sports shoe helps to improve and comfort your feet in walking and various sports Until end of discount : 119$ → 110$'},
    {id:3 , title : 'Yellow Shoe' , price : 102 , src : './images/3.png' , hour : 2 , desc : '          Yellow shoes help the health of your feet with comfortable breathing and soft soles This sports shoe helps to improve and comfort your feet in walking and various sports Until end of discount : 102$ → 99$'},
    {id:4 , title : 'Red T-Shirt' , price : 41 , src : './images/red-t-shirt.png' ,  hour : 5 , desc : '          red t-shirt is a great choice to add a special touch to your everyday wardrobe. Made of soft and breathable fabric that ensures comfort all day long. Its classic crew neck and short sleeves make this t-shirt a great option for everyday wear or layering under jackets and sweatshirts. Whether you are spending time with friends or relaxing at home, this t-shirt will give you comfort and style with its unique design. Until end of discount : 41$ → 38$'},
    {id:5 , title : 'Balck T-Shirt' , price : 39 , src : './images/black-t-shirt.png' , hour : 22 , desc :      'balck t-shirt is a great choice to add a special touch to your everyday wardrobe. Made of soft and breathable fabric that ensures comfort all day long. Its classic crew neck and short sleeves make this t-shirt a great option for everyday wear or layering under jackets and sweatshirts. Whether you are spending time with friends or relaxing at home, this t-shirt will give you comfort and style with its unique design.Until end of discount : 39$ → 35$'},
    {id:6 , title : 'Blue Hoodie' , price : 80 , src : './images/blue-hoodie.png' , hour : 10 ,  desc : '          The Blue hoodie is with you in the cold days of the year. In autumn and winter, it is a good option for skiing, daily activities and even at home. This hoodie has a double-sided pocket in the middle and a hood. Elastic is used to prevent the cold from entering these parts and the sweatshirt fits better on the body Until end of discount : 80$ → 75$'},
    {id:7 , title : 'Balck Hoodie' , price : 84 , src : './images/black-hoodie.png' , hour : 9 ,  desc : '          The Black hoodie is with you in the cold days of the year. In autumn and winter, it is a good option for skiing, daily activities and even at home. This hoodie has a double-sided pocket in the middle and a hood. Elastic is used to prevent the cold from entering these parts and the sweatshirt fits better on the body Until end of discount : 84$ → 80$'}
]

backBtn.addEventListener('click',()=>{
    history.back()
})

let locationParams = new URLSearchParams(location.search)
let productID = locationParams.get('id')

let mainProductObject = productsArr.find(function(product){
    return product.id == productID
})

if(mainProductObject){
    shoeTitle.innerHTML = mainProductObject.title
    shoeDetail.innerHTML = mainProductObject.desc
    shoeImg.src = mainProductObject.src
    setInterval(()=>{
        let h = mainProductObject.hour
        let m = Math.floor(Math.random() * 60)
        let s = Math.floor(Math.random() * 60)
    
        if(h<10){
            h = '0' + h
        }
        if(m<10){
            m = '0' + m
        }
        if(s<10){
            s = '0' + s
        }
    
    
        divHour.innerHTML = h
        divMinute.innerHTML = m
        divsSconds.innerHTML = s
    
    },1000)
}else{
    location.href = 'file:///C:/Users/User/Desktop/js/projects/project29/index.html'
}

