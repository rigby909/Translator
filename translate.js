$(function() {
	$('#start-button').on('click', function() {	
		var word = $('#text-content').val();
		
		$.ajax({
			url: "https://dictionary.yandex.net/api/v1/dicservice.json/lookup",
			dataType:"jsonp",
			data: {
				key: "dict.1.1.20160323T054829Z.7b0911812b321fc8.778ab3624988f7e7b69e55dfe04038d1adefce30",
				text: word,
				lang: "en-ru"
			}
		}).then(function(data) {
			if (data.def && data.def.length> 0) {
				$('<div></div>').addClass('translation')
					.html(word + " - " + data.def[0].tr[0].text).appendTo('#result-container');
			}
		});
	});
	
	$('#clear-button').on('click', function() {
		$('#result-container').text('');
		$('#text-content').val('');
		$('.translation').removeClass('translation');
	});
});