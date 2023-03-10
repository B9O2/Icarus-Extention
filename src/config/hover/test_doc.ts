const doc = [
    {
        kind: 'Function',
        body: [
            "echo"
        ],
        detail: "(method) base.echo( value: any, color: any)",
        documentation: `echo()可以输出任何数据类型\n
:param value: — 要输出的值.\n
:param color: — 颜色.`
    }
];

import * as vscode from 'vscode';

class HoverProvider {
	provideHover(document: vscode.TextDocument, position: vscode.Position) {
		const text = document.getText(new vscode.Range(
			new vscode.Position(0, 0),
			position
		));
		const word = document.getText(document.getWordRangeAtPosition(position));

		if(/base\.[A-Za-z]+$/g.test(text)) {
			for(let i = 0; i < doc.length; i++ ) {
				const regExp = RegExp(`${doc[i].body[0]}`);
				// 检查当前语法是否有文档，检测关键字
				if(regExp.test(word)){
					const description = doc[i].documentation.replace(/\@/g,function(m,n){
						return `\n${m}`;
					});
					return new vscode.Hover([doc[i].detail,description]);
				}
			}
		};
	}
}

export default function(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.languages.registerHoverProvider("icarus", new HoverProvider()));
};