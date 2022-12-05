import {page, render } from "./lib.js";
import {getUserData} from "./util.js";
import {updateNav} from "./views/nav.js"

//const { render } = require("lit-html");






const main = document.getElementById("main-content");


page(decorateContext);

page("/", ()=>console.log("homeView"));
page("/home", ()=>console.log("homeView"));
page("/login", ()=>console.log("loginView"));
page("/register", ()=>console.log("registerView"));
page("/catalog", ()=>console.log("catalogView"));
page("/createe", ()=>console.log("createView"));
page("/details/:id", ()=>console.log("detailsView"));
page("/edit/:id", ()=>console.log("editView"));
page("/search", ()=>console.log("searchView"));

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}