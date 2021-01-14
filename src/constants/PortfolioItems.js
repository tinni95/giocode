import alf from "../assets/portfolio/alfonsino.png";
import inventario from "../assets/portfolio/inventario.png";
import blog from "../assets/portfolio/blog.png";
import tendit from "../assets/portfolio/tendit.png";
import valore24 from "../assets/portfolio/valore24.png";
import diverse from "../assets/portfolio/diverse.png";
import diversecommerce from "../assets/portfolio/diversecommerce.png";
import netflix from "../assets/portfolio/netflix.png";
import IconsDict from "./IconsDict";
import Profilo from "../assets/previews/alfPartner/profilo.png";
import Login from "../assets/previews/tendit/login.png";
import Upload from "../assets/previews/tendit/upload.png";
import Partner from "../assets/previews/alfPartner/Partner-preview.png";
import Main from "../assets/previews/valore24/main.png";
import Table from "../assets/previews/valore24/table.png";

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
      { img: IconsDict.sequelize, text: "Sequelize" },
      { img: IconsDict.adobexd, text: "Adobe XD" },
      { img: IconsDict.jest, text: "jest" },
      { img: IconsDict.apollo, text: "Apollo" },
    ],
    videos: [
      {
        title: "Login and Apply",
        uri: "https://player.vimeo.com/video/472357500",
        preview: Login,
        body: "tenditPreview1",
      },
      {
        title: "Upload a request",
        uri: "https://player.vimeo.com/video/472357860",
        preview: Upload,
        body: "tenditPreview2",
      },
      {
        title: "User Profile",
        uri: "https://player.vimeo.com/video/472160346",
        preview: Profilo,
        body: "tenditPreview3",
      },
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
    videos: [
      {
        title: "Main Functionality",
        uri: "https://player.vimeo.com/video/472752381",
        preview: Main,
        body:
          "this shows the main functionality developed in valore 24; i.e. adding a new Risk Evaluation",
      },
      {
        title: "Evaluation List",
        uri: "https://player.vimeo.com/video/472752957",
        preview: Table,
        body:
          "This shows the table used to display the evaluation risk, where they can be viewed, deleted and exported as pdf/xlsx",
      },
    ],
  },
  {
    id: 4,
    title: "Diverse agency",
    image: diverse,
    demo: "https://diverseagency.it/",
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
    demo: "https://modest-yalow-12b0b8.netlify.app/",
    github: "https://github.com/tinni95/reactnative-graphql-code-test",
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
    github: "https://github.com/tinni95/React_Ecommerce",
    demo: "https://diverse-ecommerce.herokuapp.com/",
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
    demo: "https://netflix-clone-giocode.herokuapp.com/",
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
