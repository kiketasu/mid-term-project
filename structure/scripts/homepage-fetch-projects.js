
projectTitle = document.getElementsByClassName("project-text-title");
projectText = document.getElementsByClassName("project-text-description");

const showDescription = (title, txt) => {
    projectTitle.innerHTML = title;
    projectText.innerHTML = txt;
    

}

const load = async (e) => {
    e.preventDefault();
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await promise.json();
    let title = data.title
    let txt = data.body

    showDescription(title, txt)
}
