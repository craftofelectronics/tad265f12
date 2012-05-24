---
---
// This is a comment.

jQuery(document).ready(function() {
	
	//$('#uq').text('Unanswered Questions');
	//$('#due-dates').text('Due Dates');
	
	JSONP( 'https://api.github.com/repos/{{ site.organization }}/{{ site.repos }}/issues?callback=?', function( response ) {
		var data = response.data;
		var num = data.length
		
		//$('#uq').text(data.length + ' Unanwered Questions');
		if (num < 2) {
			color = 'badge-success';
		} else if (num < 3) {
			color = 'badge-warning';
		} else {
			color = 'badge-important';
		}
		
		var s = $('<span class="badge ' + color + '"></span>');
		var a = jQuery('<a></a>', {
			href : "https://github.com/{{ site.organization }}/{{ site.repos }}/issues?&state=open",
			style : "color:#fff;",
			title : data.length,
			text : data.length });

		s.append(a);
		$('#uq').append(s);
	});

	
	JSONP( 'https://api.github.com/repos/{{ site.organization }}/{{ site.repos }}/milestones?callback=?', function( response ) {
		var data = response.data;
		var tab = $('#dashboard');
		
		data = data.sort(function(a, b) { return b.due_on < a.due_on; });
		
		for (var i = 0 ; i < data.length ; i++) {
			var tr = $('<tr></tr>');
			var tdl = $('<td></td>');
			var tdr = $('<td style="text-align:right;"></td>');
			a = jQuery('<a/>', {
				href : "https://github.com/{{ site.organization }}/{{ site.repos }}/issues/milestones",
				title : data[i].title,
				text : data[i].title });
			tdl.append(a);
			
			tdr.append(humaneDate(data[i].due_on));
			
			tr.append(tdl);
			tr.append(tdr);
			tab.append(tr);
		}
		
		//$('#due-dates').text(data.length + ' Due Dates');
		$('#due-dates').append(ul);
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