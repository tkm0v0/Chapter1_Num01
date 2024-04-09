# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# section4-14
- node-sassは現在は非推奨なので、Dart Sassをインストールする
```
mai@takahashimainoMacBook-Pro sample-vite % npm install sass


added 14 packages, and audited 294 packages in 801ms

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
mai@takahashimainoMacBook-Pro sample-vite % sass --version
zsh: command not found: sass
mai@takahashimainoMacBook-Pro sample-vite % npx sass --version

1.74.1 compiled with dart2js 3.3.3
```
# section4-15
- `styled-jsx`をインストールする
```
mai@takahashimainoMacBook-Pro sample-vite % npm install styled-jsx

added 2 packages, and audited 296 packages in 671ms

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
mai@takahashimainoMacBook-Pro sample-vite %                            
```
- Next.jsにはデフォルトで、 `styled-jsx`が入っている

# section4-16
- `styled-components`をインストールする
```
mai@takahashimainoMacBook-Pro sample-vite % npm install styled-components

added 14 packages, and audited 310 packages in 845ms

109 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
mai@takahashimainoMacBook-Pro sample-vite % 
```