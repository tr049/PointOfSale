/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global define, jQuery */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( ["jquery"], factory);
	} else {
		factory(jQuery);
	}
}
(function($) {
	$.ig = $.ig || {};
	$.ig.schedulerCore = $.ig.schedulerCore || {};
	$.ig.schedulerCore.locale = $.ig.schedulerCore.locale || {};
	$.extend($.ig.schedulerCore.locale, {

		getString: function(name) {
			var str = this[name];
			if (!str) return null;
			if (arguments.length === 1) return str;
			return $.ig.util.stringFormat1(str, Array.prototype.slice.call(arguments, 1));
		},
		LE_ActivityBase_DisassociatedResource: "指定したリソースはこのアクティビティと同じデータソースに関連付いていません。",
		LE_AppointmentItemsSource_CannotEdit: "予定項目ソースはコンテンツの変更をサポートしません。",
		LE_AppointmentItemsSource_InvalidValue_JS: "指定した値は JSON 配列または $.ig.DataSource インスタンスである必要があります。",
		LE_AppointmentItemsSource_NoIList_DOTNET: "AppointmentItemsSource はコンテンツの変更をサポートしません。変更をサポートするために項目ソースは System.Collections.IList を実装する必要があります。",
		LE_AppointmentPropertyMapping_RecurrenceRoot: "The RecurrenceRoot property is not bindable and cannot be mapped. Create a mapping for the RecurrenceId property instead.",
		LE_AppointmentPropertyMapping_Resource: "The Resource property is not bindable and cannot be mapped. Create a mapping for the ResourceId property instead.",
		LE_BeginEdit_CreatePending: "指定したアクティビティは、Create 操作が保留のため編集できません。",
		LE_CannotCreateDataObject_DOTNET: "新しいデータ オブジェクト インスタンスを作成できません。データ オブジェクト型にパラメーターなしコンストラクターがあるかどうかを確認します。ない場合、この型の新しいインスタンスの CreateAppointmentDataObjectCallback プロパティにデリゲートします。",
		LE_CannotModifyApppointmentsWhenDataSourceSet: "DataSource を使用中の場合、操作は無効です。代わりに Scheduler.DataSource で要素へアクセス、編集します。",
		LE_CannotSetDataSourceWhenAppointmentsAreDefined: "データソースを使用する前に、Appointments コレクションを空にする必要があります。",
		LE_CouldNotConvertColorScheme: "The value '{0}' could not be converted to a ScheduleResourceColorScheme value.",
		LE_CouldNotConvertValue: "The value '{0}' could not be converted to type {1}.",
		LE_CreateDataObjectFailed: "新しいデータ オブジェクト インスタンスを作成できません。",
		LE_DataObjectNotAssociated: "指定したデータ オブジェクトはと Appointment 関連付いていません。",
		LE_DuplicateIdentifier: "識別子 {0} はすでに使用されています。アクティビティ/リソース識別子は一意にする必要があります。",
		LE_EndEdit_DataObjectAlreadyAssociated: "このデータ オブジェクトはすでにアクティビティと関連付いています。",
		LE_EndEdit_NotInEditMode: "編集モードでないため EndEdit を指定したアクティビティで呼び出せません。BeginEdit はアクティビティ編集操作がコミットされる前に最初に呼び出す必要があります。",
		LE_InvalidDayOfWeekRule: "指定した曜日が無効です。",
		LE_MissingIdentifier: "識別子がありません。",
		LE_NoAppointmentItemsSource: "AppointmentItemsSource は割り当てられていません。",
		LE_NoCreateAppointmentDataObjectCallback_JS: "新しいデータ オブジェクト インスタンスは作成できません。CreateAppointmentDataObjectCallbackプロパティの値を指定できます。",
		LE_NoDataObject: "指定したアクティビティの基になるデータ オブジェクトが項目ソースに存在しません。",
		LE_NoPropertyMapping_Appointment: "プロパティ マッピングは Appointment プロパティ '{0}' に存在しません。",
		LE_RecurrenceParsing: "繰り返し解析エラー、コンテキスト: {0}",
		LE_RecurrenceSerializing: "繰り返しシリアル化エラー、コンテキスト: {0}",
		LE_SchedulePropertyMap_Missing: "次の必要なプロパティ マッピングが定義されていません。",
		LE_SchedulePropertyMap_NoPropertyFound: "基になるデータ オブジェクトでプロパティ名 '{0}' は見つかりませんでした。 ",
		LIT_AgendaDayHeader_Today: "今日",
		LIT_AgendaNoEventsMessage: "イベントはありません。",
		LIT_AgendaStartTime_AllDay: "終日",
		LIT_AgendaStartTime_Ends: "終了",
		RD_And: "および",
		RD_AtTime: "{0}",
		RD_Effective1: "{0} から開始",
		RD_Effective2: "{0} から {1}",
		RD_Effective3: "{0} から開始 {1} から {2} まで",
		RD_Effective4: "{0} {1} に開始",
		RD_Effective5: "{0} から {1} {2} まで",
		RD_Effective6: "{0} から {1} の {2} から {3} まで",
		RD_Every: "every {0} {1}",
		RD_FrequencyLiterals: "年,月,週,日,時,分,秒",
		RD_FrequencyLiterals2: "年,月,週,日,時,分,秒",
		RD_FrequencyLiteralsPlural: "年,か月,週,日,時,分,秒",
		RD_InMonth: "{0}",
		RD_Last: "最後の",
		RD_NumberSuffix_nd: "第",
		RD_NumberSuffix_rd: "第",
		RD_NumberSuffix_st: "第",
		RD_NumberSuffix_th: "第",
		RD_OccurrenceOfThe: "回目の",
		RD_OfEveryMinuteOrHour: "{0}ごと",
		RD_OfTheMonthOrYear: "",
		RD_OfTheNthMinuteOrHour: "{0} {1}",
		RD_OnEach: "各",
		RD_OnEverySecond: "各秒",
		RD_OnThe: "",
		RD_OnTheNthSecond: "{0} 秒",
		RD_Or: "または",
		RD_OrdinalDayOfMonthUsesSuffix: "true",
		RD_OrdinalNumberWithSuffix: "{0}{1}",
		RD_RecurrenceDescriptionOverallStructure: "{0}ごとの {1}{2}",
		RD_RepeatingMultipleTimes: "反復 {0} 回",
		RD_RepeatingOneTime: "反復 1 回",
		RD_RulesInMonth: "{1} {0}",
		RD_ToTheLast: "最後のまで",
		RD_Weekday: "平日",
		RD_WeekendDay: "週末",
		RD_WeekOrDayOfTheMonthOrYear: "{0} {1}"
	});
}));// REMOVE_FROM_COMBINED_FILES
