import React from "react";
import "./exp.css";

const exps = [
  {
    title: "Software Engineer / Full Stack Dev",
    desc: "Implementation and customization of cloud services such as AWS (cloudfront, cloud formation, s3, lambda, sns, ses and others), Cloudflare (cdn), Firebase (storage, analytics, crashlytics, hosting). Development of features and fixes to the company's API using node.js, fastify and different libraries Development and maintenance of two PWAs based on React.js using the Gatsby and Next frameworks. Development, maintenance and continuous addition of new features of a payments terminal using google's Flutter and related libraries. For version control GIT, repository handling & CI/CD on Gitlab.",
    url: "images/experience/fluxqr.png",
    site: "https://www.fluxqr.com/"
  },
  {
    title: "Software Engineer III / Full Stack Dev",
    desc: "Development/Deployment/Maintenance of two CMS for recruitment and monitoring of personnel and their three related PWAs. For ux/ui and frontend: Figma, Jhipster (React), Redux, others. For backend: Jhipster (NodeJS, Typeorm, PostgreSql, Nest), other techs & libs. For versioning, deployments and storage: Bitbucket, Kubernetes, Azure.",
    url: "images/experience/jemer.webp",
    site: "https://www.jemersoft.com/es"
  },
  {
    title: "Javascript Developer",
    desc: "-Web Development of a Custom CMS platform with React, Hooks, Redux, Firebase (services), Google Maps API (services)",
    url: "images/experience/spark.png",
    site:"https://sparksolutions.co/"
  },
  {
    title: "Bulk Data & Budget Analyst",
    desc: "Budget Analyst, Advances and Variations in Hydraulic Works of the Province of Córdoba, Argentina. Doing ETL, also making custom reports/dashboards. STACK: Excel, MS Power BI, SQL, Pentaho",
    url: "images/experience/msp.png",
    site:"https://ministeriodeserviciospublicos.cba.gov.ar/"
  },
  {
    title: "Freelance Consultant",
    desc: "During this period I did independent work as civil engineer that included: - Development of Works Progress plans - Analysis of prices and Budgets - Isolated calculations in different areas with their specificities (Structural, Hydric, Stability)",
    url: "images/experience/freelance.png",
    site:"https://www.freelancer.com/"
  },
  {
    title: "Civil Engineer",
    desc: "Worked as a Civil Eng in a Buenos Aires company in several projects: - Development of Works Progress plans - Analysis of prices and Budgets - Isolated calculations in different areas with their specificities (Structural, Hydric, Stability)",
    url: "images/experience/inmac.png",
    site: "http://www.inmac.com.ar/",
  },
];

export default () => (
  <div className="exp-cont">
    {exps?.length &&
      exps.map((exp) => (
        <div key={exp.title} className="exp-subcont">
          <a href={exp.site} target="_blank">
          <img className="exp-img" src={exp.url} alt="" />
          </a>
          <p className="exp-title">{exp.title}</p>
          <p className="exp-desc">{exp.desc}</p>
        </div>
      ))}
  </div>
);
