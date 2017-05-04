function truthInputs () {
	$('#checkboxOutput').text($('#checkboxInput').prop('checked'));
	$('#colorOutput').text($('#colorInput').val());
	$('#dateOutput').text($('#dateInput').val());
	$('#datetimeOutput').text($('#datetimeInput').val());
	$('#emailOutput').text($('#emailInput').val());
	$('#monthOutput').text($('#monthInput').val());
	$('#numberOutput').text($('#numberInput').val());
	$('#passwordOutput').text($('#passwordInput').val());
	$('#radioOutput').text($('#radioInput:checked').val());
}

$('document').ready(truthInputs);
$('form').change(truthInputs);