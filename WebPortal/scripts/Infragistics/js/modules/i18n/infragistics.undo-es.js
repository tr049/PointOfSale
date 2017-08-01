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
		AddItemDescription: "Añadir {1}",
		AddItemDescriptionDetailed: "Añadir {1}",
		AddRangeDescription: "Añadir {1} {2}(s)",
		AddRangeDescriptionDetailed: "Añadir {1} {2}(s)",
		FallbackTransactionDescription: "",
		LE_AddOpenTransaction: "Cannot add an UndoTransaction that has not been opened or is still open.",
		LE_AddTransactionDirect: "UndoTransaction cannot be added. The RootTransaction is automatically added upon Commit.",
		LE_AddUnitWhileTransactionOpen: "Cannot add an UndoUnit while the transaction contains a nested open transaction '{0}'.",
		LE_ArgumentIsNegative: "The '{0}' must be 0 or greater. Actual value: '{1}'",
		LE_CannotExecuteOpenTransaction: "Cannot invoke Execute while the transaction '{0}' is open.",
		LE_ChangeHistoryInMerge: "Cannot alter the Undo/Redo history while a Merge is being invoked",
		LE_ChangeHistoryInRemoveAll: "Cannot alter the Undo/Redo history while the RemoveAll is being invoked.",
		LE_ChildTransactionNotInUnits: "The specified child transaction '{0}' is not part of the Units of this transaction.",
		LE_ClosingOtherTransaction: "The specified transaction '{0}' is not the currently open transaction '{1}'.",
		LE_EndTransactionWhileSuspended: "Cannot close a transaction while the UndoManager is suspended.",
		LE_EnumEnded: "The enumerator was completed.",
		LE_EnumFailedVersion: "The collection was modified after the enumerator was started.",
		LE_EnumNotStarted: "The enumerator was not started. Call MoveNext.",
		LE_FactoryNullTransaction: "The UndoUnitFactory returned a null UndoTransaction.",
		LE_HasOpenTransaction: "A transaction has already been opened.",
		LE_HistoryItemNotInCurrentHistory: "The UndoHistoryItem does not exist within the associated Undo or Redo history in the UndoManager.",
		LE_InvalidTransactionOwner: "The specified transaction's Owner is not this object.",
		LE_NeedAddRemoveAction: "The specified action must be 'Add' or 'Remove'.",
		LE_NewTransactionWhileSuspended: "A transaction cannot be started while the UndoManager is suspended.",
		LE_RangeCollectionAction: "Range actions are not supported.",
		LE_ReferenceNotRegistered: "The specified reference '{0}' has not been registered with an UndoManager instance. Use the RegisterReference method to register the reference with an UndoManager or pass null as the 'reference' to use the UndoManager.Current thread static/shared instance.",
		LE_ReferenceRegisteredToOther: "The specified reference '{0}' is registered with a different UndoManager instance.",
		LE_RemoveAllFailedVersion: "The collection was modified during the call to RemoveAll.",
		LE_ResetCollectionAction: "Reset action is not supported.",
		LE_TargetCollectionIsReadOnly: "The specified collection '{0}' cannot be read-only.",
		LE_TransactionAlreadyOpened: "The transaction has already been opened.",
		LE_TransactionClosed: "The transaction cannot be modified once it has been closed.",
		LE_TransactionNotOpened: "The specified transaction '{0}' is not open.",
		LE_TransactionNotStarted: "The transaction cannot be modified until it has been started.",
		LE_UndoManagerAsReference: "An 'UndoManager' instance cannot be a reference.",
		LE_UndoRedoInRollback: "Cannot perform an Undo/Redo while a Rollback is in progress.",
		LE_UndoRedoInTransaction: "Cannot perform an undo/redo while a transaction is opened.",
		LE_UndoRedoInUndoRedo: "Cannot perform an Undo/Redo while an Undo/Redo is in progress.",
		LE_UndoRedoWhileSuspended: "Cannot perform an Undo/Redo while the UndoManager has been suspended.",
		MoveItemDescription: "Mover {1}",
		MoveItemDescriptionDetailed: "Mover {1} de '{2}' a '{3}'",
		PropertyChangeDescription: "Cambiar {0} en {1}",
		PropertyChangeDescriptionDetailed: "Cambiar {0} en {1} a '{2}'",
		ReinitializeCollectionDescription: "Cambio en bloque {2}",
		ReinitializeCollectionDescriptionDetailed: "Cambio en bloque {2}",
		RemoveItemDescription: "Quitar {1}",
		RemoveItemDescriptionDetailed: "Quitar {1}",
		RemoveRangeDescription: "Quitar {1} {2}(s)",
		RemoveRangeDescriptionDetailed: "Quitar {1} {2}(s)",
		ReplaceItemDescription: "Sustituir {1}",
		ReplaceItemDescriptionDetailed: "Sustituir '{1}' por '{2}'"
	});
}));// REMOVE_FROM_COMBINED_FILES
