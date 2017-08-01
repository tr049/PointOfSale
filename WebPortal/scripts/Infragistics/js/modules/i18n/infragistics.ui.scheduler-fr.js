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
                tag: "fr-FR", // DO NOT TRANSLATE
                agenda: "Agenda",
                month: "Mois",
                next: "Suivant",
                previous: "Précédent",
                dateRange: "Plage de dates",
                todayButton: "Aujourd’hui",
                nonDivError: "igScheduler ne peut être illustré que sur un élément HTML DIV.",
                createNewAppointmentDialogTitle: "Créer un nouveau rendez-vous",
                editAppointmentDialogTitle: "Modifier le rendez-vous",
                appointmentDialogSubjectLabel: "Sujet",
                appointmentDialogLocationLabel: "Emplacement",
                appointmentDialogFromLabel: "De",
                appointmentDialogToLabel: "À",
                appointmentDialogDescriptionLabel: "Description",
                appointmentDialogCreateButtonLabel: "Créer",
                appointmentDialogSaveButtonLabel: "Enregistrer",
                appointmentDialogCancelButtonLabel: "Annuler",
                appointmentDialogCreateAppointmentButtonLabel: "Créer un rendez-vous",
                dayPopoverTitle: "Créer un nouveau rendez-vous",
                appointmentPopoverTitle: "Modifier le rendez-vous",
                appointmentPopoverOpenButtonLabel: "Ouvrir le rendez-vous",
                appointmentPopoverDeleteButtonLabel: "Supprimer",
                deleteAppointmentDialogTitle: "Supprimer un rendez-vous",
                deleteAppointmentDialogConfirmation: "Voulez-vous supprimer ce rendez-vous ?",
                deleteAppointmentDialogDeleteButtonLabel: "Supprimer",
                deleteAppointmentDialogCancelButtonLabel: "Annuler",
                appointmentDialogResourceLabel: "Ressource",
                invalidIntervalErrorMessage: "La date de fin entrée a lieu avant la date de début.",
                dialogCloseButtonText: "Fermer"
            }
        };
    }
}));// REMOVE_FROM_COMBINED_FILES