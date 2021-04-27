window.addEventListener("scroll", function(){
    var head=document.querySelector("header");
    head.classList.toggle("sticky", window.scrollY > 0);
});

// Slider

var slides=document.querySelector(".slider").children;
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");

var index=0;

prev.addEventListener("click", function(){
prevSlide();
resetTimer();
});
next.addEventListener("click", function(){
nextSlide();
resetTimer();
});

function prevSlide(){
    if(index == 0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}


function nextSlide(){
    if(index == slides.length-1){
        index=0;
    }else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    for(var i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoPlay,5000);
}
// Autoplay

function autoPlay(){
    nextSlide();    
}

var timer=setInterval(autoPlay,5000);

// menu

var tog=document.getElementById("toogle");
var menu=document.getElementById("menu");

tog.addEventListener("click", function(){
tog.classList.toggle("active");
menu.classList.toggle("active");
document.body.classList.toggle("active");
});


document.onclick=(e)=>{
    if(e.target.id !="toogle" && e.target.id !="menu"){
    tog.classList.remove("active");
    menu.classList.remove("active");  
    document.body.classList.remove("active");
    }
  }

//   Scrolll to top

window.addEventListener("scroll", function(){
    var top=document.querySelector(".top");
    top.classList.toggle("active", window.scrollY > 150);
});

function Top(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}


window.onload = () => {
    let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    bannerNode.parentNode.removeChild(bannerNode);
 }
 AOS.init();