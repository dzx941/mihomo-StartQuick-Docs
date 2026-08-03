---
sidebar_position: 5
title: dns
---

# `dns`

`dns` 用于配置 Mihomo 的 DNS 行为。

例如：

```yaml
dns:
  enable: true
  nameserver:
    - 223.5.5.5
    - 1.1.1.1
```

这里最重要的概念是：

```text
enable
↓
是否启用 DNS 功能

nameserver
↓
使用哪些 DNS 服务器
```

DNS 的完整配置远不止这些。

如果你还不了解 DNS，建议先阅读：

[DNS 到底是什么？](../level-0/dns)