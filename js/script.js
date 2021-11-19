const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImages = async function(){
    const response = await fetch("https://picsum.photos/v2/list?limit=100");
    const imageArr = await response.json();
    //console.log(imageArr);
    selectImage(imageArr);
}

const selectImage = function(imageArr){
    let randomIndex = Math.floor(Math.random() * imageArr.length);
    let randomImage = imageArr[randomIndex];
    //console.log(randomIndex, randomImage);
    displayImage(randomImage);
};

const displayImage = function(randomImage){
    let author = randomImage.author;
    let imageAddress = randomImage.download_url;
    //console.log(author, imageAddress);
    imgDiv.classList.remove("hide");
    imgDiv.classList.add("src");
    img.src = imageAddress;
    authorSpan.innerText = author;
}

button.addEventListener("click", function(){
    getImages();
})