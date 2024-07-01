
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiper () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    slidesPerView: 'auto',
    spaceBetween: 12,
    
    // If we need pagination
    pagination: {
     el: '.swiper-pagination',
     clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      799: {
        spaceBetween: 24,
      }
    }
  
    
  });
}



  export default swiper;