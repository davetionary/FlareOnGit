/*function getElementsWithAttribute(attr)
{
	var elementsWithAttribute = [];
	var elements = document.body.getElementsByTagName('*');
	for (var i = 0; i < elements.length; i++)
	{
		if (elements[i].getAttribute(attr))
		{
			elementsWithAttribute.push(elements[i]);
		}
	}
	return elementsWithAttribute;
}

function addCustomOriginalDisplayAttribute ()
{
	var elements = document.body.getElementsByTagName('*');
	for (var i = 0; i < elements.length; i++)
	{
		elements[i].setAttribute('data-original-display-attribute-value', elements[i].style.display);
	}

}

function showHideVersion() {
	var elements = getElementsWithAttribute('data-mc-conditions');
	var e = document.getElementById('version-select');
	var selectedVersion = e.options[e.selectedIndex].value;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].getAttribute('data-mc-conditions').indexOf(selectedVersion) > -1 ) {
			if (elements[i].getAttribute('data-original-display-attribute-value') != '') {
				elements[i].style.display = elements[i].getAttribute('data-original-display-attribute-value')
				}
			else{
				elements[i].style.display = 'block';
			}
		}
		else {
			elements[i].style.display = 'none';
		}
	}
}

var URLparameters = window.location.search.substring(1);
var cleanedVersion = URLparameters.split("=", 2);

function getProperties() {
	console.log("The URL parameters are " + URLparameters);
	console.log("The version is " + cleanedVersion[1]);
}

function resetSelector(){	

	$("#version-select option").removeAttr("selected");
	if (cleanedVersion[1] == null ) {
		console.log("identified undefined, setting first select to active");
		$("#version-select option:first").attr("selected", "selected");
	}
	else {
		console.log("null not identified, trying to set selected option of " + cleanedVersion[1]);
		$('#version-select option:contains('+ cleanedVersion[1] +')').attr("selected", "selected");
	}
}

function amendLinks() {
	var urlversion = $("#version-select option:selected").text();
	$("a").each(function() {
		$(this).attr('href', function() {
			return this.href.split("?")[0] + '?version=' + urlversion;
		});
			console.log("amended links to " + urlversion );
	});
}

function tocCheck() {
	var checkExist = setInterval(function() {
			if ($('.off-canvas-accordion').length) {
				console.log ("off-canvas-accordion found")
				amendLinks();
				clearInterval(checkExist);
			}
		}, 100); // check every 100ms
	

}

window.onload = addCustomOriginalDisplayAttribute()
//window.onload = showHideVersion()

$(document).ready(function() {
	getProperties();
	resetSelector();
	tocCheck();
});*/

//New functions to redirect to URL and to get selector state

var pathArray = window.location.pathname.split('/');

$(document).ready(function() {
		setSelector();
	});

function setSelector() {

	console.log("0 : " + pathArray[0]);
	console.log("1 : " + pathArray[1]);
	console.log("2 : " + pathArray[2]);
	console.log("9 : " + pathArray[9]);
}

function setSelector(){	

	$("#version-select option").removeAttr("selected");
	if (pathArray[9] == null ) {
		console.log("identified undefined, setting first select to active");
		$("#version-select option:first").attr("selected", true);
	}
	else {
		console.log("null not identified, trying to set selected option of " + pathArray[9]);
		$('#version-select option:contains(' + pathArray[9] + ')').attr("selected", true);
	}
};

function urlRedirect() {
	
}
