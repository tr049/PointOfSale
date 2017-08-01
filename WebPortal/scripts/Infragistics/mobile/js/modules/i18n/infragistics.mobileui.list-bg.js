﻿/*!@license
* Infragistics.Web.MobileUI ListView localization resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.mobileListView) {
	$.ig.mobileListView = {};
	$.ig.mobileListViewFiltering = {};
	$.ig.mobileListViewLoadOnDemand = {};
	$.ig.mobileListViewSorting = {};

	$.ig.mobileListView.locale = {
		noSuchWidget: "Следният widget не е зареден: ",
		optionChangeNotSupported: "Промяната на следната опция след инициялизация на igListView не се поддържа:",
		emptyListText: "Листът няма елементи!",
		goBackLabel: "Назад",
		detailsLabel: "Детайли",
		searchTrayExpandLabel: "Сортиране/Филтриране",
		searchTrayCollapseLabel: "Затвори"
	};
	$.ig.mobileListViewFiltering.locale = {
		keywordSearchLabel: "",
		keywordAllStateText: "Всички полета",
		filterPresetsLabel: "Предефинирани филтри:",
		searchBarPlaceHolder: "Филтриране на елементи...",
		filterAllStateText: "Всичко",
		showLabel: "Покажи ",
		cancelButtonLabel: "Отмени",
		clearSearchButtonText: "Изчисти текста"
	};
	$.ig.mobileListViewLoadOnDemand.locale = {
		loadMoreItemsLabel: "Зареди още елементи",
		noMoreItemsLabel: "Няма останали незаредени елементи"
	};
	$.ig.mobileListViewSorting.locale = {
		sortPresetsLabel: "Предефинирани сортитащи изрази:",
		sortDefaultStateText: "По подразбиране",
		sortByLabel: "Сортирай по ",
		expandedCueText: "Щракни, за да свиеш {0}",
		collapsedCueText: "Щракни, за да разшириш {0}"
	};

}