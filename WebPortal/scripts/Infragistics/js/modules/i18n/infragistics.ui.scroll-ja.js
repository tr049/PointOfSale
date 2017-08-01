﻿/*!@license
* Infragistics.Web.ClientUI Scroll localization resources 17.1.20171.1012
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

    if (!$.ig.Scroll) {
	    $.ig.Scroll = {};

	    $.extend($.ig.Scroll, {
		    locale: {
		        errorNoElementLink: 'リンクされている要素が存在しません。',
		        errorNoScrollbarLink: 'リンクされているスクロールバー要素が存在しません。'
		    }
	    });

    }
}));// REMOVE_FROM_COMBINED_FILES