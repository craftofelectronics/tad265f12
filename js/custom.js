---
---
jQuery(document).ready(function() {
	
	$('#uq').text('Unanswered Questions');
	
	JSONP( 'https://api.github.com/repos/{{ site.organization }}/{{ site.repos }}/issues?callback=?', function( response ) {
		var data = response.data;
		$('#uq').text(data.length + ' Unanwered Questions');
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