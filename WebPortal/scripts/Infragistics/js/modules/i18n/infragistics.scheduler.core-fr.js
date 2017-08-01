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
		LE_ActivityBase_DisassociatedResource: "The specified resource is not associated with the same data source as this activity.",
		LE_AppointmentItemsSource_CannotEdit: "The appointment item source does not support modification of its contents.",
		LE_AppointmentItemsSource_InvalidValue_JS: "The specified value must be a JSON array or an $.ig.DataSource instance.",
		LE_AppointmentItemsSource_NoIList_DOTNET: "The AppointmentItemsSource does not support modification of its contents. The item source must implement System.Collections.IList in order to support modifications.",
		LE_AppointmentPropertyMapping_RecurrenceRoot: "The RecurrenceRoot property is not bindable and cannot be mapped. Create a mapping for the RecurrenceId property instead.",
		LE_AppointmentPropertyMapping_Resource: "The Resource property is not bindable and cannot be mapped. Create a mapping for the ResourceId property instead.",
		LE_BeginEdit_CreatePending: "The specified activity cannot be edited because there is a 'Create' operation pending.",
		LE_CannotCreateDataObject_DOTNET: "Could not create new data object instance. Ensure that your data object type has a parameterless constructor. If it does not, assign a delegate to the CreateAppointmentDataObjectCallback property which creates new instances of this type.",
		LE_CannotModifyApppointmentsWhenDataSourceSet: "Operation is not valid while DataSource is in use. Access and modify elements with Scheduler.DataSource instead.",
		LE_CannotSetDataSourceWhenAppointmentsAreDefined: "Appointments collection must be empty before using DataSource.",
		LE_CouldNotConvertColorScheme: "The value '{0}' could not be converted to a ScheduleResourceColorScheme value.",
		LE_CouldNotConvertValue: "The value '{0}' could not be converted to type {1}.",
		LE_CreateDataObjectFailed: "Could not create new data object instance.",
		LE_DataObjectNotAssociated: "The specified data object is not associated with an Appointment.",
		LE_DuplicateIdentifier: "The identifier '{0}' is already in use. Activity/Resource identifiers must be unique.",
		LE_EndEdit_DataObjectAlreadyAssociated: "This data object is already associated with an activity.",
		LE_EndEdit_NotInEditMode: "EndEdit cannot be called on the specified activity because it is not in edit mode. BeginEdit must be called first before an activity edit operation can be committed.",
		LE_InvalidDayOfWeekRule: "The specified day of week rule is invalid.",
		LE_MissingIdentifier: "Missing identifier.",
		LE_NoAppointmentItemsSource: "The AppointmentItemsSource has not been assigned.",
		LE_NoCreateAppointmentDataObjectCallback_JS: "A new data object instance could not be created. You must specify a value for the CreateAppointmentDataObjectCallback property.",
		LE_NoDataObject: "The specified activity's underlying data object does not exist in the item source.",
		LE_NoPropertyMapping_Appointment: "No property mapping exists for Appointment property '{0}'.",
		LE_RecurrenceParsing: "Error parsing recurrence, context: {0}",
		LE_RecurrenceSerializing: "Error serializing recurrence, context: {0}",
		LE_SchedulePropertyMap_Missing: "The following required property mappings were not defined:",
		LE_SchedulePropertyMap_NoPropertyFound: "No public property named '{0}' was found on the underlying data object.",
		LIT_AgendaDayHeader_Today: "Today",
		LIT_AgendaNoEventsMessage: "No Events",
		LIT_AgendaStartTime_AllDay: "all-day",
		LIT_AgendaStartTime_Ends: "Ends",
		RD_And: "et",
		RD_AtTime: "à {0}",
		RD_Effective1: "effectif le {0}",
		RD_Effective2: "effectif du {0} au {1}",
		RD_Effective3: "effectif le {0} de {1} à {2}",
		RD_Effective4: "effectif le {0} à {1}",
		RD_Effective5: "effectif du {0} au {1} à {2}",
		RD_Effective6: "effectif du {0} au {1} de {2} à {3}",
		RD_Every: "tou(te)s les {0} {1}",
		RD_FrequencyLiterals: "année,mois,semaine,jour,heure,minute,seconde",
		RD_FrequencyLiterals2: "annuellement,mensuellement,hebdomadairement,quotidiennement,chaque heure,chaque minute,chaque seconde",
		RD_FrequencyLiteralsPlural: "ans,mois,semaines,jours,heures,minutes,secondes",
		RD_InMonth: "de {0}",
		RD_Last: "dernier",
		RD_NumberSuffix_nd: "nd(e)",
		RD_NumberSuffix_rd: "e",
		RD_NumberSuffix_st: "er(ère)",
		RD_NumberSuffix_th: "e",
		RD_OccurrenceOfThe: "occurrence du",
		RD_OfEveryMinuteOrHour: "de chaque {0}",
		RD_OfTheMonthOrYear: "de l’/du {0}",
		RD_OfTheNthMinuteOrHour: "de la {0} {1}",
		RD_OnEach: "tous les",
		RD_OnEverySecond: "chaque seconde",
		RD_OnThe: "le",
		RD_OnTheNthSecond: "à la {0} seconde",
		RD_Or: "ou",
		RD_OrdinalDayOfMonthUsesSuffix: "true",
		RD_OrdinalNumberWithSuffix: "{0}{1}",
		RD_RecurrenceDescriptionOverallStructure: "Se produit {0}{1},{2}",
		RD_RepeatingMultipleTimes: "répéter {0} fois",
		RD_RepeatingOneTime: "répéter une fois",
		RD_RulesInMonth: "{0} {1}",
		RD_ToTheLast: "au dernier",
		RD_Weekday: "jours ouvrables",
		RD_WeekendDay: "jours de week-end",
		RD_WeekOrDayOfTheMonthOrYear: "{0} {1}"
	});
}));// REMOVE_FROM_COMBINED_FILES
