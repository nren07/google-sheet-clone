const download=document.getElementById("download");
const upload=document.getElementById("upload");
download.addEventListener("click",()=>{
    const blob=new Blob([JSON.stringify(state)],{type:"application/json"});
    let url=URL.createObjectURL(blob);
    let link=document.createElement("a");
    link.href=url;
    link.download="temp.json";
    link.click();
    
})

upload.addEventListener("change",()=>{
    let file=e.files[0];
    if(file.type!=="application/json"){
        alert("please upload json file");
        return;
    }
    let fileReader=new FileReader(file);
    fileReader.onload=function(e){
        let fileData=JSON.parse(e.target.result);
    }
    fileReader.readAsText(file);
})