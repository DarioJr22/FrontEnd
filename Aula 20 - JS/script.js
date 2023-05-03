let imagem = document.getElementById("imagem")

let mouseMove = function(e){

    let top =- e.clientY
    let left =- e.clientX
    imagem.style.top = `${top}px`
    imagem.style.left = `${left}px`

    console.log(e);
}

imagem.addEventListener("mousemove",mouseMove)