function generateProjects(count) {
  const projectTemplate = {
    name: '',
    image: '',
    technologies: '',
    summary: '',
    deployment: '',
    visible: true,
  };
  return Array(count).fill({...projectTemplate});
}

const projectList = generateProjects(9);  // Creates 9 empty projects

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