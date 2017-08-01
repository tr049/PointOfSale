/*!@license
* Infragistics.Web.ClientUI infragistics.documents.core_core.js resources 17.1.20171.1012
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
	$.ig.documentsCore = $.ig.documentsCore || {};
	$.ig.documentsCore.locale = $.ig.documentsCore.locale || {};
	$.extend($.ig.documentsCore.locale, {

		getString: function(name) {
			var str = this[name];
			if (!str) return null;
			if (arguments.length === 1) return str;
			return $.ig.util.stringFormat1(str, Array.prototype.slice.call(arguments, 1));
		},
		LE_ArgumentOutOfRangeException_ValueError: "Invalid {0} value. It must be between {1} and {2}.",
		LE_DocumentEncryptedException_DefaultMessage: "The document is encrypted and must be opened with a password.",
		LE_EncryptionAlgorithmNotSupportedException_DefaultMessage: "The document is encrypted with an unsupported encryption algorithm and cannot be decrypted.",
		LE_FormatException_TypeError: "Incorrect {0} format: {0}.",
		LE_InvalidPasswordException_DefaultMessage: "The password used to open the encrypted document is incorrect."
	});
}));// REMOVE_FROM_COMBINED_FILES
