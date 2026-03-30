import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Truse de experimente',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Truse de matematică, fizică, chimie, biologie
        și geografie pentru uz școlar sau individual.
      </>
    ),
  },
  {
    title: 'Magazin Online',
    Svg: require('@site/static/img//centrum_logo_svg_final.svg').default,
    description: (
      <>
        Materiale didactice pentru preșcolari, școala primară,
        gimnaziu, liceu și facultate.
      </>
    ),
  },
  {
    title: 'Birotică și papetărie',
    Svg: require('@site/static/img//undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mobilier pentru școli, birouri moderne cu înălțime reglabilă,
        scaune directoriale sau de gaming.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2 style={{fontSize: 20}}>Centrum vă oferă:</h2>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
