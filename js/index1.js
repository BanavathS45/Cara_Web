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
features = [{
        image: "Images/Features/f1.png",
        title: "Free Shipping"
    },
    {
        image: "Images/Features/f2.png",
        title: "Online Order"
    },
    {
        image: "Images/Features/f3.png",
        title: "Save Money"
    },
    {
        image: "Images/Features/f4.png",
        title: " Promotions"
    },
    {
        image: "Images/Features/f5.png",
        title: "Happy Sell"
    },
    {
        image: "Images/Features/f6.png",
        title: "24/7 Support"
    }

]
const feature1 = document.getElementById("feature");
const featureFuction = () => {
    features.map(feData => {
        const postEle = document.createElement("div");
        postEle.classList.add("fe-box")
        postEle.innerHTML = `
 <img src=${feData.image}>
 <h6>${feData.title}</h6>`
        feature1.appendChild(postEle)
    })
}
featureFuction()
// product1
product1 = [{
            img: "Images/Products/f1.jpg",
            brand: "adidas",
            para: "Catoon Astronaut T-Shirts",
            price: 1500
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
        }
    ]   
    newArr = [{
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
            price: 1200,
 
        }
    ]  

console.table(newArr);
const conpro = document.querySelector(".pro-container");
// cart1=[];

// function carta(prData) {
//    const cc = cart1.push(product1[prData]);
//    console.log(cc);  
// document.querySelector(".cartlen").innerHTML = cart1.length;
// }

function product() {
    product1.map(prData => {
        const postEle11 = document.createElement("div");
        postEle11.classList.add("pro")
        postEle11.innerHTML = `
        <div onclick="window.location.href='shoppro.html'"> 
        <img src=${prData.img}>
        <div class="dre">
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
            <button><a href="" id="allbtn"><i class="fa fa-shopping-cart cart" aria-hidden="true"></i></a> </button>
        </div >
        </div>
    `
        conpro.appendChild(postEle11)
    })
}
product()

// qu = document.getElementById("que")
// sum = qu.value*product1.price
// console.log(sum);
// new arrivals
const conpro1 = document.querySelector(".pro-container1");
function product2() {
    newArr.map(ewArr => {
        const postEle2 = document.createElement("div");
        postEle2.classList.add("pro")
        postEle2.innerHTML = `       
        <img src=${ewArr.img}>
        <div class="dre">
            <span>${ewArr.brand}</span>
            <h5>${ewArr.para}</h5>
            <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <h4>&#x20B9;&nbsp;${ewArr.price} </h4>
        </div>
        <a href=""><i class="fa fa-shopping-cart alld cart" aria-hidden="true"></i></a>

    `
        conpro1.appendChild(postEle2)
    })
}
product2()
const feature= document.querySelector(".dre");
const  addbtn=feature.querySelectorAll(".alld");
console.log(addbtn);