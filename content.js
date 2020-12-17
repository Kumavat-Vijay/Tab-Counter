// chrome.runtime.onMessage.addListener(function(request, sender, response){ // runtime is chrome API and onMessage is js event and it take the three callback funtion request, sender and response
//     if(request.todo == "Change Color"){ 
//         document.getElementByTagName('h1')[0].style.color='green'; // h1 color is change to green
//     }
// })


// window.onload=function(){
//     var h1_tag = document.getElementsByTagName('h1')[0]; // .style.color='green';
    
//     if(h1_tag !=undefined){
//         chrome.runtime.sendMessage({message : "bookmark"}); // user get the bookmark message
//     }
// }