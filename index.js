var image = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')


var currentInsex = 0;

function showGallery(){
    if(currentInsex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }

    if(currentInsex == image.length-1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    galleryImg.src = image[currentInsex].src
    gallery.classList.add('show')
}
image.forEach((item, index)=>{

    item.addEventListener('click', function(){
        currentInsex = index
        showGallery()
    }
)})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

prev.addEventListener('click', function(){
    if(currentInsex > 0){
        currentInsex--
        showGallery()
    }
})

next.addEventListener('click', function(){
    if(currentInsex < image.length-1){
        currentInsex++
        showGallery()
    }
})