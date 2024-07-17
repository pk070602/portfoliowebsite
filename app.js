$(document).ready(function(){

$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
    
});

let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');

// ab hume yha per ek listener add krna padega taki hum jb bhi hamberger per click kre tho wo isko listen kre eis code ko

hamberger.addEventListener('click',function(){

    mobileNav.classList.add('open');
    // classlist ka mtlb mobilenav per jo bhi class hai wo yha per aa jayenge.
    //add ka mtlb hume ek class aur add krni hai open
})

times.addEventListener('click',function(){

    mobileNav.classList.remove('open');
})
});