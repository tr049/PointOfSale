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
        		tag: "ru-RU", // DO NOT TRANSLATE
        		agenda: "Деловой календарь",
        		month: "Месяц",
        		next: "Следующий",
        		previous: "Предыдущий",
        		dateRange: "Диапазон дат",
        		todayButton: "Сегодня",
        		nonDivError: "Экземпляр igScheduler можно создать только в элементе HTML DIV.",
        		createNewAppointmentDialogTitle: "Создать новое назначение",
        		editAppointmentDialogTitle: "Изменить назначение",
        		appointmentDialogSubjectLabel: "Тема",
                appointmentDialogLocationLabel: "Местоположение",
                appointmentDialogFromLabel: "С",
                appointmentDialogToLabel: "По",
                appointmentDialogDescriptionLabel: "Описание",
                appointmentDialogCreateButtonLabel: "Создать",
                appointmentDialogSaveButtonLabel: "Сохранить",
                appointmentDialogCancelButtonLabel: "Отмена",
                appointmentDialogCreateAppointmentButtonLabel: "Создать назначение",
                dayPopoverTitle: "Создать новое назначение",
                appointmentPopoverTitle: "Изменить назначение",
                appointmentPopoverOpenButtonLabel: "Открыть назначение",
                appointmentPopoverDeleteButtonLabel: "Удалить",
                deleteAppointmentDialogTitle: "Удалить назначение",
                deleteAppointmentDialogConfirmation: "Удалить это назначение?",
                deleteAppointmentDialogDeleteButtonLabel: "Удалить",
                deleteAppointmentDialogCancelButtonLabel: "Отмена",
                appointmentDialogResourceLabel: "Ресурс",
                invalidIntervalErrorMessage: "Введенная дата окончания наступает до даты начала.",
                dialogCloseButtonText: "закрыть"
        	}
        };
    }
}));// REMOVE_FROM_COMBINED_FILES