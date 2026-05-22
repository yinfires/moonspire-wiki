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
      <div className={styles.spireLines} aria-hidden="true" />
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Moon Spire Archive</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroBody}>
            以月尖塔图标为核心延展出的资料站：黑色界面、月白文字、锐利线框，
            用简洁结构整理战斗、卡牌、爬塔和创作者工具。
          </p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/intro">
              开始浏览
            </Link>
            <Link className={clsx('button button--lg', styles.secondaryButton)} to="/docs/gameplay-overview">
              查看玩法
            </Link>
          </div>
        </div>
        <div className={styles.emblemPanel} aria-label="Moon Spire emblem">
          <div className={styles.emblemFrame}>
            <span className={styles.cornerTopLeft} />
            <span className={styles.cornerTopRight} />
            <span className={styles.cornerBottomLeft} />
            <span className={styles.cornerBottomRight} />
            <img src="/img/moonspire/moonspire_icon.png" alt="月尖塔图标" />
          </div>
          <div className={styles.emblemCaption}>
            <span />
            <p>月牙、尖塔、冷银线条，构成整站视觉母题。</p>
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
