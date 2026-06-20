
var AIP_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("search-bar");
var searchSuggestions = document.getElementById("search-suggestions");

searchBar.addEventListener("input", function(){
// Get the current input value
//Get user typed data
//Get user typed data in the query in the API call
//API call
//Append all thre search suggestion to div tag in UI
var query= searchBar.value.trim;
})

function fetchSearchSuggestions(query){
    fullUrl = AIP_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            // Process the search suggestions data
            showSearchSuggestions(data);
        })
        .catch(function(err){
            console.log("Error:", + err);
        })
    
    function showSuggestions(data){
        var values = data.results;
        if(data.count === 0){
            searchSuggestions.innerHTML = "<p>No matching suggestions found</p>";
        }
        else{
            var htmlString="";
            for(var i=0; i<values.length; i++){
                htmlString += "<div><span  class='suggestion-item'>" + values[i].text + "</span><span class ='item-weight'>" + values[i].weight + "</span></div>";
            }
            searchSuggestions.innerHTML = htmlString;
            
        }

    }


    // https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8