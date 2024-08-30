export default function OnScrollAnimation(element) {
        let observer = new IntersectionObserver((entries) =>{
           entries.forEach((entry) =>{
           
             if(entry.isIntersecting){
              if(element[0].className == 'hidden'){
                entry.target.classList.add('show');
              }
              else if(element[0].className == 'hidden2' ){
                entry.target.classList.add('rightSlider');
              }
              else if(element[0].className == 'hidden3' ){
                entry.target.classList.add('rightSlider');
              }
              else if(element[0].className == 'hidden4' ){
                entry.target.classList.add('rightSlider');
              }
              else{
                entry.target.classList.add('showleftSlider');
              }
             }
             else{
               //entry.target.classList.remove("show")
             }
           })
         } )
       
      
         if (typeof document !== 'undefined') {
          // will run in client's browser only
          element.forEach((el) => observer.observe(el));
      }
      
    
}