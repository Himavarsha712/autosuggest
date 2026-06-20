var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("search-bar");
var searchSuggestions = document.getElementById("search-suggestions");

//this function is called when user is typed
//get user type data
//use the user typed data int query int API call
//API call
//Append all the search suggestion to div tag in UI


searchBar.addEventListener("input", function(){
    var query = searchBar.value.trim();
    
    //if box is empty, clear suggestions and stop
    if(query === "") {
        searchSuggestions.innerHTML = "";
        return;
    }

    fetchSuggestions(query);
})

function fetchSuggestions(query) {
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
        .then(function(res){
            return res.json();
        })
        .then(function(data) {
            showSuggestions(data);
        })
        .catch(function(err){
            console.log("Error : " + err);
        })
}

function showSuggestions(data) {
    var values = data.results;
    if(data.count == 0){
        searchSuggestions.innerHTML = "<div>No Matching results found</div>";
    }
    else{
        var htmlString = "";
        for(var i = 0; i < values.length; i++){
            htmlString += "<div><span class='suggestion-item'>" + values[i].text + "</span><span class='item-weight'>" + values[i].weight + "</span></div>";
        }
        searchSuggestions.innerHTML = htmlString;
    }
}