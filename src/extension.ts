'use strict';

import * as vscode from 'vscode';

export function activate() {
	vscode.commands.registerCommand('text.duplicateText', () => {
        const editor = vscode.window.activeTextEditor;
		const selection = editor.selection;
        if(!selection.isEmpty){
            var selections = [];
            editor.selections.forEach(function(item){
                var selection_count = (item.end.character-item.start.character);
                var new_selection = new vscode.Selection(item.start.line,(item.start.character+selection_count),item.end.line,(item.end.character+selection_count))
                selections.push(new_selection);
            });
            vscode.commands.executeCommand("editor.action.clipboardCopyAction");
            vscode.commands.executeCommand("editor.action.clipboardPasteAction");
            vscode.commands.executeCommand("editor.action.clipboardPasteAction");
            vscode.window.activeTextEditor.selections = selections;
        }
	});
}