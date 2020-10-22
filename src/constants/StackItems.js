import IconsDict from "./IconsDict";

export const frontEndStackItems = [
  { img: IconsDict.react, text: "React-native \n React" },
  { img: IconsDict.html, text: "html" },
  { img: IconsDict.css, text: "css" },
  { img: IconsDict.typescript, text: "typescript" },
  { img: IconsDict.redux, text: "redux" },
  { img: IconsDict.jest, text: "jest" },
  { img: IconsDict.expo, text: "expo" },
  { img: IconsDict.mat, text: "material UI" },
];

export const backEndStackItems = [
  { img: IconsDict.graphql, text: "Graphql" },
  { img: IconsDict.firebase, text: "Firebase" },
  { img: IconsDict.apollo, text: "Apollo" },
  { img: IconsDict.elephant, text: "Postgress" },
  { img: IconsDict.sequelize, text: "Sequelize" },
  { img: IconsDict.node, text: "Node js" },
  { img: IconsDict.SocketIO, text: "Socket-io" },
  { img: IconsDict.redis, text: "Redis" },
];

export const designStackItems = [
  { img: IconsDict.adobexd, text: "Adobe XD" },
  { img: IconsDict.illustrator, text: "Adobe illustrator" },
  { img: IconsDict.photoshop, text: "Adobe Photoshop" },
  { img: IconsDict.flaticon, text: "Flaticon" },
  { img: IconsDict.webflow, text: "Webflow" },
  { img: IconsDict.figma, text: "Figma" },
  { img: IconsDict.coolors, text: "Coolors" },
  { img: IconsDict.colorslurp, text: "colorSlurp" },
];

export default [...designStackItems, backEndStackItems, frontEndStackItems];
