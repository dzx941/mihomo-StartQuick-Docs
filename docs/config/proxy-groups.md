---
sidebar_position: 3
title: proxy-groups
---

# `proxy-groups`

代理组用来管理和选择多个代理。

例如：

```yaml
proxy-groups:
  - name: PROXY
    type: select
    proxies:
      - Japan
      - HongKong
      - DIRECT
```

这里可以理解为：

```text
PROXY
├── Japan
├── HongKong
└── DIRECT
```

规则可以把流量交给 `PROXY`，然后由代理组决定下一步怎么走。

不同 `type` 对应不同的选择逻辑。使用前请查看对应的 Mihomo 配置参考。