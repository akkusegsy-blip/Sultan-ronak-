let index = 0;"images/pic4.jpg">
let slides = document.querySelectorAll(".slider img");

function showSlide(){"images/pic1.jpg">

slides.forEach((img)=>{"images/pic2.jpg">
img.style.display="none";
});

index++;

if(index > slides.length){"images/pic3.jpg">
index = 1;
}

slides[index-1].style.display="block";

}

setInterval(showSlide,2000);
showSlide();
