function ratioController(){

    let idealSW = 1920;
    let idealSH = 1080;

    let wInPxl;
    let hInPxl;

    let wW= window.innerWidth
    let wH= window.innerHeight
    let w= wW
    let eH = w*9/16
    let h= wH
    let eW = h*16/9
    let tM=0
    if(eH>h){
        w=eW
    }
    else{
        h=eH
        tM= (wH-h)*50/wW
    }

    let ratio = w/wW

    // hInPxl = h
    wInPxl = w

    h= h*100/wW
    w= w*100/wW

    function space(val){
        return (((val/idealSW)*wInPxl)*ratio).toFixed(3)
    }

    // function space(val){
    //     return (((val/idealSW)*wInPxl)*ratio).toFixed(3)
    // }

    let stl = `.fit-screen{
                    width: ${w.toFixed(3)}%;
                    padding-top:${h.toFixed(3)}%;
                    margin: ${tM.toFixed(3)}% auto;
                }
                `
    stl = stl + `:root { --ratio: ${ratio}; --page-wide: ${wInPxl}}`
    document.getElementById('extra-style').innerHTML = stl;
}
// var(--ideal-screen-width) * var(--page-wide) * var(--ratio)
ratioController();

window.addEventListener('resize', function(){
    ratioController();
})


// .pad-20{
//   padding: ${space(20)}px ${space(20)}px;
// }