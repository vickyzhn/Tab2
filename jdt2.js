window.onload = show;
function show(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    var uul = document.getElementById('uul');
    var uli = uul.getElementsByTagName('li');
    var ool = document.getElementById('ool');
    var oli = ool.getElementsByTagName('li');
    for(var i=0; i<oli.length; i++){
        oli[i].index = i;
        oli[i].onmouseover = function(){
            for(var j=0; j<oli.length; j++){
                oli[j].className = "";
                uli[j].className = "";
                uli[j].style.opacity = 0;
                uli[j].style.filter = "alpha(opacity)";
            }
            oli[this.index].className = "shownum";
            uli[this.index].className = "showpic";
            startMove(uli[this.index], {opacity:100});
        }
    }
}