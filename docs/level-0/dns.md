---
sidebar_position: 5
title: DNS 到底是什么？
---

# DNS 到底是什么？

DNS 是另一个非常容易把新手绕晕的东西。


## DNS 在做什么？

你平时访问：

```text
example.com
```

电脑真正建立网络连接时，通常需要知道它对应的 IP 地址。

所以可以简单理解成：

```text
example.com
     ↓
    DNS
     ↓
   IP 地址
```

DNS 就像互联网的“电话簿”。

你告诉它：

> 我要找 example.com。

它帮你找到对应的网络地址。

---

## 为什么 Mihomo 也需要 DNS？

因为 Mihomo 需要知道：

> **这个请求到底要去哪里？**

而且不同的 DNS 处理方式可能影响：

```text
域名解析结果
规则匹配
直连 / 代理
网络连通性
```

所以 Mihomo 里面有专门的 DNS 配置。

例如：

```yaml
dns:
  enable: true
```

这只是告诉 Mihomo：

> 启用 DNS 功能。

至于 `nameserver`、`fallback`、`fake-ip` 等东西，我们后面的原理章节再慢慢讲。

---

## 现在只需要记住

```text
域名
 ↓
DNS
 ↓
IP 地址
 ↓
建立连接
```

DNS 不是什么神秘功能。

它最基础的工作就是：

> **帮你把“域名”找到对应的网络地址。**