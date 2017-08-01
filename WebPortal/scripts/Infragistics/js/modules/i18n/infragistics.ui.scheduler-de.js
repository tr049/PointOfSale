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
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.SchedulerLocale) {
        $.ig.SchedulerLocale = {
        	locale: {
        		tag: "de-DE", // DO NOT TRANSLATE
        		agenda: "Terminübersicht",
        		month: "Monat",
        		next: "Nächster",
        		previous: "Vorheriger",
        		dateRange: "Datenbereich",
        		todayButton: "Heute",
        		nonDivError: "igScheduler kann nur an einem HTML DIV-Element instantiiert werden.",
        		createNewAppointmentDialogTitle: "Neuen Termin anlegen",
        		editAppointmentDialogTitle: "Termin bearbeiten",
        		appointmentDialogSubjectLabel: "Betreff",
                appointmentDialogLocationLabel: "Ort",
                appointmentDialogFromLabel: "Von",
                appointmentDialogToLabel: "An",
                appointmentDialogDescriptionLabel: "Beschreibung",
                appointmentDialogCreateButtonLabel: "Erstellen",
                appointmentDialogSaveButtonLabel: "Speichern",
                appointmentDialogCancelButtonLabel: "Abbrechen",
                appointmentDialogCreateAppointmentButtonLabel: "Termin anlegen",
                dayPopoverTitle: "Neuen Termin anlegen",
                appointmentPopoverTitle: "Termin bearbeiten",
                appointmentPopoverOpenButtonLabel: "Termin öffnen",
                appointmentPopoverDeleteButtonLabel: "Löschen",
                deleteAppointmentDialogTitle: "Termin löschen",
                deleteAppointmentDialogConfirmation: "Möchten Sie diesen Termin löschen?",
                deleteAppointmentDialogDeleteButtonLabel: "Löschen",
                deleteAppointmentDialogCancelButtonLabel: "Abbrechen",
                appointmentDialogResourceLabel: "Ressource",
                invalidIntervalErrorMessage: "Das von Ihnen eingegebene Ende liegt vor dem Beginn.",
                dialogCloseButtonText: "Schließen"
        	}
        };
    }
}));// REMOVE_FROM_COMBINED_FILES