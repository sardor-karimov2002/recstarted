var rec=new webkitSpeechRecognition();
var divEl=document.createElement('div')
rec.lang='Uz-uz';
rec.onstart= function(){
    console.log("Process started");

}

rec.onresult=function(event){
    let result=event.results[0][0].transcript
    divEl.textContent=result
     if(result=='1'){
        document.body.style.background='red'
    }else if(result=='2'){
        document.body.style.background='green'
    }else{
        document.body.style.background='yellow'
    }
    console.log(result);

}
rec.onend=function(){
    console.log("Process tugatildi");
}
rec.onerror=function(){
    console.log("xatolik yuz berdi");
}
var recBtn=document.createElement('button')
recBtn.textContent='Record';

recBtn.addEventListener('click', ()=>{
    
    rec.start()
})
document.body.appendChild(recBtn)
document.body.appendChild(divEl)