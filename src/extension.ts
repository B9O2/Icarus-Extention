
import * as vscode from 'vscode';
import hoverInfo from './config/hover/test_doc';


export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Icarus Extension is ACTIVE');

	let version = vscode.commands.registerCommand('icarus.version', () => {
		vscode.window.showInformationMessage('Icarus Extension - 0.0.1 alpha');
	});
	context.subscriptions.push(version);

	vscode.languages.registerCompletionItemProvider(
		"icarus",
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position){
				console.log("completion");
				return [
					{
						label: 'mySuggestion',
						insertText: 'mySuggestion'
					}
				];
			},
		},'.');
	
	hoverInfo(context);

	/*
	vscode.languages.registerHoverProvider(
		"icarus",{
		provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken){
			console.log();
			return new vscode.Hover("icarusss");
		},
	});
	*/
}


export function deactivate() {}
