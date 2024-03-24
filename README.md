
用于测试 jsmind 在 react 下的使用

```
➜  jsmind-react git:(main) node -v
v20.11.0
➜  jsmind-react git:(main) npm -v
10.2.4
```

工程使用 Create React App 做了初始化， 但是将 react 版本降级为了 16.14.0 ：

```
      "dependencies": {
        "jsmind": "^0.8.3",
        "react": "^16.14.0",
        "react-dom": "^16.14.0",
```

启动：

```
npm i
npm start
```

浏览器访问： http://localhost:3000 

目前展示显示了： issue: https://github.com/hizzgdev/jsmind/issues/589 中描述的问题