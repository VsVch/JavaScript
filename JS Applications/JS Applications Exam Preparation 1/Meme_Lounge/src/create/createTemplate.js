import { html } from './../../node_modules/lit-html/lit-html.js';

export let createTemplate = (form) => html`
<section id="create-meme">
    <form @submit=${form.submitHandler} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">${form.title}</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">${form.description}</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">${form.imageUrl}</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`