window.onload=function(){ //if window is load the any tab that's time function is call
    chrome.storage.local.get(['count'], function(result){ 
        var msg = "Number of tabs created so far : "; // It is msg for user, How many tab you are open ?
        if(result.count==undefined){ // if result.count is undefined then msg is 0
            msg=msg+'0';
        }
        else{
            msg=msg+result.count;
        }
        document.getElementById('count').innerHTML=msg; // The innerhtml is js property and it's use in change the text in html file (any id or class)
    });
}

// document.getElementById('submit').onclick=function(){
//     chrome.tabs.query({active : true, currentWindow : true},function(tabs){
//         var tab_id=tabs[0].id; 
//         chrome.tabs.sendMessage(tab_id,{todo: "Change Color "});
//     })
// } 

// document.getElementById('submit').onclick=function(){ // if you click the submit then after this function is run
//     var username=document.getElementById('username').value;
//     document.getElementById('greet').innerHTML="Hello " +username; // hello username "you write the any name" in reflty the popup.html
// }