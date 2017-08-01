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
		LE_ArgumentOutOfRangeException_ValueError: "無効な {0} 値です。値は {1} と {2} の間である必要があります。",
		LE_DocumentEncryptedException_DefaultMessage: "文書は暗号化されているため、パスワードで開く必要があります。",
		LE_EncryptionAlgorithmNotSupportedException_DefaultMessage: "文書はサポートされていない暗号化アルゴリズムで暗号化されているため、暗号化の解除を実行できません。",
		LE_FormatException_TypeError: "無効な {0} 形式: {0}。",
		LE_InvalidPasswordException_DefaultMessage: "暗号化された文書を開くためのパスワードが無効です。"
	});
}));// REMOVE_FROM_COMBINED_FILES
