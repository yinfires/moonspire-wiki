import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '玩法概览',
    href: '/docs/gameplay-overview',
    image: '/img/moonspire/draw_pile.png',
    description: (
      <>
        战斗流程、卡牌关键词、制卡台转换、爬塔路线和塔内恢复规则。
      </>
    ),
  },
  {
    title: '创作者工具',
    href: '/docs/developer-tools',
    image: '/img/moonspire/card_forge_front.png',
    description: (
      <>
        开发者中心、房间编辑、怪物池、塔配置和自定义内容入口。
      </>
    ),
  },
  {
    title: '界面与反馈',
    href: '/docs/ui-animation',
    image: '/img/moonspire/stomp_wave.png',
    description: (
      <>
        战斗界面、状态提示、出牌动画、弹射物和世界反馈。
      </>
    ),
  },
];

function Feature({image, title, description, href}) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.featureCard} to={href}>
        <img className={styles.featureImage} src={image} alt="" />
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">当前预览内容</Heading>
          <p>这不是完整资料库，而是先把最终 wiki 的信息密度和阅读方式搭出来。</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
