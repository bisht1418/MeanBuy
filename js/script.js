   
    let myDiv = document.querySelector("#container")
    let noMultiData = JSON.parse(localStorage.getItem("cart"))
    let cart = JSON.parse(localStorage.getItem("cart"))||[]
    let bag = []

    let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"

    fetch(url).then((res)=>res.json())
              .then((data)=>{
                let x = data.data
                bag = x
                console.log(bag)
                displayData(x)
              })


           

    function displayData(data){

        myDiv.innerHTML = null

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
        button.innerText = "Add to Cart"
        button.addEventListener("click",()=>{
          for(let i=0; i<cart.length; i++){
            if(cart[i].id===element.id){
              alert("Product is already available")
              return
            }
          }
          cart.push({...element,quantity:1})         
          localStorage.setItem("cart",JSON.stringify(cart))
          alert("Item added to cart")
        })  

        div.append(img,brand,price,detail,Category,button)
        myDiv.append(div)

      })

    }  
  


   