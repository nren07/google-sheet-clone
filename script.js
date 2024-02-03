const rows=1001,columns=26;
const headRow = document.getElementById("head_row");
const sno=document.getElementById("sno");
const body=document.getElementById("body");

for(let i=0;i<=columns;i++){
    const headCell=document.createElement("div");
    if(i>0){
        headCell.innerText=String.fromCharCode(i+64);  //A at i=1 
        headCell.className="col-head";
    }
    headRow.appendChild(headCell);
}

for(let j=1;j<rows;j++){
    const snoCell=document.createElement("div");
    snoCell.innerText=j;
    snoCell.className="sno-cell";
    sno.appendChild(snoCell);
}

for(let i=1;i<rows;i++){
    const row=document.createElement("div");
    row.className="row";
    for(let j=1;j<=columns;j++){
        const cols=document.createElement("div");
        cols.className="cell";
        cols.contentEditable="true";
        row.append(cols);
    }
    body.append(row);
}