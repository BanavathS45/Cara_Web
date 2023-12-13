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


blogDetails = [{
        bimg: "Images/Blog/b1.jpg",
        blogtitle: "The Cotton-Jersey Zip-up Hoodie",
        blogpara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consequatur aperiam atque, itaque debitis mollitia saepe a magni unde provident?",
        imgNum: "13/01"
    },
    {
        bimg: "Images/Blog/b2.jpg",
        blogtitle: "The Cotton-Jersey Zip-up Hoodie",
        blogpara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consequatur aperiam atque, itaque debitis mollitia saepe a magni unde provident?",
        imgNum: "14/02"
    }, {
        bimg: "Images/Blog/b3.jpg",
        blogtitle: "The Cotton-Jersey Zip-up Hoodie",
        blogpara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consequatur aperiam atque, itaque debitis mollitia saepe a magni unde provident?",
        imgNum: "15/03"
    }, {
        bimg: "Images/Blog/b5.jpg",
        blogtitle: "The Cotton-Jersey Zip-up Hoodie",
        blogpara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consequatur aperiam atque, itaque debitis mollitia saepe a magni unde provident?",
        imgNum: "16/04"
    }, {
        bimg: "Images/Blog/b6.jpg",
        blogtitle: "The Cotton-Jersey Zip-up Hoodie",
        blogpara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consequatur aperiam atque, itaque debitis mollitia saepe a magni unde provident?",
        imgNum: "17/05"
    }
]
console.log(blogDetails);




console.log(blogDetails);

const blogmain = document.querySelector("#blog");

function blog() {
    //  alert("k")
    blogDetails.map(blogdetails => {
        const blogsEle = document.createElement("div");
        blogsEle.classList.add("blog-box")
        blogsEle.innerHTML = `  
          <div class="blog-img">
             <img src=${blogdetails.bimg}>
         </div>
         <div class="blog-details">
             <h4>${blogdetails.blogtitle}</h4>
             <p>${blogdetails.blogpara} </p>
             <a href="#">Continue Reading.........</a>
         </div>
         <h1>${blogdetails.imgNum}</h1>`
        blogmain.appendChild(blogsEle)

    })
}
blog()