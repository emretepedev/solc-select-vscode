# solc-select-vscode README

Vscode plugin that use solc-select to switch solc version according to .svmrc file.

## Features

This is a work in progress, it is only tested in linux at the moment.

- [x] launch `solc-select use` command in integrated terminals to automatically change (with .svmrc) solc version.
- [ ] install scripts with the correct solc version.

## Requirements

- [solc-select](https://github.com/crytic/solc-select) must be installed on your system.
- you should have a `.svmrc` file in root folder of the project
- install manually the version referred in `.svmrc` with `solc-select install`

## Configuration

### Example of `.svmrc` file

```
0.8.7
```

## Known Issues

No issue known ATM.

## TODO

- complete all features described above.
- write tests.
- add necessary linters to project.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of solc-select-vscode
