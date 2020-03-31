const accordion__Box=document.querySelector(".accordion").children;

for( let i = 0; i < accordion__Box.length; i++) {
   const heading = accordion__Box[i].querySelector(".heading");

   //Opens active accordion Box (class)

   if (accordion__Box[i].classList.contains("active")){
      accordion__Box[i].querySelector(".body").style.maxHeight=accordion__Box[i].querySelector(".body").scrollHeight + "px";

      accordion__Box[i].querySelector(".heading span").classList.remove("fa-code");
      accordion__Box[i].querySelector(".heading span").classList.add("fa-terminal");
   }

   heading.onclick = function () {

      for (let j = 0; j < accordion__Box.length; j++) {
         accordion__Box[j].querySelector(".body").style.maxHeight="0px";

         accordion__Box[j].querySelector(".heading span").classList.remove("fa-terminal");
         accordion__Box[j].querySelector(".heading span").classList.add("fa-code");
      }

      accordion__Box[i].querySelector(".body").style.maxHeight=accordion__Box[i].querySelector(".body").scrollHeight + "px";

      accordion__Box[i].querySelector(".heading span").classList.remove("fa-code");
      accordion__Box[i].querySelector(".heading span").classList.add("fa-terminal");
   }
}
