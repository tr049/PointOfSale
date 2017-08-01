/*!@license
* Infragistics.Web.ClientUI Scheduler localization resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
    if (typeof define === "function" && define.amd) {
        define( ["jquery"], factory );
    } else {
        factory(jQuery);
    }
}
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.SchedulerLocale) {
        $.ig.SchedulerLocale = {
        	locale: {
        		tag: "bg-BG", // DO NOT TRANSLATE
        		agenda: "График",
        		month: "Месец",
        		next: "Следващ",
        		previous: "Предишен",
        		dateRange: "Диапазон от дати",
        		todayButton: "Днес",
        		nonDivError: "Инстанция на igScheduler може да бъде създадена само върху HTML DIV елементи.",
        		createNewAppointmentDialogTitle: "Създаване на новa среща",
        		editAppointmentDialogTitle: "Редактиране на среща",
        		appointmentDialogSubjectLabel: "Тема",
                appointmentDialogLocationLabel: "Локация",
                appointmentDialogFromLabel: "От",
                appointmentDialogToLabel: "До",
                appointmentDialogDescriptionLabel: "Описание",
                appointmentDialogCreateButtonLabel: "Създаване",
                appointmentDialogSaveButtonLabel: "Запазване",
                appointmentDialogCancelButtonLabel: "Отказ",
                appointmentDialogCreateAppointmentButtonLabel: "Създаване на нова среща",
                dayPopoverTitle: "Създаване на нова среща",
                appointmentPopoverTitle: "Редактиране на среща",
                appointmentPopoverOpenButtonLabel: "Отваряне на среща",
                appointmentPopoverDeleteButtonLabel: "Изтриване",
                deleteAppointmentDialogTitle: "Изтриване на среща",
                deleteAppointmentDialogConfirmation: "Искате ли да изтриете тази среща?",
                deleteAppointmentDialogDeleteButtonLabel: "Изтриване",
                deleteAppointmentDialogCancelButtonLabel: "Отказ",
                appointmentDialogColorLabel: "Ресурс",
                invalidIntervalErrorMessage: "Крайната дата предхожда началната дата.",
                dialogCloseButtonText: "Затваряне"
        	}
	    };
    }
}));// REMOVE_FROM_COMBINED_FILES