$(".document").ready(function(){
	$(".agendaPlaceholder").each(function(index, agendaPlaceholder)
	{
		var emphasizeElement = $(agendaPlaceholder).attr("data-emphasize-element");

		var agendaTemplate = $("#agendaTemplate").clone();
		agendaTemplate.prop({ id: "agenda" + emphasizeElement});

		$("." + emphasizeElement, agendaTemplate).addClass("emphasizedElement");
		agendaTemplate.appendTo(agendaPlaceholder).show();
	})
})