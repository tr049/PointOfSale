﻿/*!@license
* Infragistics.Web.ClientUI infragistics.excel_core.js resources 17.1.20171.1012
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
	$.ig.excel = $.ig.excel || {};
	$.ig.excel.locale = $.ig.excel.locale || {};
	$.extend($.ig.excel.locale, {

		getString: function(name) {
			var str = this[name];
			if (!str) return null;
			if (arguments.length === 1) return str;
			return $.ig.util.stringFormat1(str, Array.prototype.slice.call(arguments, 1));
		},
		DefaultTotalLabel: "合計",
		Error_AnchoredReference: "非固定参照として {0} へアクセスしてください。",
		Error_ExplicitThis: "{0} - 明示的にサポートされていません。",
		Error_ExternalRange: "範囲は外部参照を含んでいます。",
		Error_FormulaNotSupported: "{0} - 数式をサポートしない参照中の数式にアクセスしました。",
		Error_Internal: "{0} で内部エラーが発生しました。",
		Error_InvalidFunction: "{1} の無効な関数 '{0}'。",
		Error_InvalidFunctionArgCountTooFew: "{1} で参照される関数 '{0}' の引数の数が正しくありません。この関数には少なくとも {2} 個の引数が必要です。",
		Error_InvalidFunctionArgCountTooMany: "{1} で参照される関数 '{0}' の引数の数が正しくありません。設定できる引数の数は {2} つまでです。",
		Error_InvalidNumberSystemDigit: "{2} 進法の記数法で値 {1} の {0} 桁が無効です。",
		Error_InvalidOperand: "無効なオペランド",
		Error_InvalidOperatorArgCount: "関数「{0}」は、{1} の引数を許可する必要があります。",
		Error_InvalidReference: "無効または利用できない参照",
		Error_Location: "行: {0}  列: {1}",
		Error_MethodNotSupported: "{0}は{1}をサポートしません。",
		Error_NoCurrentRangeElement: "現在の範囲要素はありません。",
		Error_NullFunctionResult: "「{0}」は Null 値を返しました。",
		Error_NullOperand: "Null オペランド",
		Error_ParseRef: "不明な参照が {0} にあります。",
		Error_RangeFromLast: "fromT.Last が設定されていません。",
		Error_RangeFromNull: "参照範囲: 開始がありません。",
		Error_RangeFromRefBase: "参照範囲: 開始が参照ベースではありません。 {0}",
		Error_RangeLast: "参照範囲 Validate: 最後のタプル [{0}] != [{1}]",
		Error_RangeNormalizeScope: "参照範囲 Normalize: 不正な範囲 [{0}/{1}]",
		Error_RangeToNull: "参照範囲: 終了がありません。",
		Error_RangeToRefBase: "参照範囲: 終了は参照ベースではありません。 {0}",
		Error_RangeTuple: "参照範囲 Validate: タプル [{0}] !=  [{1}]",
		Error_RangeValidateCount: "参照範囲 Validate: 開始 {0} の個数 != 終了 {1} の個数",
		Error_ReadOnlyReference: "{0} - 読み出し専用の参照で値を設定しようとしました。",
		Error_ReferenceNotEumerable: "{0}は計算可能な参照ではありません。",
		Error_RefMalformed: "{0} - 参照が異常です  {1}",
		Error_RP_ContainsBase: "RefParser.Contains - ベースが空です。",
		Error_RP_ContainsTarget: "RefParser.Contains - ターゲットが空です。",
		Error_RP_EmptyElement: "不正な参照 {0}。 位置 {1} で空の要素が見つかりました。",
		Error_RP_EmptyReference: "不正な参照 {0}。 参照は空です。",
		Error_RP_MalformedExtra: "RefParser 不正参照: [{1}] で [{0}] の重複があります。",
		Error_RP_MalformedUnexpected: "RefParser 不正参照: [{1}] で 予期しない [{0}] があります。",
		Error_RP_MergeRelativeBase: "RefParser.Merge: ベースが相対的です。",
		Error_RP_MissingCloseParenthesis: "不正な参照 {0}。 括弧が閉じられていません。",
		Error_RP_MissingEndQuotes: "不正な参照 {0}。 終了引用符がありません。",
		Error_RT_Expected: "RefTuple: [{1}] では [{0}] が予測されます。",
		Error_RT_InvalidScope: "無効な範囲: {0}.",
		Error_RT_InvalidScope_CharactersAfterClosingQuotes: "位置{1}で{0}範囲のダブルクォーテーションを閉じた後に文字が見つかりました。",
		Error_RT_InvalidTuple_CharactersAfterScopeEnd: "不正な要素 {0}。 スコープの末尾で文字が見つかりました。",
		Error_RT_InvalidTuple_MissingCloseParenthesis: "不正な要素 {0}。 括弧が閉じられていません。",
		Error_RT_InvalidTuple_MissingEndQuotes: "不正な要素 {0}。 終了引用符がありません。",
		Error_RT_InvalidTuple_NamePortionEmpty: "不正な要素 {0}。 エレメント名部分が空です。",
		Error_RT_InvalidTuple_ScopeIndexLarge: "不正な要素 {0}。 インデックス {1} が無効: {2}。",
		Error_RT_InvalidTuple_UnescapedCharacter: "位置{2}の{1}の中で文字 {0} が見つかりました。",
		Error_RT_NullRefName: "RefTuple: null RefName",
		Error_RT_Unexpected: "RefTuple: [{1}] に予測しない [{0}]。",
		Error_ScopeAllNotLast: "{0} - Scope.All は最後のエレメント {1} で指定する必要があります。",
		Error_UCErrorCode_Div: "0（ゼロ）で割りました",
		Error_UCErrorCode_Fail: "失敗",
		Error_UCErrorCode_NA: "適用できません",
		Error_UCErrorCode_Name: "無効な名前",
		Error_UCErrorCode_Null: "Null値",
		Error_UCErrorCode_Num: "関数または数式中の無効な値",
		Error_UCErrorCode_Ok: "成功",
		Error_UCErrorCode_Reference: "無効または利用できない参照",
		Error_UCErrorCode_Unknown: "無効なコード",
		Error_UCErrorCode_Value: "不正な引数またはオペランド",
		Error_UnexpectedScope: "{0} - 特定できない範囲 {1}",
		Error_UnknownRange: "未定義範囲のタイプ",
		Error_UnknownRefType: "{0} - 未定義 参照タイプ  {1}",
		Error_UnknownScope: "{0} - 未定義範囲  {1}",
		Error_UnresolvedExternal: "未解決の外部参照",
		GenerateTableColumnName: "列",
		GenerateTableName: "テーブル",
		LE_ArgumentException_AnchorCellFromOtherWorksheet: "指定されたセルは同じワークシート上に存在しません。",
		LE_ArgumentException_ArrayFormulaMustHaveSingleRegion: "公式配列は1つのセル領域にのみ割り当てが可能です。",
		LE_ArgumentException_ArrayTooSmall: "配列にすべての値をコピーできる十分なサイズがありません。",
		LE_ArgumentException_CannotAddStandardTableStyle: "標準のテーブル スタイルを CustomTableStyleCollection に追加できません。",
		LE_ArgumentException_CannotApplyDVRuleToTotalCell: "指定した参照の 1 つ以上のセルはテーブルの合計セルです。データ検証ルールを適用できません。",
		LE_ArgumentException_CannotCreateEmptyColorInfo: "空の色は WorkbookColorInfo インスタンスを作成するために使用できません。",
		LE_ArgumentException_CellMustBeOnSameWorksheetAsReferencesCollection: "セルは参照コレクションと同じワークシート上にある必要があります。",
		LE_ArgumentException_CellShiftedOffWorksheet: "セルが削除されたか、ワークシート以外に移動されたため、有効なワークシートの位置を表しません。",
		LE_ArgumentException_CellsInTableFromOtherWorksheet: "指定された領域がデータテーブルと同じワークシートにありません。",
		LE_ArgumentException_CellValueStringLength: "セルに割り当てられた文字の値は、{0} 以上の長さにできません。",
		LE_ArgumentException_ColumnFormulaAlreadyAppliedToCell: "数式はすでにセルに適用されています。列数式として使用するには、クローンを作成します。",
		LE_ArgumentException_ColumnFromDifferentWorksheet: "列はこのコレクションと同じワークシートに属しません",
		LE_ArgumentException_ColumnInputCellFromOtherWorksheet: "指定されたコラム入力セルはデータテーブルと同じワークシートに存在しません。",
		LE_ArgumentException_ColumnRemovedFromWorksheet: "列がワークシートから削除されました。",
		LE_ArgumentException_ColumnsToRepeatAtLeftOutsideRange: "範囲はワークシートの利用可能な列の範囲以外です。",
		LE_ArgumentException_CommentTooLong: "コメントの最大文字数は 255 文字です。",
		LE_ArgumentException_CustomViewNameAlreadyExists: "カスタムビュー名{0}は既に存在します。",
		LE_ArgumentException_DefaultTableStyleNotInWorkbook: "指定したテーブル スタイルは CustomTableStyles または StandardTableStyles コレクションにありません。",
		LE_ArgumentException_DisplayTextTooLong: "ハイパーリンクのテキストは 256 文字以下にしてください。",
		LE_ArgumentException_DuplicateDisplayValue: "指定した表示値は既にコレクションにあります。",
		LE_ArgumentException_DuplicateFixedDateGroup: "指定した FixedDateGroup は既にコレクションにあります。",
		LE_ArgumentException_DuplicateTableStyle: "指定したスタイルは既に CustomTableStyleCollection にあります。",
		LE_ArgumentException_DuplicateTableStyleName_Existing: "指定した名前は既にコレクションの他のスタイルの名前に使用されています。",
		LE_ArgumentException_DuplicateTableStyleName_New: "指定したスタイルの名前は既にコレクションの他のスタイルの名前に使用されています。",
		LE_ArgumentException_DuplicateWorksheetProtectedRangeTitle: "'{0}' の名前の範囲は既に存在します。",
		LE_ArgumentException_DV_ArrayFormulaCannotBeUsed: "ArrayFormula を {0} として適用できません。",
		LE_ArgumentException_DV_CellFromOtherWorksheet: "セルはデータ検証ルールと同じワークシートに属しません。",
		LE_ArgumentException_DV_ConstraintFormulaMustBeNumberOrReference: "{0} は数、数式、または単一のセルへの参照に設定する必要があります。",
		LE_ArgumentException_DV_FormulaCannotBeNull: "データ検証ルールをワークシートに適用されているときに、{0} は null 値に設定できません。",
		LE_ArgumentException_DV_FormulaCannotFindNamedReference: "{0} は Workbook に存在しない名前付き参照を含みます。",
		LE_ArgumentException_DV_FormulaCannotFindWorksheetReference: "{0} は Workbook に存在しないワークシート上の参照を含みます。",
		LE_ArgumentException_DV_FormulaCannotReferenceOtherWorkbook: "{0} は外部の Workbook への参照を含むことができません。",
		LE_ArgumentException_DV_FormulaInvalidForWorkbookFormat: "{0} は {1} ワークブック形式で無効なセルを参照します。",
		LE_ArgumentException_DV_InvalidAddress: "指定したアドレスは有効なセル アドレスまたは領域アドレスではありません。",
		LE_ArgumentException_DV_InvalidExcelDate: "指定した日付は Excel に表すことができません。",
		LE_ArgumentException_DV_InvalidFormula: "無効な数式がデータ入力規則で使用されました。",
		LE_ArgumentException_DV_InvalidMessageLength: "{0} は、{1} 文字以上にできません。",
		LE_ArgumentException_DV_ListFormulaCannotHaveEmptyString: "ValuesFormula の文字列定数は空の文字列にできません。",
		LE_ArgumentException_DV_ListFormulaMustBeStringOrReference: "ValuesFormula は文字列定数または同じ Workbook の単一セルまたは領域への参照に設定する必要があります。",
		LE_ArgumentException_DV_ListFormulaReferenceMustBeOneDimensional: "ValuesFormula は複数行および列がある領域参照を含みます。領域は 1 つの行または 1 つの列のみを含むことができます。",
		LE_ArgumentException_DV_LowerGreaterThanUpperContraint: "下制限の値は上制限の値以下に設定する必要があります。",
		LE_ArgumentException_DV_MustHaveOneAcceptedValue: "1 つ以上の値を有効な値として指定する必要があります。",
		LE_ArgumentException_DV_ReferencesAlreadyContainDVs: "指定した参照は既に 1 つ以上のデータ検証ルールを含みます。",
		LE_ArgumentException_DV_ReferencesFromOtherWorksheet: "参照コレクションはデータ検証ルールと同じワークシートに属しません。",
		LE_ArgumentException_DV_RegionFromOtherWorksheet: "領域はデータ検証ルールと同じワークシートに属しません。",
		LE_ArgumentException_DV_RuleAppliedOnOtherWorksheet: "データ検証ルールは既に他のワークシートに適用されています。",
		LE_ArgumentException_DV_UpperLessThanLowerContraint: "上制限の値は下制限の値以上に設定する必要があります。",
		LE_ArgumentException_EditRangeAlreadyOwned: "範囲は既にワークシートの AllowedEditRanges にあります。",
		LE_ArgumentException_EditRangeHasRangeFromOtherWorksheet: "編集範囲の範囲は AllowedEditRanges の範囲と異なり、別のワークシートからのものです。",
		LE_ArgumentException_EmptyCustomList: "リストに 1 つ以上の文字列が必要です。",
		LE_ArgumentException_EndIndexLessThanZero: "範囲の終了制限は 0 以上である必要があります。",
		LE_ArgumentException_FileDoesntContainsWorkbookStream: "指定したファイル名、ストリームに有効なワークブックがありません。",
		LE_ArgumentException_FormulaReferencesInvalidCells: "指定された数式は、ワークブックの現在のファイル フォーマットでサポートされていないセルを参照します。",
		LE_ArgumentException_HashSetFull: "ハッシュ セットに項目が多すぎます。",
		LE_ArgumentException_HyperlinkAlreadyOwned: "ハイパーリンクはすでにハイパーリンク コレクションに属しています。",
		LE_ArgumentException_HyperlinkSourceFromOtherWorksheet: "ハイパーリンクにソース セルまたはことなるワークシートの領域があります。",
		LE_ArgumentException_HyperlinkTargetFromOtherWorkbook: "ターゲットがハイパーリンクのオーナーではなく、他のワークシートのものです。",
		LE_ArgumentException_InfiniteColumnWidth: "列の幅を無限大に設定することはできません。",
		LE_ArgumentException_Interval: "Interval パラメーターを DateInterval 列挙値の 1 つに設定する必要があります。",
		LE_ArgumentException_IntervalStr: "Interval パラメーターを DateInterval 列挙値に変換できませんでした。",
		LE_ArgumentException_InvalidCellAddress: "指定したアドレスは有効なセル アドレスではありません。",
		LE_ArgumentException_InvalidCommentPositioningMode: "DontMoveOrSizeWithCell および MoveAndSizeWithCells の ShapePositioningMode はコメントシェイプのみに適用できます",
		LE_ArgumentException_InvalidCustomFilterOperandNumber: "値は無限大または NaN にできません。",
		LE_ArgumentException_InvalidCustomFilterOperator: "比較演算子値が文字列ではない場合、比較演算子は BeginsWith、DoesNotBeginWith、Contains、DoesNotContain、EndsWith、または DoesNotEndWith に設定できません。",
		LE_ArgumentException_InvalidDatePeriodFilterValue: "値は範囲以外です。Month のフィルター タイプは 1 ~ 12 に設定します。Quarter のフィルター タイプは 1 ~ 4 に設定します。",
		LE_ArgumentException_InvalidDpi: "指定した Dpi 値は無効です。",
		LE_ArgumentException_InvalidExcelDate: "値は Excel で日付として表現できません。",
		LE_ArgumentException_InvalidFileFormat: "無効または認識されないファイル フォーマットです。",
		LE_ArgumentException_InvalidFormula: "指定された公式が無効です。",
		LE_ArgumentException_InvalidGradientStopColor: "自動色とシステム色はグラデーション境界で使用できません。",
		LE_ArgumentException_InvalidNamedReferenceName: "その名前は参照名としてふさわしくありません。",
		LE_ArgumentException_InvalidPaletteColor_EmptyOrSystem: "空またはシステム色をパレットに追加できません。",
		LE_ArgumentException_InvalidPaletteColor_NonOpaque: "不透明な色のみをパレットに追加できます。",
		LE_ArgumentException_InvalidReferencesString: "参照値の書式設定は無効です。",
		LE_ArgumentException_InvalidRegionAddress: "指定したアドレスは有効な領域アドレスではありません。",
		LE_ArgumentException_InvalidRowOrColumnRange: "WorksheetImage の画像は、すでに破棄されているか無効です。",
		LE_ArgumentException_InvalidTarget: "ハイパーリンク ターゲットは、文字列、WorksheetCell、 WorksheetRegion、または NamedReference にする必要があります。",
		LE_ArgumentException_InvalidTopOrBottomFilterValue: "値は 1 と 500 の間である必要があります。",
		LE_ArgumentException_InvalidWorksheetName: "ワークシート名に次の文字は使用できません:\r\n\t\t: \\ / ? * [ ]",
		LE_ArgumentException_InvalidWorksheetNameStartingQuote: "ワークシート名は単一引用符で開始できません。",
		LE_ArgumentException_LessThanTwoGradientStops: "グラデーションの境界を 2 つ以上指定する必要があります。",
		LE_ArgumentException_NamedReferenceNameTooLong: "名前参照名は最大で 255 文字までです。",
		LE_ArgumentException_NaNDefaultColumnWidth: "デフォルト列の幅を NAN に設定することができません。",
		LE_ArgumentException_NewTableRegionCannotMoveHeaders: "新しいテーブル領域のヘッダーを新しい行へ移動できません。",
		LE_ArgumentException_NewTableRegionFromWrongWorksheet: "指定された領域はデータテーブルと同じワークシートにありません。",
		LE_ArgumentException_NewTableRegionMustHaveDataRows: "新しいテーブル領域に少なくともデータ行を 1 行含む必要があります。",
		LE_ArgumentException_NewTableRegionOverlapOld: "新しいテーブル領域は、前のテーブル領域と重なる必要があります。",
		LE_ArgumentException_NewTableRegionOverlapsBlockingValue: "テーブルが複数セル配列式またはデータテーブルを含むため、指定した領域にサイズ変更できません。",
		LE_ArgumentException_NewTableRegionOverlapsMergedRegion: "テーブルが結合セルを含むため、指定した領域にサイズ変更できません。",
		LE_ArgumentException_NewTableRegionOverlapsOtherTable: "テーブルが他のテーブルを含むため、指定した領域にサイズ変更できません。",
		LE_ArgumentException_NoRegionsInArray: "指定された配列に領域がありません。",
		LE_ArgumentException_NotEnum: "タイプ '{0}' は列挙型ではありません。",
		LE_ArgumentException_NotSupportedCodePage: "コード ページはサポートされていません。",
		LE_ArgumentException_NPer: "nPer を 0 に設定することができません。",
		LE_ArgumentException_NPerFunction: "NPer 関数のパラメーターは正しくありません。",
		LE_ArgumentException_PA_PrintAreasCannotOverlap: "指定した印刷領域は既存の印刷領域と重複します。",
		LE_ArgumentException_ParentStyleFromOtherWorkbook: "指定したスタイルはセル書式と同じワークブックから取得されません。",
		LE_ArgumentException_PB_CantInsertBreakAtIndex: "このコレクションはインデックスに項目を挿入することをサポートしません。",
		LE_ArgumentException_PB_CantSetBreakAtIndex: "このコレクションはインデックスに項目を設定することをサポートしません。",
		LE_ArgumentException_PB_MustBeWithinPrintArea: "改ページは印刷領域内にする必要があります。",
		LE_ArgumentException_PB_PageBreakCantBeA1Cell: "ワークシートの左上に改ページを挿入することができません。",
		LE_ArgumentException_PB_PageBreakCantBeBeforeLeftColumn: "ワークシートの左に改ページを挿入することができません。",
		LE_ArgumentException_PB_PageBreakCantBeBeforeTopRow: "ワークシートの上に改ページを挿入することができません。",
		LE_ArgumentException_PB_PageBreaksCannotOverlap: "改ページはワークシートの他の改ページと重複することができません。",
		LE_ArgumentException_PB_PrintAreaMustBeInPrintAreas: "改ページは PrintAreas コレクションに含まれていない印刷領域にあります。",
		LE_ArgumentException_PB_PrintAreaMustBeOnSameWorksheet: "改ページの印刷領域は改ページコレクションと同じワークシートにありません。",
		LE_ArgumentException_Pmt: "Pmt を 0 に設定することができません。",
		LE_ArgumentException_PrintAreaShiftedOffWorksheet: "改ページはワークシート以外の印刷範囲に移動されました。セル範囲が無効です。",
		LE_ArgumentException_RangeFromOtherWorksheetThanProtectedRange: "指定した範囲は、編集範囲が属するワークシートのものではなく別のワークシートのものです。",
		LE_ArgumentException_RegionMustBeOnSameWorksheetAsReferencesCollection: "領域は参照コレクションと同じワークシート上である必要があります。",
		LE_ArgumentException_RegionsFromMixedWorksheets: "配列の指定されたすべての領域は同じワークシートにある必要があります。",
		LE_ArgumentException_RegionShiftedOffWorksheet: "領域がワークシート以外に移動されました。有効なセルの範囲は無効です。",
		LE_ArgumentException_RegionsShiftedOffWorksheet: "1 つ以上の指定領域がワークシート以外に移動されました。有セルの範囲は無効です。",
		LE_ArgumentException_RowFromDifferentWorksheet: "行はコレクションとして同じワークシートに在りません。",
		LE_ArgumentException_RowInputCellFromOtherWorksheet: "指定された行入力セルはデータテーブルとして同じワークシートに存在しません。",
		LE_ArgumentException_RowRemovedFromWorksheet: "列がワークシートから削除されました。",
		LE_ArgumentException_SelectedWorksheetFromOtherWorkbook: "ワークシートはウィンドウオプションの関連のあるワークブックに属していません。",
		LE_ArgumentException_ShapeCannotBeAdded: "指定されたシェイプをシェイプコレクションに追加できません。",
		LE_ArgumentException_SourceFromOtherWorksheetThanHyperlink: "指定したソース セルまたは領域は、ハイパーリンクではなく他のワークシートのものです。",
		LE_ArgumentException_StartIndexLessThanZero: "範囲の開始制限は 0 以上である必要があります。",
		LE_ArgumentException_StyleNameAlreadyExists: "スタイル名 {0}は既にワークブックにあります。",
		LE_ArgumentException_StyleNameTooLong: "スタイル名は、255 文字以上にできません。",
		LE_ArgumentException_TableColumnRemovedFromTable: "表の列が表から削除されました。",
		LE_ArgumentException_TableStyleFromOtherWorkbook: "指定した WorksheetTableStyle はテーブルと同じワークブックに属しません。",
		LE_ArgumentException_TargetTooLong: "ハイパーリンクのターゲット アドレスは 256 文字以下にしてください。",
		LE_ArgumentException_TextLengthGreaterThanMax: "図形またはコメント内のテキストの長さは {0} 以上にできません。",
		LE_ArgumentException_ToolTipTooLong: "ハイパーリンクのツールチップは 256 文字以下にしてください。",
		LE_ArgumentException_TopLeftWindowBounds: "ウィンドウの Left、Top は -32768 と 32767 に設定する必要があります",
		LE_ArgumentException_WeekdayFirst: "WeekdayFirst パラメーターの値は FirstDayOfWeek.System と FirstDayOfWeek.Saturday の間でなければなりません。",
		LE_ArgumentException_WidthHeightWindowBounds: "ウィンドウの幅と高さは 0 から 65535 の間に設定する必要があります",
		LE_ArgumentException_WorksheetNameAlreadyExists: "ワークシート名 {0} 既にワークブックにあります。",
		LE_ArgumentException_WorksheetNameTooLong: "ワークシート名の文字数は、1 ～ 31 文字の間でなければなりません。",
		LE_ArgumentException_WorksheetProtectedRangeTitleTooLong: "編集範囲の名前は 256 文字以下にしてください。",
		LE_ArgumentException_WorksheetScopeFromOtherWorkbook: "ワークシートはこのコレクションと同じワークブックに属しません。",
		LE_ArgumentNullException_AnchorCell: "シェイプがワークシートもしくはグループに存在する場合はセルをNullにすることは出来ません。",
		LE_ArgumentNullException_CustomViewName: "カスタム ビュー名は Null に出来ません",
		LE_ArgumentNullException_Encoder: "画像エンコーダーは null 値に設定できません。",
		LE_ArgumentNullException_FindNamedReference: "検索の名前は Null に出来ません。",
		LE_ArgumentNullException_FormulaCantBeNull: "名前参照の公式は Null にできません。",
		LE_ArgumentNullException_HiddenColumn: "Null の列をコレクションに追加できません",
		LE_ArgumentNullException_HiddenRow: "Null 行はコレクションに追加できません。",
		LE_ArgumentNullException_Image: "Image は Null にできません。",
		LE_ArgumentNullException_NamedReferenceNameCantBeNull: "名前参照名は Null にできません。",
		LE_ArgumentNullException_SaveStream: "Null ストリームにワークブックを保存できません。",
		LE_ArgumentNullException_SelectedWorksheet: "ワークブックに有効な選択されたワークシートが必要です。",
		LE_ArgumentNullException_Shape: "Null シェイプはコレクションに追加できません",
		LE_ArgumentNullException_SourceFont: "ソースフォントは Null に出来ません",
		LE_ArgumentNullException_SourceFormatting: "ソースフォーマットは Null に出来ません",
		LE_ArgumentNullException_StyleName: "スタイル名を Null にできません。",
		LE_ArgumentNullException_UnformattedString: "フォーマットされていない文字列は Null にすることは出来ません",
		LE_ArgumentNullException_Workbook: "ワークブックは Null にできません",
		LE_ArgumentNullException_WorkbookRequiredToResolveThemeColor: "テーマ色を解決するために、ワークブックを指定する必要があります。",
		LE_ArgumentNullException_WorksheetName: "ワークシート名を null または空にできません。",
		LE_ArgumentNullException_WorksheetProtectedRangeTitleCantBeNull: "編集範囲の名前は null または空にできません。",
		LE_ArgumentNullException_WorksheetScope: "ワークシートスコープは Null に出来ません。",
		LE_ArgumentOutOfRangeException_AnchorPosition: "設定された位置のパーセントが有効値 0 から 100 間にありません。",
		LE_ArgumentOutOfRangeException_BadInsertIndex: "指定したインデックスは、0 以上で依存段落の数以下である必要があります。",
		LE_ArgumentOutOfRangeException_BadRemoveAtIndex: "インデックスは、0 以上で書式付き文字列の段落の数以下である必要があります。",
		LE_ArgumentOutOfRangeException_CollectionIndex: "インデックスが範囲にありません。 整数かつコレクションサイズ以下でなければなりません。",
		LE_ArgumentOutOfRangeException_ColumnWidth: "列幅は0から65535に設定する必要があります",
		LE_ArgumentOutOfRangeException_DefaultColumnWidth: "列幅の初期値は０から６５５３５です",
		LE_ArgumentOutOfRangeException_DefaultFontHeight: "フォントの高さは 20 から 8180 で設定する必要があります。",
		LE_ArgumentOutOfRangeException_DefaultRowHeight: "行の高さは -1 から 8192 の間に設定する必要があります。",
		LE_ArgumentOutOfRangeException_DuplicateItemSorted: "指定した項目に並べ替え条件が既に適用されています。",
		LE_ArgumentOutOfRangeException_FirstVisibleTabIndex: "最初のタブインデックスは 0 もしくは 0 以上である必要があります。",
		LE_ArgumentOutOfRangeException_FontHeight: "フォントの高さは 20 から 8180 で設定する必要があります。",
		LE_ArgumentOutOfRangeException_GroupAddedToSelf: "グループをそれ自身に追加することはできません。",
		LE_ArgumentOutOfRangeException_Indent: "インデントレベルは 0 から 250 の間に設定する必要があります。",
		LE_ArgumentOutOfRangeException_IndexNegative: "インデックスは正の整数である必要があります。",
		LE_ArgumentOutOfRangeException_InvalidCollectionIndex: "指定したインデックスはコレクションに無効です。",
		LE_ArgumentOutOfRangeException_InvalidColorInfoTint: "濃淡値は -1.0 と 1.0 の間である必要があります。",
		LE_ArgumentOutOfRangeException_InvalidColumnCount: "{0}は有効な列カウントではありません。 値は {1} と {2}の間にある必要があります。",
		LE_ArgumentOutOfRangeException_InvalidColumnIndex: "現在のフォーマットでは、{0} は有効な列インデックスではありません。 値は {1} と {2}の間にある必要があります。",
		LE_ArgumentOutOfRangeException_InvalidGradientStopOffset: "グラデーション境界オフセットは 0.0 と 1.0 の間である必要があります。",
		LE_ArgumentOutOfRangeException_InvalidRelativeRectangleValueForGradient: "四角形グラデーションの内部四角形の値は 0.0 と 1.0 の間である必要があります。",
		LE_ArgumentOutOfRangeException_InvalidRemoveAtIndex_SortConditions: "並べ替え条件を解除するインデックスが範囲外です。",
		LE_ArgumentOutOfRangeException_InvalidRowCount: "現在のフォーマットでは、{0}は有効な行カウントではありません。 値は {1} と {2}の間にある必要があります。",
		LE_ArgumentOutOfRangeException_InvalidRowIndex: "現在のフォーマットでは、{0} は有効な行インデックスではありません。  {1} から {2} である必要があります。",
		LE_ArgumentOutOfRangeException_InvalidTableStyleAreaStripeExtent: "{0} は 1 ~ 9 である必要があります。",
		LE_ArgumentOutOfRangeException_LeftPaneWidth: "{0}と{1}の有効枠の外に幅が指定した枠があります。",
		LE_ArgumentOutOfRangeException_LengthMustBePositive: "長さは 0 以上に設定する必要があります",
		LE_ArgumentOutOfRangeException_MagnificationLevel: "表示倍率は 10 から 400 までです",
		LE_ArgumentOutOfRangeException_Margins: "マージンは 0 以上 100 以下に設定してください。",
		LE_ArgumentOutOfRangeException_MaxPagesHorizontally: "最大ページ数は 0 から 32767 の間にある必要があります。",
		LE_ArgumentOutOfRangeException_MaxPagesVertically: "最大ページ数は 0 から 32767 です。",
		LE_ArgumentOutOfRangeException_MaxRecursionIterations: "最大再帰は１から 32767 の間に設定する必要があります。",
		LE_ArgumentOutOfRangeException_MaxSortConditions: "コレクションで {0} より大きい並べ替え条件を設定できません。",
		LE_ArgumentOutOfRangeException_NegativeStartIndex: "開始インデックスはマイナス値に出来ません。",
		LE_ArgumentOutOfRangeException_NumberOfCopies: "コピー数は1 から 65535 の間で設定できます。",
		LE_ArgumentOutOfRangeException_Per: "per 値は 0 と nPer + 1 の間でなければなりません。",
		LE_ArgumentOutOfRangeException_Rate: "Rate 値はを -1 以上に設定してください。",
		LE_ArgumentOutOfRangeException_Resolution: "リゾルーションは 0 から 65535 の間にある必要があります。",
		LE_ArgumentOutOfRangeException_RowHeight: "行の高さは 0 から 8192 です",
		LE_ArgumentOutOfRangeException_ScalingFactor: "スケール値は 0 から 400 までです。",
		LE_ArgumentOutOfRangeException_StartPageNumber: "開始ページは -32765 から 32767の間に設定する必要があります。",
		LE_ArgumentOutOfRangeException_TabBarWidth: "タブバー幅は 0 から 1000 の間にある必要があります。",
		LE_ArgumentOutOfRangeException_TopPaneHeight: "枠の高さが {0} と {1}の外にあります。",
		LE_Biff8SerializerNotLoaded: "'{0}’ 形式は、読み込まれないシリアライザーが必要です。JavaScript では infragistics.excel_serialization_biff8.js ファイルに含まれます。",
		LE_ColumnsToRepeatAtLeftAreOutsideAvailableRange: "印刷オプションは左に繰り返す列を含みます。その列は、新しい形式の利用可能な列の範囲以外です。",
		LE_FormatLimitError_Indent: "Indent は、現在のフォーマットで提供される {0} の最大値を超えています。",
		LE_FormatLimitError_MacroWorkbook: "ワークブックに VBA コードがあるので、マクロが使用できるワークブックとして保存できません。",
		LE_FormatLimitError_MaxColumnIndex: "{0} の列インデックスは、指定されたフォーマットでサポートされる最大 {1} より大きいです。",
		LE_FormatLimitError_MaxRowIndex: "{0} 行のインデックスは、このフォーマットでサポートされている 最大 {1} を超えています。",
		LE_FormulaParseException_ArrayContainsConstants: "配列は式のみ格納することが可能です。",
		LE_FormulaParseException_ArrayHasEmptyFirstRow: "公式の配列の最初の項目がありません",
		LE_FormulaParseException_ArrayHasMisalignedRows: "公式の配列に調整されていない行があります。すべての行に同じ数の列が存在している必要があります。",
		LE_FormulaParseException_CellReferenceAfterWorkbookName: "外部ワークブック参照は名前での参照がひつようです。",
		LE_FormulaParseException_ExtraExpressions: "公式の終わり以降に余分な表現があります。",
		LE_FormulaParseException_FunctionMissingClosingParen: "閉じ括弧がありません。",
		LE_FormulaParseException_FunctionNestingTooDeep: "公式にある関数は他の関数で深く入れ子にされすぎています。",
		LE_FormulaParseException_IncorrectNumberOfArguments: "公式の引数が足りません。",
		LE_FormulaParseException_InvalidArguments: "公式の引数が間違っています。",
		LE_FormulaParseException_InvalidErrorValue: "指定したエラータイプが無効です。　以下のどれかを設定する必要があります：\"#NULL!\", \"#DIV/0!\", \"#VALUE!\", \"#REF!\", \"#NAME?\", \"#NUM!\",または \"#N/A\"",
		LE_FormulaParseException_InvalidFileNameInBrackets: "名前が有効ではありません。",
		LE_FormulaParseException_InvalidStructuredTableReference: "構造されたテーブル参照は無効です。",
		LE_FormulaParseException_InvalidWorkbookName: "ワークブック参照に無効なワークブック名が指定されています。",
		LE_FormulaParseException_InvalidWorksheetName: "ワークシート名が有効ではありません。",
		LE_FormulaParseException_Message_PortionWithError: "{0}に間違いがあります。",
		LE_FormulaParseException_MissingArgumentAfterBinary: "公式のバイナリ演算子のオペランドがありません。",
		LE_FormulaParseException_MissingArgumentAfterParen: "挿入句の後に式がありません。",
		LE_FormulaParseException_MissingArgumentAfterUnary: "公式の単項演算子は有効な式ではありません。",
		LE_FormulaParseException_MissingArgumentBeforeBinary: "公式の 2 項演算子のオペランドがありません",
		LE_FormulaParseException_NamedReferenceRefsNeedSheetName: "名前参照公式のすべてのセル参照はワークシートを特定する必要があります。",
		LE_FormulaParseException_NoElementAfterArraySerapator: "公式の要素分離符の後に配列の要素がありません。",
		LE_FormulaParseException_NoEqualsSign: "公式は＝で始まる必要があります。",
		LE_FormulaParseException_NoExclamationAfterWorkbookName: "ワークシート参照にはエクスクラメーションが必要です。",
		LE_FormulaParseException_NoExclamationAfterWorksheetName: "ワークシート参照にはエクスクラメーションが必要です。",
		LE_FormulaParseException_NoExpressions: "有効な演算子が＝の後にありません。",
		LE_FormulaParseException_NoFileNameAfterBracket: "有効なファイル名が角括弧の後に必要です。",
		LE_FormulaParseException_NoValidTermAfterWorkbookName: "外部ワークブック参照は名前参照に従う必要があります。",
		LE_FormulaParseException_NoValidTermAfterWorksheetName: "ワークシート参照はセルもしくは名前参照に従う必要があります。",
		LE_FormulaParseException_NoWorksheetAfterWorkbookName: "ワークシート名は角括弧のワークブックファイル名のあとに続かなければなりません。",
		LE_FormulaParseException_StringConstantLengthTooLong: "指定した数式は、{0} 文字以上の文字列を含むことはできません。",
		LE_FormulaParseException_TooLong: "数式の最大長は、指定したブック形式で {0} を超過できません。",
		LE_FormulaParseException_UnknownFunction: "公式の関数名が有効な名前ではありません。",
		LE_FormulaParseException_UnmatchedOpenBracket: "公式の配列に閉じ括弧がありません。",
		LE_FormulaParseException_UnmatchedOpenParen: "公式に閉じ括弧がありません。",
		LE_FormulaParseException_UnmatchedOpenSquareBracket: "ワークブック ファイル名の後に閉じ括弧がありません",
		LE_FormulaParseException_WorkbookNameMissingEndQuote: "ワークブック参照に終わりの引用文が全くありません。",
		LE_FormulaParseException_WorksheetRangeMissingEndingName: "ワークシート範囲は 2 つ目のワークシート名を指定しません。",
		LE_IndexOutOfRangeException_ArrayBounds: "インデックスは配列の境界の外側です。",
		LE_InvalidEnumArgumentException_DefaultPatternCannotBeUsed: "デフォルトの FillPatternStyle は CellFillPattern を作成するために使用することはできません。",
		LE_InvalidOperationException_AnchorCommentBeforeApplyingToCell: "コメントをセルに適用する前に、TopLeftCornerCell および BottomRightCornerCell を設定する、または両方を null に設定する必要があります。",
		LE_InvalidOperationException_AnchorShapeBeforeAddingToCollection: "シェイプはワークシートもしくはグループに追加される前に TopLeftCornerCell と BottomRightCornerCell を設定する必要があります。",
		LE_InvalidOperationException_ArrayFormulaAlreadyApplied: "配列公式は既にセル範囲に適用されます。 最初に、既存のセル範囲をクリアしてください。",
		LE_InvalidOperationException_ArrayFormulaAppliedInTable: "配列数式をテーブルがある領域に適用できません。",
		LE_InvalidOperationException_ArrayFormulaInMergedCell: "マージセルの公式配列は無効です。",
		LE_InvalidOperationException_BottomRightAnchorFromOtherWorksheet: "追加するシェイプは BottomRightCornerCell と違うワークシートに配置されます。",
		LE_InvalidOperationException_BuiltInStyleNameCannotBeChanged: "定義済みスタイルの名前を変更できません。",
		LE_InvalidOperationException_CannotAddColorsToPaletteDirectly: "色を WorkbookColorPalette に追加できません。特定のインデックスに色を設定するには、インデクサーを使用します。",
		LE_InvalidOperationException_CannotAddParagraphDirectly: "段落は直接追加できません。",
		LE_InvalidOperationException_CannotAddTableDirectly: "WorksheetTable インスタンスをコレクションに直接挿入できません。Add メソッドを使用します。",
		LE_InvalidOperationException_CannotAddTableToRemovedWorksheet: "テーブルを所有するワークブックから削除されたワークシートに追加できません。",
		LE_InvalidOperationException_CannotApplyFilterWhileHeaderRowIsHidden: "テーブルのヘッダー行が非表示の場合、フィルターを適用できません。",
		LE_InvalidOperationException_CannotApplyFilterWhileUIIsHidden: "フィルター UI が非表示の場合、フィルターを適用できません。",
		LE_InvalidOperationException_CannotInsertTableRow_LossOfData: "ワークシートの下側以外にデータを移動するため、{0} を挿入できません。",
		LE_InvalidOperationException_CannotInsertTableRow_LossOfObject: "ワークシートの下側以外に図形またはコメントを移動するため、{0} を挿入できません。",
		LE_InvalidOperationException_CannotInsertTableRow_SplitBlockingValue: "配列数式またはデータ テーブルのセルを移動するため、{0} を挿入できません。",
		LE_InvalidOperationException_CannotInsertTableRow_SplitMergedRegion: "結合された領域のセルを移動するため、{0} を挿入できません。",
		LE_InvalidOperationException_CannotInsertTableRow_SplitTable: "他のテーブルのセルを移動するため、{0} を挿入できません。",
		LE_InvalidOperationException_CannotInsertTableRow_TableOnBottomOfWorksheet: "テーブルはワークシートの下側にあるため、{0} を挿入できません。",
		LE_InvalidOperationException_CannotModifyKeysCollection: "Keys コレクションを変更できません。",
		LE_InvalidOperationException_CannotModifyStandardTableStyle: "標準テーブル スタイルを変更できません。",
		LE_InvalidOperationException_CannotModifyValuesCollection: "Values コレクションを変更できません。",
		LE_InvalidOperationException_CannotMoveDisconnectedWorksheet: "ワークシートはワークブックに含まれていないため移動できません。",
		LE_InvalidOperationException_CannotRemoveColorsToPaletteDirectly: "色を WorkbookColorPalette から削除できません。すべてのカスタム色をクリアするには、Reset メソッドを使用します。",
		LE_InvalidOperationException_CannotRemoveNormalStyle: "標準スタイルを削除できません。",
		LE_InvalidOperationException_CannotSetParentStyleOnStyle: "他のスタイルに属する書式にスタイルを設定できません。",
		LE_InvalidOperationException_CannotShift_LossOfData: "シートからデータをシフトできません。",
		LE_InvalidOperationException_CannotShift_LossOfObject: "シートからオブジェクトをシフトできません。",
		LE_InvalidOperationException_CannotShift_SplitBlockingValue: "配列数式またはデータ表でシフトできません。",
		LE_InvalidOperationException_CannotShift_SplitMergedRegion: "結合領域でシフトできません。",
		LE_InvalidOperationException_CannotShift_SplitTable: "表でシフトできません。",
		LE_InvalidOperationException_CantAddCustomView: "カスタム ビューを直接コレクションに追加できません",
		LE_InvalidOperationException_CantAddDataTable: "データ テーブルは直接追加できません。",
		LE_InvalidOperationException_CantAddMergedRegion: "マージセル領域は直接追加できません。",
		LE_InvalidOperationException_CantAddNamedReference: "名前参照は直接追加できません。",
		LE_InvalidOperationException_CantAddWorksheet: "ワークシートを直接コレクションに追加できません。",
		LE_InvalidOperationException_CantApplyRemovedCustomView: "カスタム ビューはワークブックのカスタム ビュー コレクションから削除されると適用できません",
		LE_InvalidOperationException_CantChangeArrayFormula: "セルの配列公式は変更できません。",
		LE_InvalidOperationException_CantChangeDataTable: "データテーブルの内部のセルを変えることができません。",
		LE_InvalidOperationException_CantModifyCollection: "コレクションを変更できません。",
		LE_InvalidOperationException_CantOverlapArrayFormula: "結合されたセル領域は配列数式をオーバーラップできません。",
		LE_InvalidOperationException_CantOverlapDataTableInterior: "セルマージ領域がはみ出している場合データテーブルに重ねることが出来ません。",
		LE_InvalidOperationException_CantSaveEditRangeWithoutRange: "ワークシートの AllowedEditRanges に少なくとも 1 つの範囲が必要です。",
		LE_InvalidOperationException_CantSaveWithNoVisibleWorksheets: "ワークブックの少なくとも1つのワークシートが Visible の必要があります。",
		LE_InvalidOperationException_CantSaveWithNoWorksheets: "ワークシートのないワークブックは保存できません。",
		LE_InvalidOperationException_CantSetCircularityErrorDirectly: "循環エラー値を直接セルに適用できません。",
		LE_InvalidOperationException_CantSetDataTableDirectly: "セルの値としてデータテーブルを設定することができません。",
		LE_InvalidOperationException_CantSetFormulaDirectly: "公式をセルに直接記入できません。ApplyFormula を使用してください。",
		LE_InvalidOperationException_CellsInTableMinSize: "データテーブルのセル領域は少なくとも２つのセルが必要です。",
		LE_InvalidOperationException_ClearUnknownShapeData: "シェイプの全てのデータが不明です。コレクションから外してください。",
		LE_InvalidOperationException_CollectionLongerThanMaxValue: "コレクションは、指定した使用可能な最大値より多くのエントリを含みます。",
		LE_InvalidOperationException_CollectionModifiedWhileEnumerating: "コレクションが列挙されていたときに変更されました。",
		LE_InvalidOperationException_CurrentTableRowAddressNeedsOriginCell: "現在の行を使用して構造テーブル参照を解析するには、元のセルを指定する必要があります。",
		LE_InvalidOperationException_CustomViewNoVisibleWorksheets: "カスタムビュ－ \"{0}\" のワークシートの１つはVisibleに設定する必要があります。",
		LE_InvalidOperationException_DataTableAppliedInTable: "データ テーブルをテーブルがある領域に配置できません。",
		LE_InvalidOperationException_DataTableFormulaCannotBeApplied: "データ テーブルの数式は直接セルに適用できません。",
		LE_InvalidOperationException_DataTableInMergedCell: "データテーブルの内部セルはマージセルの一部に設定できません。",
		LE_InvalidOperationException_DataTableRemoved: "データテーブルがワークシートから取り外された後に行とコラム入力セルを設定することができません。",
		LE_InvalidOperationException_DeprecatedFillColorSetWithGradientFill: "セルにグラデーションが設定される場合、塗りつぶしパターン色を設定できません。",
		LE_InvalidOperationException_EncryptedWorkbooksNotSupported: "読み込んでいるワークブックは暗号化されます。暗号化されたワークブックはサポートされません。",
		LE_InvalidOperationException_ExtensionDoesntMatchCurrentFormat: "保存するファイル名の拡張子は、ワークブックの現在のフォーマットと一致しません。",
		LE_InvalidOperationException_FixedValuesFilterMustAcceptAValue: "有効な値のない FixedValuesFilter を設定できません。",
		LE_InvalidOperationException_FormattedStringAlreadyOwned: "フォーマット文字列は既に他のセルの値になっています。クローンを作成してから新規のセルに適用してください。",
		LE_InvalidOperationException_FormattedStringNotOwned: "セルにフォーマット文字列が設定されていない間はフォントプロパティにアクセスできません。",
		LE_InvalidOperationException_FormattedTextAlreadyOwned: "書式付き文字列はすでに他の図形の値です。まずクローンを実行し、新しいセルまたは図形に適用します。",
		LE_InvalidOperationException_FormulaAlreadyOwned: "公式は他のセルに既に使用されています。",
		LE_InvalidOperationException_FormulaReferencesInvalidCells: "数式は、ワークブックの現在のファイル フォーマットでサポートされていないセルを参照します。",
		LE_InvalidOperationException_GetBoundsBeforeAnchorsSet: "シェイプはアンカーセルが設定される前に領域をもつことは出来ません。",
		LE_InvalidOperationException_HiddenWorksheetCannotBeSelected: "非表示のワークシートを選択できません。",
		LE_InvalidOperationException_HyperlinkSealed: "ハイパーリンクは変更できません。",
		LE_InvalidOperationException_ImageDisposed: "WorksheetImage の画像は、すでに破棄されているか無効です。",
		LE_InvalidOperationException_InputCellsBothNull: "列入力と行入力セルは Null に出来ません。",
		LE_InvalidOperationException_InputCellsInTable: "入力セルはデータテーブルセルと一緒に使用できません。",
		LE_InvalidOperationException_InputCellsSame: "列入力と行入力は同じセルにすることは出来ません。",
		LE_InvalidOperationException_InvalidCharacterRange: "フォントでカバーされた領域はフォーマット文字列にありません。",
		LE_InvalidOperationException_InvalidFormatOptionsInWholeTableArea: "指定した FormatOptions の書式設定値は WholeTable テーブル領域で無効です。",
		LE_InvalidOperationException_InvalidFormatString: "指定した書式文字列は無効です。",
		LE_InvalidOperationException_InvalidFormatString_GetTextCall: "セルの書式文字列は無効です。FormatString が設定したときに通知するには、Workbook.ValidateFormatStrings を True に設定します。",
		LE_InvalidOperationException_InvalidForWorkbookFormat: "数式が、指定した形式に無効です。",
		LE_InvalidOperationException_InvalidHeaderCellColumnAreaFormatProperty: "HeaderCell テーブル列領域の書式設定に上側の境界線値を設定できません。",
		LE_InvalidOperationException_InvalidHeaderRowAreaFormatProperty: "HeaderRow テーブル領域の書式設定に上側の境界線値を設定できません。",
		LE_InvalidOperationException_InvalidTableStyleAreaFontProperty: "{0} フォント値をテーブル スタイル領域に設定できません。",
		LE_InvalidOperationException_InvalidTableStyleAreaFormatOptions: "指定した FormatOptions の書式設定値はテーブル スタイル領域で無効です。",
		LE_InvalidOperationException_InvalidTableStyleAreaFormatProperty: "{0} 書式値をテーブル スタイル領域に設定できません。",
		LE_InvalidOperationException_InvalidTotalsCellColumnAreaFormatProperty: "TotalCell テーブル列領域の書式設定に下側の境界線値を設定できません。",
		LE_InvalidOperationException_InvalidTotalsRowAreaFormatProperty: "TotalsRow テーブル領域の書式設定に下側の境界線値を設定できません。",
		LE_InvalidOperationException_InvalidWholeTableAreaFormatProperty: "WholeTable テーブル領域の書式設定に外側の境界線値のみを設定できます。",
		LE_InvalidOperationException_LastColumnBeforeFirst: "領域の最終列は最初の列より大きい又は同じでなければなりません。",
		LE_InvalidOperationException_LastRowBeforeFirst: "領域の最初の行は最終行より大きい必要があります。",
		LE_InvalidOperationException_MaxCellFormats: "Excel ファイルの中の異なったセル形式の最大数は以下の通りです: {0}。",
		LE_InvalidOperationException_MaxColors: "ワークブックの最大色数は{0}です。",
		LE_InvalidOperationException_MaxColumns: "現在のフォーマットの Excel の最大列数は {0} です。",
		LE_InvalidOperationException_MaxFonts: "ワークブック内のフォント数は {0} 以内の値である必要があります。",
		LE_InvalidOperationException_MaxFormattedStrings: "ワークブックの一意の文字列の数は {0} を越えることができません。",
		LE_InvalidOperationException_MaxRows: "現在のフォーマットの Excel ワークシートの最大行数は {0}です。",
		LE_InvalidOperationException_MergedCellCrossesDataTableLeftColumn: "セルマージ領域がはみ出している場合データテーブルに重ねることが出来ません。",
		LE_InvalidOperationException_MergedCellCrossesDataTableTopLeftCell: "データテーブルで指定されたセルの Top-Left はセルの領域外でマージされています。",
		LE_InvalidOperationException_MergedCellCrossesDataTableTopRow: "データテーブルに指定されたセルの最前列はそれらのセルの領域の外でマージしているセルを含んでいます。",
		LE_InvalidOperationException_MergedCellsAppliedInTable: "テーブルのセルを結合できません。",
		LE_InvalidOperationException_NamedReferenceNameAlreadyExists: "名前 \"{0}\" は、同じスコープがあるワークブックのテーブルまたは名前付きの参照で既に使用されています。",
		LE_InvalidOperationException_NoWorksheetContextToSetShapeBounds: "図形コレクションは Worksheet と関連付けられていない場合、この Add のオーバーロードを呼び出しません。Worksheet インスタンスを取得する Add オーバーロードを呼び出します。",
		LE_InvalidOperationException_OverlappingTable: "指定した領域に他のテーブルがあります。",
		LE_InvalidOperationException_ReadOnlyFont: "フォント オブジェクトは読み取り専用で変更することはできません。",
		LE_InvalidOperationException_ReadOnlyFormat: "書式オブジェクトは読み取り専用で変更することはできません。",
		LE_InvalidOperationException_RelativeR1C1AddressNeedsOriginCell: "相対 R1C1 アドレスを解析するのに、基点のセルの指定が必要です。",
		LE_InvalidOperationException_ResizedTableMustBeOnWorksheet: "テーブルをサイズ変更するにはワークシートに含む必要があります。",
		LE_InvalidOperationException_ResolvedFormatCannotBeModified: "解決されたセル書式は読み取り専用で変更することはできません。",
		LE_InvalidOperationException_ShapeCantChangeOrientation: "この図形を回転するか、反転することができません。",
		LE_InvalidOperationException_ShapeFillSolidIsImmutable: "ShapeFillSolid は不変です。代わりに新しい ShapeFillSolid を作成します。",
		LE_InvalidOperationException_ShapeInAnotherCollection: "シェイプがすでに他のワークシート又はシェイプグループに存在します。",
		LE_InvalidOperationException_ShapeOutlineSolidIsImmutable: "ShapeOutlineSolid は不変です。代わりに新しい ShapeOutlineSolid を作成します。",
		LE_InvalidOperationException_ShowFilterUIWhileHeaderRowHidden: "ヘッダー行が非表示される場合、フィルター UI を表示できません。",
		LE_InvalidOperationException_SystemColorsAccessedFromWrongThread: "バックグラウンド スレッドから SystemColors にアクセスできません。",
		LE_InvalidOperationException_TableReferenceMustBeUsedFromInsideTable: "数式は、テーブル内のみに使用可能な構造テーブル参照を含みます。",
		LE_InvalidOperationException_TableReferenceToMissingTable: "数式は存在しないテーブルへの参照を含みます。",
		LE_InvalidOperationException_TableReferenceToMissingTableColumn: "数式は存在しないテーブル列への参照を含みます。",
		LE_InvalidOperationException_TopLeftAnchorFromOtherWorksheet: "このコレクションに追加されるシェイプはTopLeftCornerCellより違うワークシートに配置されます。",
		LE_InvalidOperationException_TotalsRowCannotBeShownInLastRow: "テーブルがワークシートの最後の行にある場合、集計行を表示できません。",
		LE_InvalidOperationException_UnknownBIFFFormat: "ワークブックファイルが未知の BIFF 形式です。",
		LE_InvalidOperationException_UnsupportedBIFFFormat: "{0}に保存されたワークブックはサポートされていないフォーマットです。",
		LE_InvalidOperationException_WorkbookDataViolatesFormatLimits: "ワークブックは、指定されたフォーマットが設定した制限を超えるデータを含みます。",
		LE_NotSupportedException_CellType: "{0} はサポート対象外の型です。",
		LE_NotSupportedException_NoPackageFactory: "packageFactory は Null にできません。Infragistics2.Documents.Excel アセンブリを使用して Excel2007 ワークブック書式で読み込むと、データをパッケージ化するために IPackageFactory を提供する必要があります。.NET Framework 3.0 以上のフレームワークを使用する場合は、Infragistics3.Documents.Excel アセンブリを使用してください。パッケージ化は WindowsBase クラスで処理されます。",
		LE_OpenPackagingNonConformanceException_ContainsDublinCoreRefinements: "IPackagePart は、コア プロパティ リレーションシップ で、'dcterms:created' または 'dcterms:modified' 以外に Dublin Core エレメントに洗練を含みます。",
		LE_OpenPackagingNonConformanceException_ContainsXmlLanguageAttribute: "IPackagePart は、コア プロパティ リレーションシップ で、'xml:lang' 属性を含むエレメントを使用します。",
		LE_OpenPackagingNonConformanceException_CorePropertiesRelationshipAlreadyProcessed: "IPackagePart は、コア プロパティ リレーションシップ です。ただし、関連 IPackage に処理されています。",
		LE_OpenPackagingNonConformanceException_DuplicatePartName: "IPackagePart と同じ名前が、すでにこの IPackage に属しています。IPackage は、同じ名前のパーツを含むことはできません。重複値の確認は、大文字と小文字を区別しないことに注意してください。",
		LE_OpenPackagingNonConformanceException_UsesMarkupCompatibilityNamespace: "IPackagePart は、コア プロパティ リレーションシップ で、Markup Compatibility 名前空間を使用します。",
		LE_OpenPackagingNonConformanceException_XmlContainsDocumentTypeDefinition: "Packaging Convention 規則は、実装DTD 定義を XML コンテンツに使用することを禁止しています。",
		LE_OpenPackagingNonConformanceException_XsiTypeAttributeInvalid: "IPackagePart は、コア プロパティ リレーションシップ で、'xsi:type' attribute 属性を含むエレメントを含みます。または、必要なエレメントを含むが 'xsi:type' 属性は含まない コア プロパティ リレーションシップ です。",
		LE_OpenXmlSerializerNotLoaded: "The '{0}' format requires a serializer that is not loaded, in JavaScript this is contained in the infragistics.excel_serialization_openxml.js file",
		LE_RowsToRepeatAtTopAreOutsideAvailableRange: "印刷オプションは上に繰り返す行を含みます。その列は、新しい形式の利用可能な行の範囲以外です。",
		LER_ArgumentOutOfRangeException_OutlineLevel: "アウトラインのレベルは 0 ～ 7 です。",
		LER_Exception_KeyNotFound: "キーが見つかりません。",
		LER_Exception_MergedRegionsOverlap: "結合セル範囲はオーバーラップできません。",
		TableHeaderRowDescription: "ヘッダー行",
		TableInsertRowDescription: "行の挿入",
		TableTotalsRowDescription: "集計行",
		Value_UCErrorCode_Div: "#DIV/0!",
		Value_UCErrorCode_Fail: "#FAIL",
		Value_UCErrorCode_NA: "#N/A",
		Value_UCErrorCode_Name: "#NAME?",
		Value_UCErrorCode_Null: "#NULL!",
		Value_UCErrorCode_Num: "#NUM!",
		Value_UCErrorCode_Ok: "#OK",
		Value_UCErrorCode_Reference: "#REF!",
		Value_UCErrorCode_Unknown: "#N/A",
		Value_UCErrorCode_Value: "#VALUE!",
		WorkbookColorInfo_Automatic_Description: "自動",
		WorkbookColorInfo_Description: "ColorInfo: {0}",
		WorkbookColorInfo_WithTint_Description: "ColorInfo: {0}, 濃淡: {1}",
		WorksheetShapeSerialization_GroupName: "グループ",
		WorksheetShapeSerialization_ImageName: "画像",
		WorksheetShapeSerialization_ShapeName: "シェイプ"
	});
}));// REMOVE_FROM_COMBINED_FILES
