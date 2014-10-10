$(".document").ready(function(){
	$(".agendaPlaceholder").each(function(index, agendaPlaceholder)
	{
		var emphasizeElement = $(agendaPlaceholder).attr("data-emphasize-element");

		var agendaTemplate = $("#agendaTemplate").clone();
		agendaTemplate.prop({ id: "agenda" + emphasizeElement});

		$("." + emphasizeElement, agendaTemplate).css("font-weight", "bold");
		agendaTemplate.appendTo(agendaPlaceholder).show();
	})
})