
function appenddChild  () {  
    for (var i = 1; i <= 100; i++) {
         var node = document.createElement("li"),               
               textnode = document.createTextNode("AppendChild" + i);         
               node.appendChild(textnode);                             
               document.getElementById("list").appendChild(node);     
     }
}



 function innerHtml() {
        var node = document.getElementById('list'),  
              i = 0;
              while (i < 100) {
                i++;
                node.innerHTML += '<li>InnerHtml ' + i + '</li>';
        }
}


function pushh() {
        var arr = [], 
              i = 0;
              do{
                   i++;
                   arr.push("<li>Push"+ i);
                   document.getElementById("list").innerHTML = arr.join("");
             }  while ( i < 100);
}


    
function ccreateDocumentFragment() {  
    for (var i = 1; i <= 100; i++) {
         var node = document.createDocumentFragment(),   
                li = document.createElement("li"),
               textnode = document.createTextNode("CreateDocumentFragment" + i);   
               node.appendChild(li).appendChild(textnode);                             
               document.getElementById("list").appendChild(node);     
     }
}



 function  clearr() {
     var node = document.getElementById('list');
     while (node.hasChildNodes()) {
     node.removeChild(node.firstChild);
    }
};








