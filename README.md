# Mihomo 小小白文档

一个基于 Docusaurus 的 Mihomo 入门文档站。

## 环境要求

- Node.js >= 20
- npm

## 安装

```bash
npm install
```

## 本地开发

```bash
npm start
```

打开：

```text
http://localhost:3000
```

## 构建

```bash
npm run build
```

## 本地预览生产构建

```bash
npm run serve
```

## 部署前需要修改

编辑 `docusaurus.config.js`：

```js
url: 'https://example.com',
baseUrl: '/',
organizationName: 'example',
projectName: 'mihomo-docs',
```

将它们替换成自己的站点信息。

## 目录

```text
docs/
├── level-0/          # 小小白白话文
├── getting-started/  # 快速开始
├── concepts/         # 原理
└── config/           # 配置参考
```
