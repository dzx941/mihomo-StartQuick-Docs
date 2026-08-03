import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function Feature({title, children, to, icon}) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.icon}>{icon}</div>
      <Heading as="h3">{title}</Heading>
      <p>{children}</p>
      <span className={styles.readMore}>开始阅读 →</span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout title="Mihomo 小小白文档" description="用人话理解 Mihomo">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.badge}>MIHOMO · LEVEL 0</div>
            <Heading as="h1">Mihomo 小小白文档</Heading>
            <p className={styles.subtitle}>用人话理解 Mihomo</p>
            <p className={styles.description}>
              不懂代理、不懂网络、不懂 YAML？没关系。
              <br />
              从最基础的概念开始，一步一步看懂 Mihomo。
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/level-0/">
                🌱 从零开始
              </Link>
              <Link className="button button--secondary button--lg" to="/getting-started/">
                🚀 快速开始
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <Feature title="小小白白话文" to="/level-0/" icon="🌱">
                  不堆术语，先用最简单的人话解释 Mihomo 到底是什么。
                </Feature>
              </div>
              <div className="col col--4">
                <Feature title="快速开始" to="/getting-started/" icon="🚀">
                  从安装、第一份配置到第一个代理，边做边学。
                </Feature>
              </div>
              <div className="col col--4">
                <Feature title="配置参考" to="/config/" icon="⚙️">
                  理解 proxies、proxy-groups、rules、dns 等核心配置。
                </Feature>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.flow}>
          <div className="container">
            <Heading as="h2">Mihomo 到底在做什么？</Heading>
            <div className={styles.flowGrid}>
              <div>📱<span>设备产生请求</span></div>
              <div>→</div>
              <div>🧠<span>Mihomo 判断规则</span></div>
              <div>→</div>
              <div>🧭<span>选择流量路线</span></div>
              <div>→</div>
              <div>🌐<span>连接目标</span></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
