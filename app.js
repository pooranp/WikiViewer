$(document).ready(function () {
  
	
//CLEAR SEARCH FIELD
	
	$('input').on('click', function() {
		if ($('input').val() === "Search Here...")
		$('input').val('');
	});
	
//BEGIN SEARCH
	
    $('#searchBtn').on('click', function executeSearch(){
      $('ul').html("");                 
      var search = $('#searchFld').val();
      var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search + "&utf8=&format=json&callback=?";
      
//AJAX REQUEST
      
$.ajax({
  type: "GET",
  url: url,
  async: false,
  dataType: "json",
  success: function (results) {    
  var listLength = results.query.search.length;
    
      for (var i = 0; i < listLength; i++){
        
//ARTICLE INFO
        
        var title = results.query.search[i].title;
        var articleUrl = 'https://en.wikipedia.org/wiki/' + title;
        var articleSnip = results.query.search[i].snippet;
        var timeStamp = results.query.search[i].timestamp;
        var date = timeStamp.slice(0,10);
		  
//ARTICLE HTML DISPLAY
         
      $('#searchResults').append('<a href="' + articleUrl + '" target="_blank"><div class="listItem"><li class="articleTitle">' + title + '</li><h6 class="snip">' + articleSnip + '</h6><p>' + date + '</p></div>');
         
        };
    
  },
	
//END AJAX CALLBACK
  
  error: function (errorMessage){
  alert("Error");
    
  }     
  
    }); 
		
//END OF AJAX REQUEST
    
      $('#author').css('display', 'hidden');
      
	}); 
	
//END SEARCH
	
//SET ENTER KEY FOR SEARCH
  
  $('#searchFld').on('keydown', function (e){
    if (e.which === 13){
    $('#searchBtn').trigger('click');
    };
  });
	
//LINK HEADER TO RELOAD
	
	$('h1').on('click', function () {
		window.location.removedByCodePen();
	})
  
});