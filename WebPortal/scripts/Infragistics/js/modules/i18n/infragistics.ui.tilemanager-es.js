﻿/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 17.1.20171.1012
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

if (!$.ig.TileManager) {
	$.ig.TileManager = {};

	$.extend($.ig.TileManager, {
		locale: {
		    renderDataError: "Los datos no se han recuperado o analizado correctamente.",
		    setOptionItemsLengthError: "The length of the items configurations does not match the number of the tiles."
		}
	});
}
}));// REMOVE_FROM_COMBINED_FILES