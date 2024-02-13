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


let parametrosTab = document.querySelectorAll('.parametros-tab')
let parametrosActive = [...parametrosTab].filter(el=>el.classList.contains('active'))[0]

activeBtn(parametrosTab,parametrosActive)


let playPauseBtn = document.querySelector('.play-pause-btn')

if(playPauseBtn){
    // window.addEventListener('load',()=>{
    // })
    
    playPauseFunc(playPauseBtn)
    playPauseBtn?.addEventListener('click',()=>{

        playPauseBtn.classList.toggle('play')
        playPauseBtn.classList.toggle('pause')

        playPauseFunc(playPauseBtn)
    })
    
    function playPauseFunc(btn){

        let svg = btn.querySelector('.icon')
        let span = btn.querySelector('.text')

        if(btn?.classList.contains('play')){
            if(svg){
                svg.querySelector('path').setAttribute('d','M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z')
            }
            if(span){
                span.innerText = 'pause'
                span?.classList.add('fade')
            }

            setTimeout(()=>{
                span.classList.remove('fade')
            },150)
        }else{
            if(svg){
                svg.querySelector('path').setAttribute('d','M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z')
            }
            if(span){
                span.innerText = 'play'
                span?.classList.add('fade')
            }

            setTimeout(()=>{
                span.classList.remove('fade')
            },150)
        }
    }
}