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
        var uheight = uli[i].offsetHeight;
        oli[i].onmouseover = function(){
            for(var j=0; j<oli.length; j++){
                oli[j].className = "";
            }
            oli[this.index].className = "shownum";
            startMove(uul, {top:-this.index*uheight});
        }
    }
        
}