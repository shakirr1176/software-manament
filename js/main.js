let litroNivel = document.querySelectorAll('.litro-nivel')

let litroNivelActive = [...litroNivel].filter(el=>el.classList.contains('active'))[0]

activeBtn(litroNivel,litroNivelActive)

function activeBtn(btn,active){
    let prev;

    if(active){
        prev = active
    }

    btn?.forEach(el=>{
        el.addEventListener('click',()=>{
            if(prev){
                prev.classList.remove('active')
            }

            if(prev != el){
                el.classList.add('active')
                prev = el
            }else{
                prev = undefined
            }
        })
    })
}

let circleIcon = document.querySelectorAll('.circle-icon')
let circleIconActive = [...circleIcon].filter(el=>el.classList.contains('active'))[0]

activeBtn(circleIcon,circleIconActive)
