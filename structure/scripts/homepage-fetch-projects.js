//Fetch to api to get title and description for project card section
const load = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await promise.json();
    console.log(data)
    const newData = data.slice(0,3);
    console.log(newData);
    for (let i = 0; i < newData.length; i++) {
        const element = newData[i];
        let title = element.title;
        let txt = element.body;
        let projectTitle = document.getElementById("project-title-"+ i);
        let projectText = document.getElementById("project-text-"+ i);
        projectTitle.innerHTML = title;
        projectText.innerHTML = txt;
    }
    
}
