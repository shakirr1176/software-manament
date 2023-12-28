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

    hInPxl = h
    wInPxl = w

    h= h*100/wW
    w= w*100/wW

    // console.log(ratio);

    function xSpace(val){
        return ((val/idealSW)*wInPxl).toFixed(3)
    }

    function ySpace(val){
        return (((val/idealSW)*wInPxl)*ratio).toFixed(3)
    }

    let stl = `.fit-screen{
                    width: ${w.toFixed(3)}%;
                    padding-top:${h.toFixed(3)}%;
                    margin: ${tM.toFixed(3)}% auto;
                }

                .w-286{
                    width: ${xSpace(286)}px;
                }

                .w-45{
                    width: ${xSpace(45)}px;
                }

                .w-30{
                    width: ${xSpace(30)}px;
                }

                .w-14{
                    width: ${xSpace(14)}px;
                }

                .w-21{
                    width: ${xSpace(21)}px;
                }

                .h-21{
                    width: ${xSpace(17)}px;
                }

                .h-14{
                    height: ${ySpace(14)}px;
                }

                .w-14{
                    width: ${xSpace(14)}px;
                }

                .h-56{
                    height: ${ySpace(56)}px;
                }

                .h-120{
                    height: ${ySpace(120)}px;
                }

                .rad-20{
                    border-radius : ${xSpace(20)}px
                }

                .pad-20{
                  padding: ${xSpace(20)}px ${ySpace(20)}px;
                }

                .pad-y-8{
                  padding-top: ${ySpace(8)}px;
                  padding-bottom: ${ySpace(8)}px;
                }

                .pad-y-6{
                  padding-top: ${ySpace(6)}px;
                  padding-bottom: ${ySpace(6)}px;
                }

                .pad-x-24{
                  padding-left: ${xSpace(24)}px;
                  padding-right: ${xSpace(24)}px;
                }

                .pad-b-12{
                  padding-bottom: ${ySpace(12)}px;
                }

                .pad-b-18{
                  padding-bottom: ${ySpace(18)}px;
                }
                .pad-r-18{
                  padding-right: ${xSpace(18)}px;
                }
                .mar-r-18{
                  margin-right: ${xSpace(18)}px;
                }
                .pad-r-14{
                  padding-right: ${xSpace(14)}px;
                }
                .pad-r-22{
                  padding-right: ${xSpace(24)}px;
                }

                .pad-l-12{
                  padding-left: ${xSpace(12)}px;
                }

                .mar-t-8{
                    margin-top: ${ySpace(8)}px
                }
                `
    stl = stl + ':root { --ratio: '+ratio+'; }'
    document.getElementById('extra-style').innerHTML = stl;
}

ratioController();

window.addEventListener('resize', function(){
    ratioController();
})