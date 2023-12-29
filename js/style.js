function ratioController(){
    let wInPxl;

    let wW = window.innerWidth
    let wH = window.innerHeight
    let w = wW
    let eH = w*9/16
    let h = wH
    let eW = h*16/9
    let tM = 0
    if(eH > h){
        w = eW
    }
    else{
        h = eH
        tM = (wH-h)*50/wW
    }

    let ratio = w/wW

    wInPxl = w

    h = h*100/wW
    w = w*100/wW

    let stl = `.fit-screen{
                    width: ${w.toFixed(3)}%;
                    padding-top:${h.toFixed(3)}%;
                    margin: ${tM.toFixed(3)}% auto;
                }`
                
    stl = stl + `:root { --ratio: ${ratio}; --page-wide: ${(wInPxl/1920)}}`
    document.getElementById('extra-style').innerHTML = stl;
}
ratioController();

window.addEventListener('resize', function(){
    ratioController();
})