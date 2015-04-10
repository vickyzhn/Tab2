var lb1=document.getElementById("lb1").children;
var lb2=document.getElementById("lb2").children;
var len=lb2.length;
for(var i=0;i<len;i++)
{
    lb2[i].index=i;
    lb2[i].onmouseover=function()
    {
        for(var j=0;j<len;j++)
        {
            lb2[j].className="";
            lb1[j].className="";
        }
        lb2[this.index].className="num";
        lb1[this.index].className="pic";
    }
}