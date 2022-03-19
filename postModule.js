export function hello() {
    return "Hello";
  }

export function htmlParser(html){
    /*html.name:"",
    js:"",
    css:"",
    html:"",*/
  
    
const scriptCode=html.js;
const cssCode=html.css;
const htmlCode=html.html;
var iframe = document.createElement('iframe');
var scriptTag = "<script>"+scriptCode+" <";
scriptTag +=  "/script>";
var css='<style>'+cssCode+'</style>'
var html = `<head></head><body>`+htmlCode+`</body>`;
html+=scriptTag+css;
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
const containerElement= document.querySelector('#iframeContainer');
containerElement.innerHTML="";
containerElement.appendChild(iframe);

  }

  const dbPointer="htmlFormArr";
  export class dbHelper{

      fetchAll() {
        
        var arr = JSON.parse(localStorage.getItem(dbPointer));
        console.log(arr);
        
        return arr;
          
      }
      getById(id)
      {
        var arr = JSON.parse(localStorage.getItem(dbPointer));
        console.log(arr[id]);
        return arr[id];
    }

    
      addData(dataObj){

        if (localStorage.getItem(dbPointer)==null){
            console.log("1")
            const data=JSON.stringify([dataObj]);
          localStorage.setItem(dbPointer, data);
        }else {
          console.log("2")
          
          var arr = JSON.parse(localStorage.getItem(dbPointer));

           arr.push(dataObj);
          localStorage.setItem(dbPointer, JSON.stringify(arr));
          const dbrecords=localStorage.getItem(dbPointer);
        
        }
      

        document.getElementById("closeModal").click();
        
        setTimeout(function (){
  
            alert("registered successfully");
                      
          }, 1000); 

        
      }


  }
