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
        		tag: "ja-JP", // DO NOT TRANSLATE
		        agenda: "予定一覧",
		        month: "月表示",
		        next: "次へ",
		        previous: "前へ",
		        dateRange: "日付範囲",
		        todayButton: "今日",
		        nonDivError: "igScheduler は HTML DIV 要素でのみインスタンスを作成できます。",
		        createNewAppointmentDialogTitle: "新しい予定の作成",
		        editAppointmentDialogTitle: "予定の編集",
		        appointmentDialogSubjectLabel: "件名",
		        appointmentDialogLocationLabel: "場所",
		        appointmentDialogFromLabel: "開始: ",
		        appointmentDialogToLabel: "終了:",
		        appointmentDialogDescriptionLabel: "説明",
		        appointmentDialogCreateButtonLabel: "作成",
		        appointmentDialogSaveButtonLabel: "保存",
		        appointmentDialogCancelButtonLabel: "キャンセル",
		        appointmentDialogCreateAppointmentButtonLabel: "予定の作成",
		        dayPopoverTitle: "新しい予定",
		        appointmentPopoverTitle: "予定の編集",
		        appointmentPopoverOpenButtonLabel: "予定を開く",
		        appointmentPopoverDeleteButtonLabel: "削除",
		        deleteAppointmentDialogTitle: "予定の削除",
		        deleteAppointmentDialogConfirmation: "この予定を削除しますか？",
		        deleteAppointmentDialogDeleteButtonLabel: "削除",
		        deleteAppointmentDialogCancelButtonLabel: "キャンセル",
		        appointmentDialogResourceLabel: "リソース",
		        invalidIntervalErrorMessage: "終了日付が開始日付より前です。",
		        dialogCloseButtonText: "閉じる"
        	}
        };
    }
}));// REMOVE_FROM_COMBINED_FILES