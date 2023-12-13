const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close1 = document.getElementById("close");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}
if (close1) {
    close1.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}

// product1
product1 = [{
        img: "Images/Products/f1.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    },
    {
        img: "Images/Products/f2.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    }, {
        img: "Images/Products/f3.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    }, {
        img: "Images/Products/f4.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    }, {
        img: "Images/Products/f5.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    }, {
        img: "Images/Products/f6.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    }, {
        img: "Images/Products/f7.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    }, {
        img: "Images/Products/f8.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    },

    {
        img: "Images/Products/n1.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 900
    },
    {
        img: "Images/Products/n2.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200
    }, {
        img: "Images/Products/n3.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1400
    }, {
        img: "Images/Products/n4.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1600
    }, {
        img: "Images/Products/n5.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1000
    }, {
        img: "Images/Products/n6.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1100
    }, {
        img: "Images/Products/n7.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1300

    }, {
        img: "Images/Products/n8.jpg",
        brand: "adidas",
        para: "Catoon Astronaut T-Shirts",
        price: 1200

    }
]


const conpro = document.querySelector(".pro-container");
function product() {
    product1.map(prData => {
        const postEle1 = document.createElement("div");
        postEle1.classList.add("pro");
        postEle1.innerHTML = `
        <div onclick="window.location.href='shoppro.html'"> 
        <img src=${prData.img}>
        <div class="dre" >
            <span>${prData.brand}</span>
            <h5>${prData.para}</h5>
            <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <h4>&#x20B9;&nbsp;${prData.price} </h4>
        </div>
       
       <button ><a href=""><i class="fa fa-shopping-cart cart" aria-hidden="true"></i></a></button>
        </div>
    `
        conpro.appendChild(postEle1)
    })
   
}

product()


// const index = allbtn.getAttribute("index")
// console.log(index);

// var cart=[];
// function displaycart(e) {
//     let j= 0;
//     if(cart.length == 0){
//         document.getElementById("caremty").innerHTML="your cart is empty"
//     }
// }
// displaycart(product1)
// const blogDetails = [{
//     bimg: "Images/Blog/b1.jpg"
// }]
// console.log(blogDetails);

// const blogmain = document.querySelector("#blog");

// function blog() {
//     alert("k")
//     blogDetails.map(blogdetails => {
//      const blogs = document.createElementr("div");
//         blogs.classList.add("blog-box")
//         blogs.innerHTML = `  
//          <div class="blog-img">
//             <img src=${blogdetails.bimg}>
//         </div>
//         <div class="blog-details">
//             <h4>The Cotton-Jersey Zip-up Hoodie</h4>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consequatur aperiam atque, itaque debitis mollitia saepe a magni unde provident?</p>
//             <a href="#">Continue Reading.........</a>
//         </div>
//         <h1>13/01</h1>`
//     blogmain.appendChild(blogs)

//     })
// }
// blog()