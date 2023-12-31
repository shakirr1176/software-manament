let litroNivel = document.querySelectorAll('.litro-nivel')


activeBtn(litroNivel)

function activeBtn(btn){
    let prev;
    btn.forEach(el=>{
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