function swapImg(){
    let img1 = document.querySelector('#img1')
    let img2 = document.querySelector('#img2')
    let img3 = document.querySelector('#img3')

    let img1Src = img1.getAttribute('src')
    let img2Src = img2.getAttribute('src')
    let img3Src = img3.getAttribute('src')

    img3.setAttribute('src', img1Src)
    img2.setAttribute('src', img3Src)
    img1.setAttribute('src', img2Src)
}