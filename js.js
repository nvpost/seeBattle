var field=''
var rows=''
var col=''
var charRow="<div class='charRow'><div>&nbsp;</div><div>А</div><div>Б</div><div>В</div><div>Г</div><div>Д</div><div>Е</div><div>Ж</div><div>З</div><div>И</div><div>К</div></div>"
for (var i=1; i<11; i++){
	rows=rows+"<div class='row'><div><p>"+i+"</p></div>"
		for (var j=1; j<11; j++){
			col=col+"<div data-place="+i+''+j+">&nbsp;</div>"
		}
	rows=rows+col+"</div>";
	col=''	
}
$('.field').html(charRow+rows)
console.log(rows)
