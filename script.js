 
 const profile = document.querySelector(".profile");
 const shareBtn = document.getElementById("share-icon");
 const hiddenIcon = document.querySelector(".hidden-icon");
const destopBtn = document.getElementById("retune-icon");
 function visible() {
   let isDestop = window.innerWidth <= 767;
   if(isDestop){
      profile.style.display = "none";
      hiddenIcon.style.display = "flex";
   }else{
      profile.style.display = "flex";
      hiddenIcon.style.display = "flex";
      setTimeout(function(){ hiddenIcon.style.display = 'none';}, 2000)
   }
  
 }

function retune() {
   let isDestop = window.innerWidth <= 767;
   if(isDestop){
      profile.style.display = "flex";
      hiddenIcon.style.display = "none";
   }else{
      profile.style.display = "flex";
      hiddenIcon.style.display = "flex";
   }
  
}
 


 shareBtn.addEventListener("click", visible);
 destopBtn.addEventListener("click", retune);