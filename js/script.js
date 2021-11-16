const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getData = async function(){
    const res = await fetch (
        "https://picsum.photos/v2/list?limit=20"
    );
    const data = await res.json();
    console.log(data);
}

button.addEventListener("click", function(){
    getData();
})