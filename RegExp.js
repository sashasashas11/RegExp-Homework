/**
 * Created by sasha on 23.11.13.
 */
!function(){
	function prepare(line){
		var originalArgument= arguments;

		return line.replace(/\$(\d+)/g, function(x, index){
			return originalArgument[index];
		});
	}

	var name = "sergii",
		id = 25;

	console.log( prepare('<li id="user-$1">$2</li>', id, name) );
// <li id="user-25">sergii</li>
}();

