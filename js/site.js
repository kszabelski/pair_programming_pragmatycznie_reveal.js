$(".document").ready(function(){

	var emphasizeCurentElement = function (agendaTemplate, emphasizeElementClass){
		agendaTemplate.prop({ id: "agenda" + emphasizeElementClass});
		var emphasizeElement = $("." + emphasizeElementClass, agendaTemplate).addClass("emphasizedElement");
	}

	var setArrowPosition = function(agendaTemplate, arrowPosition){
		if (arrowPosition)
			$(".agendaArrow", agendaTemplate).css({ top: arrowPosition, left: "-40px" });
		else
			$(".agendaArrow", agendaTemplate).hide();
	}
	
	$(".agendaPlaceholder").each(function(index, agendaPlaceholder)
	{
		var agendaTemplate = $("#agendaTemplate").clone();
		emphasizeCurentElement(agendaTemplate, $(agendaPlaceholder).attr("data-emphasize-element"));
		agendaTemplate.appendTo(agendaPlaceholder).show();

		setArrowPosition(agendaTemplate, $(agendaPlaceholder).attr("data-arrow-top"));
	})
})