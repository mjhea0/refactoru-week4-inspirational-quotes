$(document).ready(function(){

	/** global variables */
	var total = 0
	var count = 0
	var avg = 0
	var listRank = {}
	var totals_array = []

	/** grab the query string */
	function grabAuthorQueryString() {
		var queryString = window.location.search;
			return queryString.substring(1);
	}

	/** get items from local storage */
	/** should be in a function */
	var getItems = JSON.parse(localStorage.getItem('list'))

	/** adds data to the table */
	function addRow(quote){
		
		var newQuote = "<tr><td>" + quote + "</div</td> <td></div>";
		$("table#my_list tbody").append("<td>" + newQuote +  
			
		"<div class='dropdown'>" +
		  "<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'>Action<span class='caret'></span>" +
		  "</button>" +
		  "<ul class='dropdown-menu' role='menu'>" +
		    "<li class='rank' value='1'>1</li>" +
		    "<li class='rank' value='2'>2</li>" +
		    "<li class='rank' value='3'>3</li>" +
		    "<li class='rank' value='4'>4</li>" +
		    "<li class='rank' value='5'>5</li>" +
		    "<li class='rank' value='6'>6</li>" +
		    "<li class='rank' value='7'>7</li>" +
		    "<li class='rank' value='8'>8</li>" +
		    "<li class='rank' value='9'>9</li>" +
		    "<li class='rank' value='10'>10</li>" +
		  "</ul>" +
		"</div>" +
			"</td>" +
			"<td class='wrong_total'></td></tr>");
	}

	/** append author's name */
	function addAuthor(author) {
		var newAuthor = author;
		$("#author").append(newAuthor);
	}

	addAuthor(grabAuthorQueryString())

	var myStringArray = getItems[grabAuthorQueryString()];
	
	for (var i = 0; i < myStringArray.length; i++) {
	    addRow(myStringArray[i]);  
	}

	//** ranking */
	$('.rank').click(function() {
	    var select = $(this).val(); 
	    // console.log(select)
	    total += parseInt(select)
	    count++
			avg = total / count
			addTotals(total,count,avg)
	});

	function addTotals(total,count,avg) {
		totals_array[0] = total
		totals_array[1] = count
		totals_array[2] = avg
		listRank[(grabAuthorQueryString())] = (totals_array)
		localStorage.setItem('rank', JSON.stringify(listRank))
	}
	

	var getItems = JSON.parse(localStorage.getItem('rank'))
		for (var i in getItems){
			$(".wrong_total").html(Math.round(i * 100) / 100);
			addRow(getItems[i], i)
			listObject[i] = getItems[i]
		}

	

});

