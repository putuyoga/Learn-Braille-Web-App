$(document).on("pageinit", "#mainPage", function () {
	var str = "abcdefghijklmnopqrstuvwxyz";
	for(var i = 0; i < str.length; i++) {
		$("#listButton").append('<a href="#" data-theme="a" data-role="button" data-inline="true" id="abjad-'+ i + '">' + str.substr(i, 1) + '</a>').trigger('create');
		//click event handler
		$("#abjad-" + i).click(function() {
			var id = $(this).attr('id').split("-");
			seqToBraille(listAbjad.DataRoot.Data[id[1]].Sequence.SeqItem);
		});
		
	}
	$("#listButton").controlgroup('refresh');
	
});


function seqToBraille(seq) {
	for(var i = 0; i < seq.length; i++) {
		var dot = $("#dot" + i);
		
		if(seq[i] == "true") {
			dot.addClass("big").removeClass("small");
		} else {
			dot.addClass("small").removeClass("big");
		}
	}
}