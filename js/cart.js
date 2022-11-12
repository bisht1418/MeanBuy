
let myCart = document.querySelector("#myCart")
let cartData = JSON.parse(localStorage.getItem("cart"))||[]

    function displayData(data){

        myCart.innerHTML = null

        data.forEach(function(element){

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.setAttribute("src",element.img)

        let brand = document.createElement("h2")
        brand.innerText = element.brand

        let price = document.createElement("h3")
        price.innerText = element.price

        let detail = document.createElement("p")
        detail.innerText = element.details

        let Category= document.createElement("p")
        Category.innerText = element.category

        let button = document.createElement("button")
        button.innerText = "Remove"
        button.addEventListener("click",()=>{
          cartData = cartData.filter((ele)=>{
            return ele.id != element.id
          })
          localStorage.setItem("cart",JSON.stringify(cartData))
          displayData(cartData)

        })

        let buy = document.createElement("a")
        buy.innerText = "Buy Now"
        buy.addEventListener("click",()=>{
          localStorage.setItem("checkOut",JSON.stringify(element))||[]
           window.location.href = "../pages/itemDetail.html"           
           
        })
      
        div.append(img,brand,price,detail,Category,button,buy)
        myCart.append(div)

      })

    }  
  
displayData(cartData)





