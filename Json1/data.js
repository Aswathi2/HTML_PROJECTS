var xhr=new XMLHttpRequest();
xhr.onload=function(){
    var responseobject=JSON.parse(this.responseText);//4
    var newContent='';
    for(var i=0;i<responseobject.events.length;i++)//6
    {
        newContent+='<div class="event">';
        newContent+='<img src="'+responseobject.events[i].map+'"';
        newContent+='alt="'+responseobject.events[i].location+'"/>';
        newContent+='<p><b>'+responseobject.events[i].location+'</b><br>';
        newContent+=responseobject.events[i].date+'</p>';
        newContent+='</div>';

    }
    document.getElementById('content').innerHTML=newContent;//7
};
xhr.open('GET','data.json',true);//2
xhr.send(null);//send request 3