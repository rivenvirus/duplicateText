'use strict';

import * as vscode from 'vscode';

export function activate() {

	//console.log('Congratulations, your extension "duplicatetext" is now active!');
	vscode.commands.registerCommand('extension.duplicateText', () => {
        const editor = vscode.window.activeTextEditor;
		const selection = editor.selection;
        if(!selection.isEmpty){
            vscode.commands.executeCommand("editor.action.clipboardCopyAction");
            vscode.commands.executeCommand("editor.action.clipboardPasteAction");
            vscode.commands.executeCommand("editor.action.clipboardPasteAction");
        }
	});
}