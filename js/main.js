// function activeBtn(btn,active){
//     let prev;

//     if(active){
//         prev = active
//     }

//     btn?.forEach(el=>{
//         el.addEventListener('click',()=>{
//             if(prev){
//                 prev.classList.remove('active')
//             }

//             if(prev != el){
//                 el.classList.add('active')
//                 prev = el
//             }else{
//                 prev = undefined
//             }
//         })
//     })
// }

// let litroNivel = document.querySelectorAll('.litro-nivel')

// let litroNivelActive = [...litroNivel].filter(el=>el.classList.contains('active'))[0]

// activeBtn(litroNivel,litroNivelActive)

// let circleIcon = document.querySelectorAll('.circle-icon')
// let circleIconActive = [...circleIcon].filter(el=>el.classList.contains('active'))[0]

// activeBtn(circleIcon,circleIconActive)


// let parametrosTab = document.querySelectorAll('.parametros-tab')
// let parametrosActive = [...parametrosTab].filter(el=>el.classList.contains('active'))[0]

// activeBtn(parametrosTab,parametrosActive)

// let manualLeftButtons = document.querySelectorAll('.manual-left-button')
// let manualLeftButtonsActive = [...manualLeftButtons].filter(el=>el.classList.contains('active'))[0]

// activeBtn(manualLeftButtons,manualLeftButtonsActive)

// let manualCircleButton = document.querySelectorAll('.manual-circle-button')
// let manualCircleButtonActive = [...manualCircleButton].filter(el=>el.classList.contains('active'))[0]

// activeBtn(manualCircleButton,manualCircleButtonActive)

// let balseirosRightButton = document.querySelectorAll('.balseiros-right-button')
// let balseirosRightButtonActive = [...balseirosRightButton].filter(el=>el.classList.contains('active'))[0]

// activeBtn(balseirosRightButton,balseirosRightButtonActive)

// let balseirosLeftButton = document.querySelectorAll('.balseiros-left-button')
// let balseirosLeftButtonActive = [...balseirosLeftButton].filter(el=>el.classList.contains('active'))[0]

// activeBtn(balseirosLeftButton,balseirosLeftButtonActive)


let playPauseBtn = document.querySelector('.play-pause-btn')

if(playPauseBtn){
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

// function goBack() {
//     window.history.back();
// }