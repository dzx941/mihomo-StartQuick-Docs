---
sidebar_position: 3
title: DNS 原理
---

# DNS 原理

DNS 最基础的工作是：

```text
域名
 ↓
DNS 查询
 ↓
IP 地址
```

在 Mihomo 中，DNS 还会和规则、代理、fake-ip 等功能产生关系。

因此实际使用中需要考虑：

- DNS 请求由谁处理？
- 使用哪个 DNS 服务器？
- DNS 查询是否需要走代理？
- 返回的地址如何参与规则匹配？
- 是否使用 fake-ip？

这一部分属于进阶内容。

如果你还没有理解 DNS 的基础概念，建议先回到：

[DNS 到底是什么？](../level-0/dns)