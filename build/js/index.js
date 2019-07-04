webpackJsonp([0],[function(n,c,t){"use strict";t(1),t(2)},function(n,c){},function(n,c){}],[0]);

$(document).ready(function(){
      $('.bxslider').bxSlider ({
        
      });
    
    });

    const btn = document.querySelector('#btn');
    const competition = document.querySelector('.competition__list');
    
    btn.addEventListener('click', ()=>{

        if(competition.classList.contains("competition__list--active")){
            competition.classList.remove("competition__list--active"); 
        }
        else{
            competition.classList.add("competition__list--active");
        }
    })