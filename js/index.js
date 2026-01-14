const routes = {
    'index.html': '<p>Hello World</p>',
    'card': './elements/card/index.html',
    'blog-card': './elements/blog-card/index.html',
};

function updateContent() {
    const path = window.location.pathname.split('/').at(-1)
    const htmlPath = routes[path];

    const appDiv = document.getElementById("app");
    appDiv.innerHTML = htmlPath;
}

//toggles back and for between history
window.onpopstate = updateContent;

//when broweser loads it will load the content
window.onload = updateContent;