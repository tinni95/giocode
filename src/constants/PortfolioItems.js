import alf from "../assets/portfolio/alfonsino.png";
import inventario from "../assets/portfolio/inventario.png";
import blog from "../assets/portfolio/blog.png";
import tendit from "../assets/portfolio/tendit.png";
import valore24 from "../assets/portfolio/valore24.png";
import diverse from "../assets/portfolio/diverse.png";
import diversecommerce from "../assets/portfolio/diversecommerce.png";
import netflix from "../assets/portfolio/netflix.png";
import IconsDict from "./IconsDict";
export const Items = [
  {
    id: 0,
    title: "Alfonsino Partner",
    image: alf,
    subtitle: "App development",
    bodyShort: "alfPartnerP",
    bodyLong: "alfPartnerB",
    completed: "20/10/2020",
    stackItems: [
      { img: IconsDict.react, text: "React-native" },
      { img: IconsDict.redux, text: "redux" },
      { img: IconsDict.java, text: "java" },
      { img: IconsDict.typescript, text: "typescript" },
    ],
  },
  {
    id: 1,
    title: "tendit",
    image: tendit,
    subtitle: "App development, UX, back-end, website development",
    bodyShort: "tenditP",
    bodyLong: "tenditB",
    stackItems: [
      { img: IconsDict.expo, text: "expo" },
      { img: IconsDict.elephant, text: "Postgress" },
      { img: IconsDict.react, text: "React-native" },
      { img: IconsDict.sequelize, text: "Sequelize" },
      { img: IconsDict.adobexd, text: "Adobe XD" },
      { img: IconsDict.illustrator, text: "Adobe illustrator" },
      { img: IconsDict.flaticon, text: "Flaticon" },
      { img: IconsDict.coolors, text: "Coolors" },
      { img: IconsDict.colorslurp, text: "Color Slurp" },
      { img: IconsDict.jest, text: "jest" },
      { img: IconsDict.typescript, text: "typescript" },
      { img: IconsDict.apollo, text: "Apollo" },
      { img: IconsDict.graphql, text: "Graphql" },
    ],
  },
  {
    id: 2,
    title: "Inventario",
    image: inventario,
    subtitle: "App development, UX, Back-end development",
    bodyShort: "inventarioP",
    bodyLong: "inventarioB",
    completed: "15/09/2020",
    stackItems: [
      { img: IconsDict.react, text: "React-native" },
      { img: IconsDict.redux, text: "Redux" },
      { img: IconsDict.firebase, text: "firebase" },
      { img: IconsDict.typescript, text: "typescript" },
    ],
  },
  {
    id: 3,
    title: "Valore-24",
    image: valore24,
    subtitle: "Feature integration, website development",
    bodyShort: "valore24P",
    bodyLong: "valore24B",
    completed: "01/09/2020",
    stackItems: [
      { img: IconsDict.react, text: "React" },
      { img: IconsDict.redux, text: "Redux" },
      { img: IconsDict.chartjs, text: "Chartjs" },
      { img: IconsDict.mat, text: "Material Ui" },
    ],
  },
  {
    id: 4,
    title: "Diverse agency",
    image: diverse,
    subtitle: "Website development",
    bodyShort: "diverseP",
    bodyLong: "diverseB",
    stackItems: [
      { img: IconsDict.dj, text: "Django" },
      { img: IconsDict.css, text: "CSS" },
      { img: IconsDict.html, text: "Html" },
      { img: IconsDict.typescript, text: "Gunicorn" },
    ],
  },
  {
    id: 5,
    title: "Blog app",
    image: blog,
    subtitle: "Blogging app, mobile app, back-end, showcase",
    bodyShort: "blogappP",
    bodyLong: "blogappB",
    stackItems: [
      { img: IconsDict.react, text: "React-native" },
      { img: IconsDict.expo, text: "Expo" },
      { img: IconsDict.apollo, text: "Apollo" },
      { img: IconsDict.graphql, text: "Graphql" },
      { img: IconsDict.node, text: "Node js" },
      { img: IconsDict.typescript, text: "Typescript" },
    ],
  },
  {
    id: 6,
    title: "Diverse e-commerce",
    image: diversecommerce,
    subtitle: "E-commerce development, showcase",
    bodyShort: "diversecommerceP",
    bodyLong: "diversecommerceB",
    stackItems: [
      { img: IconsDict.react, text: "React" },
      { img: IconsDict.redux, text: "Redux" },
      { img: IconsDict.firebase, text: "Firebase" },
      { img: IconsDict.graphql, text: "Stripe" },
      { img: IconsDict.node, text: "Node js" },
    ],
  },
  {
    id: 7,
    title: "Netflix",
    image: netflix,
    subtitle: "Entertainment app, showcase",
    bodyShort: "netflixP",
    bodyLong: "netflixB",
    stackItems: [
      { img: IconsDict.react, text: "React" },
      { img: IconsDict.firebase, text: "Firebase" },
      { img: IconsDict.graphql, text: "Styled-Components" },
      { img: IconsDict.node, text: "Heroku" },
    ],
  },
];
