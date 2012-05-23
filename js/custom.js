---
---
// This is a comment.

jQuery(document).ready(function() {
	
	$('#uq').text('Unanswered Questions');
	$('#due-dates').text('Due Dates');
	
	JSONP( 'https://api.github.com/repos/{{ site.organization }}/{{ site.repos }}/issues?callback=?', function( response ) {
		var data = response.data;
		$('#uq').text(data.length + ' Unanwered Questions');
	});
	
	/* 
	[
  {
    "url": "https://api.github.com/repos/octocat/Hello-World/milestones/1",
    "number": 1,
    "state": "open",
    "title": "v1.0",
    "description": "",
    "creator": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat"
    },
    "open_issues": 4,
    "closed_issues": 8,
    "created_at": "2011-04-10T20:09:31Z",
    "due_on": null
  }
]
*/
	
	JSONP( 'https://api.github.com/repos/{{ site.organization }}/{{ site.repos }}/milestones?callback=?', function( response ) {
		var data = response.data;
		var ul = $('<ul></ul>');

		console.log(data);
		console.log(data.length);
		
		for (var i = 0 ; i < data.length ; i++) {

			console.log(data[i]);
			
			var li = $('<li/>');
			a = jQuery('<a/>', {
				href : "https://github.com/{{ site.organization }}/ {{ site.repos }}/issues/milestones",
				title : data[i].title,
				text : data[i].title });
			li.append(a);
			li.append('<br/>');
			li.append(data[i].due_on);
			
			ul.append(li);
		}
		
		//$('#due-dates').text(data.length + ' Due Dates');
		$('#due-dates').append(ul);
	});
	
	function JSONP( url, callback ) {
		var id = ( 'jsonp' + Math.random() * new Date() ).replace('.', '');
		var script = document.createElement('script');
		script.src = url.replace( 'callback=?', 'callback=' + id );
		document.body.appendChild( script );
		window[ id ] = function( data ) {
			if (callback) {
				callback( data );
			}
		};
	}
});