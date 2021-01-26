# Readme - Intelliscope Site

## Getting it up and running for development

### Dependancies

This depends on NodeJS. Install NodeJS before proceeding.

### Initial Installation

Navigate to the project root directory and run `npm install`. This will install all project dependancies. You may need to do this again if a module not found error appears after pulling a new version.

### Running a local development server

Navigate to project root directory and type `npm run dev` in terminal

(Optional) install and setup browser-sync to autoreload page on modifications

## Creating Static HTML files for hosting

-   Install dependancies `npm install`
-   Run gulp function to convert pug files to .html and save in public directory `gulp pugToHtml`

## Creating a new page

We will be using pug for templating and server side rendering. Pug templates don't use HTML tags. Instead, they simply use the names of HTML elements and whitespace to define their structure. You establish parent-child relationships between elements using indentation.

For CSS, enter html tag followed by a "." followed by class name. eg: `div.container.main` applies "container" and "main" css class to a div. You can also use `.container` as div tag is implied by default.

### Steps

1. Inside `views` folder create a new `.pug` file. eg: newpage.pug
2. Add pug code to render views on the page.

```js
extends layout
//- blocks define content injection points
block title
  title theBRIC | new page

block description
  meta(name='description', content='just a blank page')

block extralinks
//-   add custom links here
//-   link(rel='stylesheet', type='text/css', href='/css/custom.css')

block content
    section#header
        div.container
            h1.main blank page
    p blank text
```

3.  Modify `index.js` to handle new page.

    Example:

```js
...
app.get("/linktopage", (req, res) => {
  res.render("newpage", { var: "value" });
});
...
```
