window.onload = show;
function show(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    var uul = document.getElementById('uul');
    var uli = uul.getElementsByTagName('li');
    var ool = document.getElementById('ool');
    var oli = ool.getElementsByTagName('li');
    var uwidth = uli[0].offsetWidth;
    var iNow = 0;//设置一个值，让当前选择的索引值给它，暂做保持，以便和下一个选择的索引值对比，确定图片是向左走还是向右走；
    for(var i=1; i<uli.length; i++){
        uli[i].style.left= uwidth+'px';
    }
    for(var i=0; i<oli.length; i++){
        oli[i].index = i;
        oli[i].onmouseover = function(){
                for(var j=0; j<oli.length; j++){
                    oli[j].className = "";
                }
            
                oli[this.index].className = "shownum";
            
                if(iNow < this.index)//当上一个选择序号小于接下来要选择的序号，接下来要实现图片是从右往左移，即目标图片在右边，上一个选择序号的图片需要做一个往左移的动作，再让目标图片做一个移动到0坐标的位置的移动；
                {
                    uli[this.index].style.left = uwidth;//定位目标图片在右边；
                    startMove(uli[iNow], {left: -uwidth});//上一个选择序号的图片做一个往左移的动作
                }
            
                else if(iNow > this.index)//当上一个选择序号大于接下来要选择的序号，接下来要实现图片是从左往右移，即目标图片在左边，上一个选择序号的图片需要做一个往右移的动作，再让目标图片做一个移动到0坐标的位置；
                 {
                     uli[this.index].style.left = -uwidth;
                     startMove(uli[iNow], {left: uwidth});
                 }
            
            
                startMove(uli[this.index], {left: 0});//让目标图片移动到0坐标的位置；
            
                iNow = this.index;//把当前索引的值给iNow，即iNow做一个暂且保存的作用，以便下一个索引和上一个索引对比，确定图片移动的方向；
                }
         
       }
}