﻿/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Splitter) {
	$.ig.Splitter = {};

	$.extend($.ig.Splitter, {
		locale: {
		    errorPanels: 'Le nombre de panneaux ne doit pas être supérieur à deux.',
		    errorSettingOption: "Erreur lors du réglage de l'option."
		}
	});

}
}));// REMOVE_FROM_COMBINED_FILES
