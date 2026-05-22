import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '玩法概览',
    href: '/docs/gameplay-overview',
    mark: '01',
    description: (
      <>
        战斗流程、卡牌关键词、制卡台转换、爬塔路线和塔内恢复规则。
      </>
    ),
  },
  {
    title: '创作者工具',
    href: '/docs/developer-tools',
    mark: '02',
    description: (
      <>
        开发者中心、房间编辑、怪物池、塔配置和自定义内容入口。
      </>
    ),
  },
  {
    title: '界面与反馈',
    href: '/docs/ui-animation',
    mark: '03',
    description: (
      <>
        战斗界面、状态提示、出牌动画、弹射物和世界反馈。
      </>
    ),
  },
];

function Feature({mark, title, description, href}) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.featureCard} to={href}>
        <span className={styles.featureMark}>{mark}</span>
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
          <p>用月尖塔的黑白图标语言组织资料入口，保持简洁、清晰、可继续扩展。</p>
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
