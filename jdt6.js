window.onload = show;
function show(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    var uul = document.getElementById('uul');
    var uli = uul.getElementsByTagName('li');
    var ool = document.getElementById('ool');
    var oli = ool.getElementsByTagName('li');
    var timer = null;
    var iNow = 0;
    var iNow2 = 0;
    for(var i=0; i<oli.length; i++){
        oli[i].index = i;
        var uheight = uli[i].offsetHeight;
        oli[i].onmouseover = function(){
            for(var j=0; j<oli.length; j++){
                oli[j].className = "";
                iNow = this.index;
            }
            oli[this.index].className = "shownum";
            startMove(uul, {top:-this.index*uheight});
        }
    }
    timer = setInterval(toRun, 2000);
    var box = document.getElementById('box');
    box.onmouseover = function(){
        clearInterval(timer);
    }
    box.onmouseout = function(){
        timer = setInterval(toRun, 2000);
    }
   
    function toRun(){
        if(iNow == oli.length-1){
            iNow = 0;
            uli[0].style.position = "relative";
            uli[0].style.top = oli.length*uheight+'px';
        }else{
            iNow++;
        }
        iNow2++;
        for(var j=0; j<oli.length; j++){
                oli[j].className = "";
            }
            oli[iNow].className = "shownum";
            startMove(uul, {top:-iNow2*uheight}, function(){
                if(iNow == 0){
                    uli[0].style.position = "static";
                    uul.style.top = 0;
                    iNow2 = 0;
                }
            });
    }
        
}