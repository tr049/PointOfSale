/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global define, jQuery */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( ["jquery"], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotGrid) {
        $.ig.PivotGrid = {};

        $.extend($.ig.PivotGrid, {
            locale: {
                filtersHeader: "Filterfelder hier ablegen",
                measuresHeader: "Datenfelder hierher ziehen",
                rowsHeader: "Zeilenfelder hierher ziehen",
                columnsHeader: "Spaltenfelder hierher ziehen",
                disabledFiltersHeader: "Filterfelder",
                disabledMeasuresHeader: "Datenelemente",
                disabledRowsHeader: "Zeilenfelder",
                disabledColumnsHeader: "Spaltenfelder",
                noSuchAxis: "Keine solche Achse"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES