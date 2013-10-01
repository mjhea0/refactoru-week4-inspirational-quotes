$(document).ready(function(){

	/** global variables */
	var listObject = {}

	/** adds data to the html table */
	$('input#author').focus();
	function addRow(quote, author){
		/** append author and create link to author page */
		var newAuthor = "<td><a href='author.html?" + author + "'>" + author + "</a></td>";
		/** append the quote and create  */
		var newQuote = "<td>" + quote + "</div</td> <td><center><div class='box' author='" + author + 
		"' quote='" + quote + "'></center></td>";
		/** use the variables to append */
		$("table#my_list tbody").append("<tr>"+ newAuthor + newQuote + "</tr>")
	}


	/** iterates through local storage, then calls addRow() function */
	/** should be in a function **/
	if(localStorage.getItem('list')){
		var getItems = JSON.parse(localStorage.getItem('list'))
		for (var i in getItems){
			addRow(getItems[i], i)
			listObject[i] = getItems[i]
		}
		$('.box').on('click', function(){
  		$(this).parents('tr').remove()
  		var delete_author= $(this).attr("author")
  		var delete_quote = $(this).attr("quote")
  		for (var i=0; i <= listObject[delete_author].length; i++) {
  			if (delete_quote === listObject[delete_author].join("")) {
  				// console.log(listObject[delete_author]) => element to delete

  				/** revert */
					$('.btn-primary').on('click', function(){
						addRow(delete_quote,delete_author)
						console.log(delete_author)
						console.log(delete_quote)
						if(!listObject[delete_author]){
		        	listObject[delete_author] = []
		        }
						listObject[delete_author].push(delete_quote)

						$('input#author').focus();
							localStorage.setItem('list', JSON.stringify(listObject))
					})

  				listObject[delete_author].splice(0);
  				// console.log(listObject[delete_author]) => deletes element in array
  				if (listObject[delete_author].length === 0) {
  					delete listObject[delete_author]
  					localStorage.setItem('list', JSON.stringify(listObject))
  					break
  				}
  			}
  		}
  	})
	}

	/** controls application logic */	
	$('.btn-success').click(function(){
		/** grab the variables from the list */
		if ($("#author").val() != "" && $("#quote").val() != "") {
			event.preventDefault();
			var author = $("#author").val();
			var quote  = $("#quote").val();
      
    	/** create object (if necessary) */
      if(!listObject[author]){
     		listObject[author] = []
      }

      /** update object */
			listObject[author].push(quote)

			/** call addRow() */
			addRow(quote, author);	
			$('input#author').focus();
		
			/** update local storage */
			localStorage.setItem('list', JSON.stringify(listObject))

			/** clear from */
			$("form")[0].reset();
			location.reload();

		} else {

			/** display alert if the form is not filled out */
			$('.alert-danger').show();

		}	
	})

})	

	

	



