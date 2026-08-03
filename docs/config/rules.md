---
sidebar_position: 4
title: rules
---

# `rules`

`rules` 决定流量应该走哪条路线。

例如：

```yaml
rules:
  - DOMAIN-SUFFIX,example.com,PROXY
  - MATCH,DIRECT
```

可以先把它理解为：

```text
如果匹配 example.com
    ↓
交给 PROXY

否则
    ↓
DIRECT
```

规则通常按顺序匹配。

因此规则的顺序很重要。

常见匹配方式包括域名、IP、进程、端口等，具体以当前 Mihomo 版本支持的规则类型为准。