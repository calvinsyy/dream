const generateProject = () => ({
  name: '',
  image: '',
  technologies: '',
  summary: '',
  description: '',
  repository: '',
  deployment: '',
  video: '',
  visible: true,
});

const projectList = Array.from({ length: 20 }, generateProject);


export default projectList;

// EMPTY PROJECT TEMPLATE

// {
//   name: "",
//   image: "../../images/",
//   technologies: "",
//   summary: "",
//   description: "",
//   repository: "",
//   deployment: "",
//   video: "",
//   visible: true,
// },