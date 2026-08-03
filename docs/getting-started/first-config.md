---
sidebar_position: 2
title: 第一份配置文件
---

# 第一份配置文件

Mihomo 的配置文件使用 YAML。

先看一个最小的结构：

```yaml
mixed-port: 7890

proxies:
  - name: example
    type: http
    server: example.com
    port: 8080

proxy-groups:
  - name: PROXY
    type: select
    proxies:
      - example
      - DIRECT

rules:
  - MATCH,PROXY
```

不要被它吓到。

它实际上只是在告诉 Mihomo：

```text
监听端口 → 7890

我有一个叫 example 的节点

我有一个叫 PROXY 的代理组

最后没有匹配到其他规则的流量 → PROXY
```

后面的配置章节会逐项解释。