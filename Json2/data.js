
function getId(){
var xhr=new XMLHttpRequest();
xhr.onload=function(){
    var responseobject=JSON.parse(this.responseText);//4
    var newContent='';
    var number;var flag=1;

   
   number=document.getElementById('text').value;
    for(var i=0;i<responseobject.events.length;i++)//6
    {
        if(responseobject.events[i].rollno==number)
        {
        newContent+='<div class="event">';
        newContent+="NAME:"+responseobject.events[i].name+'<br>';
        newContent+="ROLLNO:"+responseobject.events[i].rollno+'<br>';
        newContent+="MARK:"+responseobject.events[i].mark+'<br>';
        newContent+="EMAIL ID:"+responseobject.events[i].email+'<br>';
        newContent+="LOCATION:"+responseobject.events[i].location+'<br><br><br>';
        newContent+='</div>';
        flag=0;

    }
   
}
if(flag==1)
     newContent="No matching Student";
    document.getElementById('main').innerHTML=newContent;

};

xhr.open('GET','data.json',true);//2
xhr.send(null);//send request 
}
