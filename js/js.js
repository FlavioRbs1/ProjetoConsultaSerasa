$('.owl-carousel').owlCarousel({
    rtl: false,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }

})

function clicou(){
    alert("Bom dia! Digite sua senha");
    window.open("../Front_Tcc/inicial.html");
}

