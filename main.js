'use strict'
// clickLogin-Sign_up
const clickSignUps = document.querySelectorAll('.Sign_up');
for(const clickSignUp of clickSignUps ){
    clickSignUp.addEventListener('click',function(){
        document.querySelector('.modal').classList.add('modal_showUp');
        document.querySelector('.form_Login').classList.add('form_Login-none');
        document.querySelector('.form_SignUp').classList.remove('form_SignUp-none');
        document.querySelector('.nav__mobile').classList.add('nav__mobile-none');
        
    
    });

}

const clickLogins = document.querySelectorAll('.Login');
for(const clickLogin of clickLogins){
    clickLogin.addEventListener('click',function(){
        document.querySelector('.modal').classList.add('modal_showUp');
        document.querySelector('.form_SignUp').classList.add('form_SignUp-none');
        document.querySelector('.form_Login').classList.remove('form_Login-none');
        document.querySelector('.nav__mobile').classList.add('nav__mobile-none');
        

       
    
    });

}
const clickOverlay =document.querySelector('.modal__overlay');
     clickOverlay.addEventListener('click',function(){
        document.querySelector('.modal').classList.remove('modal_showUp');
        document.querySelector('.nav__mobile').classList.remove('nav__mobile-none');
        
        
     })

// hide-on-scroll
const clickNavBars =document.querySelector('.clickNavBar');
      clickNavBars.addEventListener('click',function(){
          document.body.classList.add('hide-on-click');
      })

const clickOverPlays =document.querySelector('.clickOverPlay');
      clickOverPlays.addEventListener('click',function(){
          document.body.classList.remove('hide-on-click');
      })
      