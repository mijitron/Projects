$('#mySelect').change(function() {
    if($('#mySelect option:selected').val() == 1) {
    	$("#map1").removeClass('hidden');
			$("#map2").addClass('hidden');
			$("#map3").addClass('hidden');
    } if($('#mySelect option:selected').val() == 2) {
    	$("#map2").removeClass('hidden');
			$("#map1").addClass('hidden');
			$("#map3").addClass('hidden');
    } else if($('#mySelect option:selected').val() == 3) {
    	$("#map3").removeClass('hidden');
			$("#map2").addClass('hidden');
			$("#map1").addClass('hidden');
		}
});
	