'use strict';

import * as vscode from 'vscode';

export function activate() {
	vscode.commands.registerCommand('text.duplicateText', () => {
        const editor = vscode.window.activeTextEditor;
		const selection = editor.selection;
        if(!selection.isEmpty){
            vscode.commands.executeCommand("editor.action.clipboardCopyAction");
            vscode.commands.executeCommand("editor.action.clipboardPasteAction");
            vscode.commands.executeCommand("editor.action.clipboardPasteAction");
        }
	});
}