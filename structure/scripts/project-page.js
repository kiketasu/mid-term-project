//Fetch to api to get title and description for the Project card
let projectTitle = document.getElementById("project-page-title");
let projectText = document.getElementById("project-page-text");

const load = async () => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await promise.json();
  console.log(data);
  let title = data[0].title;
  let txt = data[1].body;
  projectTitle.innerHTML = title;
  projectText.innerHTML = txt;
};
