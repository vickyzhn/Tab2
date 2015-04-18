window.onload = show;
function show(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    var uul = document.getElementById('uul');
    var uli = uul.getElementsByTagName('li');
    for(var i=1; i<uli.length; i++){
        uli[i].style.left = 500-90+(i-1)*30+'px';
    }
    for(var i=0; i<uli.length; i++){
        uli[i].index = i;
        uli[i].onmouseover = function(){
            for(var j=0; j<uli.length; j++)//遍历所有图片列表，当列表项序号小于目标序号（索引序号）时，就会让小于等于索引序号的图片依次往左移动，当列表项序号大于目标序号（索引序号）时，就会让比索引序号大的图片依次往右移动回一开始在的位置
            {
                if(j<=this.index){
                    startMove(uli[j], {left: j*30});
                }else{
                    startMove(uli[j], {left: 500-90+(j-1)*30});
                }
            }
        }
    }
}