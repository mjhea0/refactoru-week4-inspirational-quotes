

//** model */
array = [{},{},{}]

// renders the values on the page side of the page
renderfunction
	loop
	add row

//** on click change the text clicked on, remove something, add something
$('.class_name').click(function(){
	var whatever = $(this).text()
	$('.class_name_show_after_click').text(whatever)
	$('.class_name').addClass('animate-left-collapsed');
	$('.class_name_show_before_click').remove('animate-left-collapsed');

	// to only show items on the left associated with "whatever"
	filter by certain item
	render_function

})

// revert everything back


// workflow 

1) scrap craiglist for all jobs on a single page
2) add data to model/database
3) display data on right side of page
4) search criteria on left side of page 
5) display data

yummy craigslist crawling

