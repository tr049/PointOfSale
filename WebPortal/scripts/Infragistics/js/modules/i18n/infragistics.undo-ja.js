/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js resources 17.1.20171.1012
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
	$.ig.undo = $.ig.undo || {};
	$.ig.undo.locale = $.ig.undo.locale || {};
	$.extend($.ig.undo.locale, {

		getString: function(name) {
			var str = this[name];
			if (!str) return null;
			if (arguments.length === 1) return str;
			return $.ig.util.stringFormat1(str, Array.prototype.slice.call(arguments, 1));
		},
		AddItemDescription: "'{1}' の追加",
		AddItemDescriptionDetailed: "'{1}' の追加",
		AddRangeDescription: "Add {1} {2}(s)",
		AddRangeDescriptionDetailed: "Add {1} {2}(s)",
		FallbackTransactionDescription: "",
		LE_AddOpenTransaction: "開かれたことがない、または開いている UndoTransaction は追加できません。",
		LE_AddTransactionDirect: "UndoTransaction は追加できません。RootTransaction は自動的に Commit に追加されます。",
		LE_AddUnitWhileTransactionOpen: "トランザクションが入れ子になった開いているトランザクション '{0}' を含む場合、UndoUnit を追加できません。",
		LE_ArgumentIsNegative: " '{0}' は 0 以上である必要があります。現在値: '{1}'",
		LE_CannotExecuteOpenTransaction: "トランザクション '{0}' が開いている間に Execute を呼び出すことはできません。",
		LE_ChangeHistoryInMerge: "Merge が呼び出されている間は Undo/Redo 履歴を変更できません。",
		LE_ChangeHistoryInRemoveAll: "RemoveAll が呼び出されている間は Undo/Redo 履歴を変更できません。",
		LE_ChildTransactionNotInUnits: "指定した子トランザクション '{0}' は、このトランザクション ユニットの一部ではありません。",
		LE_ClosingOtherTransaction: "指定したトランザクション '{0}' は現在開いているトランザクション '{1}' ではありません。 ",
		LE_EndTransactionWhileSuspended: "UndoManager が中断している間はトランザクションを閉じることはできません。",
		LE_EnumEnded: "列挙が完了しました。",
		LE_EnumFailedVersion: "コレクションは列挙子の開始後に変更されました。",
		LE_EnumNotStarted: "列挙子は開始されませんでした。MoveNext を呼び出します。",
		LE_FactoryNullTransaction: "UndoUnitFactory は null Undo トランザクションを返します。",
		LE_HasOpenTransaction: "トランザクションはすでに開いています。",
		LE_HistoryItemNotInCurrentHistory: "UndoManager で、関連づけられた元に戻すまたはやり直しの履歴内にUndoHistoryItem が存在しません。",
		LE_InvalidTransactionOwner: "指定したトランザクションの Owner はこのオブジェクトではありません。",
		LE_NeedAddRemoveAction: "指定するアクションは 'Add' or 'Remove' にしてください。",
		LE_NewTransactionWhileSuspended: "UndoManager が中断している間はトランザクションを開始できません。",
		LE_RangeCollectionAction: "Range アクションはサポートされません。",
		LE_ReferenceNotRegistered: "指定した参照 '{0}' は UndoManager インスタンスに登録されていません。 \r\nRegisterReference メソッドを使用して UndoManager と参照を登録します。または、UndoManager.Current thread 静的/共有インスタンスを使用するために参照として null を渡します。",
		LE_ReferenceRegisteredToOther: "指定した参照 '{0}' は、異なるUndoManager インスタンスで登録されます。",
		LE_RemoveAllFailedVersion: "コレクションは RemoveAll への呼び出し中に変更されました。",
		LE_ResetCollectionAction: "Reset アクションはサポートされません。",
		LE_TargetCollectionIsReadOnly: "指定したコレクション '{0}' は読み取り専用です。",
		LE_TransactionAlreadyOpened: "トランザクションはすでに開いています。",
		LE_TransactionClosed: "トランザクションは閉じられるまで変更できません。",
		LE_TransactionNotOpened: "指定したトランザクション '{0}' は開いていません。",
		LE_TransactionNotStarted: "トランザクションは開始されるまで変更できません。",
		LE_UndoManagerAsReference: "'UndoManager' インスタンスは参照にできません。",
		LE_UndoRedoInRollback: "Rollback 処理中は Undo/Redo を実行できません。",
		LE_UndoRedoInTransaction: "トランザクションが開いているときは Undo/Redo を実行できません。",
		LE_UndoRedoInUndoRedo: "Undo/Redo 処理中は Undo/Redo を実行できません。",
		LE_UndoRedoWhileSuspended: "UndoManager 処理中は Undo/Redo を実行できません。",
		MoveItemDescription: "項目の移動",
		MoveItemDescriptionDetailed: "'{1}' を '{2}' から '{3}' へ移動する",
		PropertyChangeDescription: "'{1}' の '{0}' を変更",
		PropertyChangeDescriptionDetailed: "'{1}' の '{0}' を '{3}' へ変更",
		ReinitializeCollectionDescription: "'{2}' の一括変更",
		ReinitializeCollectionDescriptionDetailed: "'{2}' の一括変更",
		RemoveItemDescription: "'{1}' の移動",
		RemoveItemDescriptionDetailed: "'{1}' の削除",
		RemoveRangeDescription: "{1} {2} の削除",
		RemoveRangeDescriptionDetailed: "{1} {2} の削除",
		ReplaceItemDescription: "'{1}' の置き換え",
		ReplaceItemDescriptionDetailed: "'{1}' を '{2}' と置き換える"
	});
}));// REMOVE_FROM_COMBINED_FILES
