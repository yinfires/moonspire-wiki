import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Moon Spire Wiki Preview</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroBody}>
            这里是 Moon Spire 的资料库预览：先用少量真实玩法内容展示最终 wiki 的结构、
            语气和页面效果，后续再继续把战斗、卡牌、爬塔和开发者资料补完整。
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              开始浏览
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/docs/gameplay-overview">
              查看玩法
            </Link>
          </div>
        </div>
        <div className={styles.previewPanel} aria-label="Moon Spire preview assets">
          <div className={styles.cardPreview}>
            <img src="/img/moonspire/card_base.png" alt="Moon Spire card base" />
            <div>
              <span>费用</span>
              <strong>卡牌战斗</strong>
              <p>抽牌、出牌、格挡、状态与怪物意图。</p>
            </div>
          </div>
          <div className={styles.assetRow}>
            <img src="/img/moonspire/card_forge_front.png" alt="制卡台纹理" />
            <img src="/img/moonspire/draw_pile.png" alt="抽牌堆图标" />
            <img src="/img/moonspire/stomp_wave.png" alt="践踏冲击波贴图" />
          </div>
          <dl className={styles.statGrid}>
            <div>
              <dt>MC</dt>
              <dd>1.21.1</dd>
            </div>
            <div>
              <dt>Loader</dt>
              <dd>NeoForge</dd>
            </div>
            <div>
              <dt>Mod ID</dt>
              <dd>moonspire</dd>
            </div>
          </dl>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Moon Spire Wiki preview for card combat, tower runs, and developer tools.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
