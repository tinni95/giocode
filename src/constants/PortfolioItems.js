import alf from "../assets/portfolio/alfonsino.png";
import inventario from "../assets/portfolio/inventario.png";
import blog from "../assets/portfolio/blog.png";
import bbnb from "../assets/portfolio/bbnb.png";
import astarte from "../assets/portfolio/astarte.png";
import chirurgo from "../assets/portfolio/chirurgo.png";
import tendit from "../assets/portfolio/tendit.png";
import valore24 from "../assets/portfolio/valore24.png";
import diverse from "../assets/portfolio/diverse.png";
import diversecommerce from "../assets/portfolio/diversecommerce.png";
import netflix from "../assets/portfolio/netflix.png";
import IconsDict from "./IconsDict";
import Profilo from "../assets/previews/alfPartner/profilo.png";
import Login from "../assets/previews/tendit/login.png";
import Upload from "../assets/previews/tendit/upload.png";
import Main from "../assets/previews/valore24/main.png";
import bbnbAdmin from "../assets/previews/bbnb/bbnb-admin.png";
import bbnbExpo from "../assets/previews/bbnb/bbnb-ezpo.png";
import Table from "../assets/previews/valore24/table.png";

export const Items = [
  {
    id: 0,
    title: "Astarte",
    image: astarte,
    subtitle: "Mobile App/ Admin App",
    bodyShort: "astarteA",
    bodyLong: "astarteB",
    completed: "2024",
    stackItems: [
      { img: IconsDict.react, text: "React-native" },
      { img: IconsDict.react, text: "React" },
      { img: IconsDict.aws, text: "AWS Amplify" },
      { img: IconsDict.appSync, text: "AWS Appsync" },
      { img: IconsDict.s3, text: "AWS s3" },
      { img: IconsDict.lambda, text: "AWS lambda" },
      { img: IconsDict.typescript, text: "typescript" },
      { img: IconsDict.graphql, text: "graphql" },
    ],
  },
  {
    id: 1,
    title: "BBnbusiness",
    image: bbnb,
    subtitle: "Mobile App/ Admin App",
    bodyShort: "bbnbusinessA",
    bodyLong: "bbnbusinessB",
    completed: "2024",
    stackItems: [
      { img: IconsDict.react, text: "React-native" },
      { img: IconsDict.react, text: "React" },
      { img: IconsDict.aws, text: "AWS Amplify" },
      { img: IconsDict.appSync, text: "AWS Appsync" },
      { img: IconsDict.s3, text: "AWS s3" },
      { img: IconsDict.lambda, text: "AWS lambda" },
      { img: IconsDict.typescript, text: "typescript" },
      { img: IconsDict.graphql, text: "graphql" },
    ],
    videos: [
      {
        title: "Admin",
        uri: "https://player.vimeo.com/video/1002095473",
        preview: bbnbAdmin,
        body: "bbnbAdmin",
      },
      {
        title: "Mobile app",
        uri: "https://player.vimeo.com/video/1002095728",
        preview: bbnbExpo,
        body: "bbnbExpo",
      },
    ],
  },
  {
    id: 223,
    title: "Chirurghi estetici",
    image: chirurgo,
    subtitle: "Mobile App/ Website",
    bodyShort: "chirurgoA",
    bodyLong: "chirurgoB",
    completed: "2024",
    stackItems: [
      { img: IconsDict.react, text: "React-native" },
      { img: IconsDict.react, text: "React" },
      { img: IconsDict.gatsby, text: "Gatsby" },
      { img: IconsDict.gatsby, text: "Gatsby" },
      { img: IconsDict.typescript, text: "typescript" },
    ],
  },
  {
    id: 2,
    title: "tendit",
    completed: "2021",
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
    id: 3,
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
        body: "this shows the main functionality developed in valore 24; i.e. adding a new Risk Evaluation",
      },
      {
        title: "Evaluation List",
        uri: "https://player.vimeo.com/video/472752957",
        preview: Table,
        body: "This shows the table used to display the evaluation risk, where they can be viewed, deleted and exported as pdf/xlsx",
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
    completed: "2020",
    demo: "https://netflix-clone-phi-smoky.vercel.app/",
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
