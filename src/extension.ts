'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function use(x: vscode.Terminal) {
  if (process.platform === "win32") {
    x.sendText(`solc-select use $(Get-Content .svmrc)`);
  }
  else {
    x.sendText('pip freeze | grep solc-select >/dev/null 2>&1 && solc-select use $(cat .svmrc)');
  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const terminals = (<any>vscode.window).terminals;
  if (terminals.length) {
    terminals.forEach(function switchNode(t: vscode.Terminal) {
      use(t);
    });
  }
  (<any>vscode.window).onDidOpenTerminal((e: vscode.Terminal) => {
    use(e);
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
