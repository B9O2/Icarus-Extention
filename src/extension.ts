
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Icarus Extension is ACTIVE');

	let disposable = vscode.commands.registerCommand('icarus.version', () => {
		
		vscode.window.showInformationMessage('Icarus Extension - 0.0.1 alpha');
	});

	context.subscriptions.push(disposable);
}


export function deactivate() {}
