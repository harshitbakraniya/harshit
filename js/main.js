var images = document.querySelectorAll(".image");
for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click",()=>{
        images[i].style.position = "fixed";
        images[i].style.zIndex = "14";
        images[i].style.top = "50%";
        images[i].style.left = "50%"
        images[i].style.transform = "translate(-50%,-50%)";
        document.querySelector(".overlayer").style.display= "block";
    })
    document.querySelector(".fa-solid").addEventListener("click",()=>{    
        document.querySelector(".overlayer").style.display= "none";        
        images[i].style.position = "relative";
        images[i].style.zIndex = "1";
        images[i].style.top = "0";
        images[i].style.left = "0";
        images[i].style.transform = "none";
    })
}