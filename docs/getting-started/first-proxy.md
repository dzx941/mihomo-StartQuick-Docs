---
sidebar_position: 3
title: 添加第一个代理
---

# 添加第一个代理

节点的核心信息通常包括：

```text
名称
类型
服务器
端口
```

例如：

```yaml
proxies:
  - name: example
    type: http
    server: example.com
    port: 8080
```
:::note
这里的 `example.com:8080` 只是文档示例，不代表一个实际可用的代理服务。

你需要把它替换成自己拥有或有权使用的代理服务器信息。
:::

## 为什么还需要代理组？

因为节点只是“一个代理”。

实际使用时，我们通常还需要一个选择器：

```yaml
proxy-groups:
  - name: PROXY
    type: select
    proxies:
      - example
      - DIRECT
```

然后规则可以把流量交给：

```text
PROXY
```

这样规则和具体节点就解耦了。