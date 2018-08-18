function realClick(url) {
	var $lnk = $("#rurl");
	var $canvas = $("canvas");
	$lnk.css({
		display: "block",
		top: $canvas.offset().top,
		left: $canvas.offset().left,
		width: $canvas.width(),
		height: $canvas.height()
	})
	$lnk.prop("href", url).prop("target", "_blank");
	fireEvent(document.getElementById("rurl"), "click");
}

function fireEvent(node, eventName) {
	var doc;
	if (node.ownerDocument) {
		doc = node.ownerDocument;
	} else if (node.nodeType == 9){
		doc = node;
	} else {
		throw new Error("Invalid node passed to fireEvent: " + node.id);
	}

	 if (node.dispatchEvent) {
		var eventClass = "";
		switch (eventName) {
			case "click":
			case "mousedown":
			case "mouseup":
				eventClass = "MouseEvents";
				break;

			case "focus":
			case "change":
			case "blur":
			case "select":
				eventClass = "HTMLEvents";
				break;

			default:
				throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
				break;
		}
		var event = doc.createEvent(eventClass);
		event.initEvent(eventName, true, true);

		event.synthetic = true;
		node.dispatchEvent(event, true);
	} else  if (node.fireEvent) {
		var event = doc.createEventObject();
		event.synthetic = true;
		node.fireEvent("on" + eventName, event);
	}
};