import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
// import Loader from "../loader";

const FeatureList = [
  {
    title: "Read our documentation",
    Svg: require("../../static/img/documentation.svg").default,
    description: (
      <>
        Understand what we offer and how we can help you to introduce yourself
        into SSI.
      </>
    ),
    url: "/docs/intro",
  },
  {
    title: "Explore our APIs",
    Svg: require("../../static/img/keyboard.svg").default,
    description: (
      <>
        Check our OpenAPIs here as well. You will find all you need to start
        using our services.
      </>
    ),
    url: "/vidcredentials-openapi",
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <a href={url}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  // Loader.loadApis();
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
