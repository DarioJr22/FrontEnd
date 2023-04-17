let tags = document.getElementsByTagName('section')
console.log(tags)
let tag = document.getElementsByTagName('section')[0]
let sections = document.querySelectorAll('section').forEach(item => {
    item.addEventListener('mouseover',setInterval(() => { changeColor(item),changeColor1(item)},500))
    })


function changeColor(item){ 

    item.style.backgroundColor = 'red'
    item.style.color = 'white'

}

function changeColor1(item){ 

    item.style.backgroundColor = 'blue'
    item.style.color = 'black'

}





let tag2 = document.getElementsByTagName('section')[1]