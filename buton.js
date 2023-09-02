var yukari = document.getElementsByClassName("yukari")[0];
//console.log(yukari);
 
window.addEventListener("scroll", function(){
    const mesafe=this.window.scrollY; //yukarıdan olan uzaklığı verir.
    //console.log(mesafe);
    if(mesafe>200){
        yukari.classList.add("goster");
    }
    else{
        yukari.classList.remove("goster");
    }
});

yukari.addEventListener("click", function(){
    window.scrollTo(0,0);
});
