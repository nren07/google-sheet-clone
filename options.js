let selectedCell=null;
/*
state={
    innerText="Narenrda",
    isBold=true,
    align=center
    isunderline
    isItalic:true
    fontsize=16
    fontWeight=400;
    fontFamily=defalt;
    textColor=red;
    bgColor=white;
}
*/

const defaultState={
    innerText:"",
    isBold:false,
    align:"left",
    isUnderline:false,
    isItalic:false,
    fontSize:16,
    fontWeight:400,
    fontFamily:"Sans Serif",
    textColor:"#000000",
    bgColor:"#ffffff",
}
const state={
    /*
    data1:{...},
    data2:{...},
    .
    .
    .
    */

}
const activeCellElement=document.querySelector(".selected-cell");
const form=document.querySelector(".form-container");

const expressionInput=document.getElementById("evaluate");

function applyCellInfoToForm(){
    //this function will sync the options inside form with the actual data of the cell
    if(state[selectedCell.id]){
        // already edited cell  
        const data=state[selectedCell.id];
        for(let key in data){
            // if key= isBold
            // form["key"]=>input type=checked
            if(form[key].type === "checkbox"){
                form[key].checked=data[key];
            }
            else form[key].value=data[key];
        }

    }else{
        //focused for the first time
        form.reset();
    }
}

function onChangeInnerText(){
    if(state[selectedCell.id]){
        state[selectedCell.id].innerText=selectedCell.innerText;
    }
    else{
        state[selectedCell.id]={...defaultState,innerText:selectedCell.innerText};
    }
}

function onFocus(e){
    if(selectedCell){
        selectedCell.classList.remove("active-cell");
    }
    selectedCell=e.target;
    activeCellElement.innerText=selectedCell.id;
    selectedCell.classList.add("active-cell");
    applyCellInfoToForm();
};

function applyStylesToSelectedCell(formData){
    // takes the style from selected cell and apply to the selected cell
    selectedCell.style.fontFamily=formData.fontFamily;
    selectedCell.style.fontSize=formData.fontSize+"px";
    selectedCell.style.fontWeight=(formData.isBold)?"bold":"400";
    selectedCell.style.fontStyle=(formData.isItalic)? "italic" :"normal";
    selectedCell.style.textDecoration=(formData.isUnderLine) ? "underline" :"none";
    selectedCell.style.textAlign =formData.align;
    selectedCell.style.color=formData.textColor;
    selectedCell.style.backgroundColor=formData.bgColor;
    state[selectedCell.id]={...formData,innerText:selectedCell.innerText};
}

form.addEventListener("change",(select)=>{
    if(!selectedCell ){
        alert("select a cell before making any change");
        form.reset();
        return;
    }

    const formData={
        fontFamily : form["fontFamily"].value,
        fontSize :  form["fontSize"].value,
        isBold : form["isBold"].checked,
        isItalic: form["isItalic"].checked,
        isUnderline:form["isUnderline"].checked,
        align : form["align"].value,
        textColor:form["textColor"].value,
        bgColor:form["bgColor"].value
    };

    applyStylesToSelectedCell(formData);
});

expressionInput.addEventListener("keyup", (e)=>{
    if(e.code==="Enter" && selectedCell){
        let expression=e.target.value;
        let result=eval(expression);
        selectedCell.innerText=result;
    }
})