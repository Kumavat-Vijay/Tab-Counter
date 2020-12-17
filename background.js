chrome.tabs.onCreated.addListener(function(){ // tab is chrome API and onCreated is "if you jump to the new tab that's time this funtion is call"
    var total = 0; // variable 
    chrome.storage.local.get(['count'],function(result){ // storage is chrome API and it's store the count value, Ex. 1,2,3....
        if(result.count != undefined){ // if page is not undefined then after total is 
            total=parseInt(result.count); // parseInt is string to int convertor funtion
        }
        total=total + 1; // total is increment by 1
        chrome.storage.local.set({count:total}); // it mean set the total = count
    })
})


// chrome.runtime.onMessage.addListener(function(request, sender, response){
//     if(request.message == "bookmark"){
//         chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
//             var url = tabs[0].url;
//             chrome.bookmarks.create({title : "Documentation Bookmark",url : url});
//         })
//         // document.getElementByTagName('h1')[0].style.color='green';
//     }
// })

// chrome.tabs.onCreated.addListener(function(){
//     alert('A new tab was created')
// })
