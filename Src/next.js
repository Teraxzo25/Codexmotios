var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}


const  navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links');
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((links, index) => {
          if(links.style.animation) {
              links.style.animation = ''; 
          }else {
              links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
          }
      });
      burger.classList.toggle('toggle');
  });
  
}

navSlide();
document.querySelector("#section-5ad488bcb25eb > div:nth-child(2)")





// const  navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');

//   burger.addEventListener('click', () => {
//       nav.classList.toggle('nav-active');

//       navLinks.forEach((links, index) => {
//           if(links.style.animation) {
//               links.style.animation = ''; 
//           }else {
//               links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
//           }
//       });
//       burger.classList.toggle('toggle');
//   });
  
// }

// navSlide();