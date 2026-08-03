---
sidebar_position: 2
title: proxies
---

# `proxies`

`proxies` 用来定义代理节点。

一个最简单的结构：

```yaml
proxies:
  - name: example
    type: http
    server: example.com
    port: 8080
```

常见字段：

| 字段 | 含义 |
| --- | --- |
| `name` | 节点名称 |
| `type` | 节点类型 / 协议 |
| `server` | 服务器地址 |
| `port` | 服务器端口 |

不同协议拥有不同的字段。

因此看到一个具体协议时，应以对应的 Mihomo 配置参考为准。