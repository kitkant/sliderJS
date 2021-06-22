const slides = document.querySelectorAll('.slide')
const body = document.body

slides.forEach((slide, index)=>{
    slide.addEventListener('click', ()=>{
        cleareActiveSlide()
        cleareArtNumber()
        body.classList.add(`art-${index + 1}`)
        slide.classList.add('active')
    } )
})

function cleareActiveSlide(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}
function cleareArtNumber(){
    body.classList.remove('art-1')
    body.classList.remove('art-2')
    body.classList.remove('art-3')
    body.classList.remove('art-4')
    body.classList.remove('art-5')
}