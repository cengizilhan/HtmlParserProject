import { dbHelper, hello, htmlParser } from './postModule.js';

var dataArr=[];
var dataObj={
    name:"",
    js:"console.log('asdasdsd')",
    css:"body{background-color:gray;}",
    html:"<h1>sawacrow</h1>",
}

htmlParser(dataObj);




const _dbHelper = new dbHelper;

  
function updateHistoryButton()
{
  
const arr=_dbHelper.fetchAll();
console.log("arr",arr)
document.getElementById('selectHistory').options.length = 0;
        var i=0;
        if(Array.isArray(arr))
        {
            for (let pair of arr) {
 
                document.getElementById('selectHistory').insertAdjacentHTML("beforeend",'<option data-number='+i+' id="optionHistory">'+pair.name+'</option>');
                i++;
            }
        }

};
updateHistoryButton();
      


document.querySelector('#selectHistory').addEventListener('change', (event) => {
    event.preventDefault();

    var index = event.target.options[event.target.selectedIndex].dataset.number;

   const data=_dbHelper.getById(index);
    htmlParser(data);
    





  });


  
/* Ctrl+S shortkey  Event*/
document.onkeydown = function(e) {
    if (e.ctrlKey && e.keyCode === 83) {
        console.log('ctrl+s worked')
        document.getElementById("runForm").click();
        return false;
    }
};





/* SaveEvent*/
document.querySelector('#saveForm').addEventListener('click', function(e) {
    const filename=document.getElementById("textboxFilename").value;


    setConstructor();


_dbHelper.addData(dataObj)
updateHistoryButton();


});

document.querySelector('#btnMinimize').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('#contentContainer').classList.remove("col-md-4");
    document.querySelector('#contentContainer').classList.add("col-md-12", "aspect-ratio4-2");
    document.querySelector('#formContainer').classList.remove("aspect-ratio4-2");
    
    


    
})




function setConstructor(){
    const strJS=document.getElementById("textAreaJS").value;
    const strCSS=document.getElementById("textAreaCSS").value;
    const strHTML=document.getElementById("textAreaHTML").value;
    const filename=document.getElementById("textboxFilename").value;

    dataObj.name=filename;
    dataObj.js=strJS;
    dataObj.css=strCSS;
    dataObj.html=strHTML;
    console.warn(dataObj);

}




/*Form Submit Event */
document.querySelector('#htmlForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
   setConstructor();

    htmlParser(dataObj);
    

});





