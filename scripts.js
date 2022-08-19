var slides=document.querySelector('.slider-items').children;
var sigSlide=document.querySelector(".derecha-slide");
var antSlide=document.querySelector(".izquierda-slide");
var totalSlides=slides.length;
var index=0;

sigSlide.onclick=function () {
     siguienteSlide("Siguiente");
}
antSlide.onclick=function () {
    siguienteSlide("Anterior");
}

function siguienteSlide(direction){

   if(direction=="Siguiente"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("activo");
  }
  slides[index].classList.add("activo");     

}
