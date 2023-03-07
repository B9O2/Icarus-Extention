// 导入 vscode

console.log("here");
const vscode = await import ('vscode');
console.log("??");
// 该方法将会在插件在激活的时候被调用
export function activate(context) {
    vscode.window.showInformationMessage('Icarus Extension is ACTIVE');
         // 此处实现注册了在package.json 中声明的插件命令
        let disposable = vscode.commands.registerCommand('icarus.version', () => {
                // 每次运行命令的时候都将会执行
                // 右下角弹窗显示信息
                vscode.window.showInformationMessage('Icarus Extension - 0.0.1 Alpha');
        });

        context.subscriptions.push(disposable);
}

export function deactivate(){}