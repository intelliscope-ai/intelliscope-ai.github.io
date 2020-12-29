## Getting it up and running

#### Dependancies

This depends on NodeJS. Install NodeJS before proceeding.

#### Initial Installation

Navigate to the project root directory and run `npm install`. This will install all project dependancies. You may need to do this again if a module not found error appears after pulling a new version.

#### Running development server

Navigate to project root directory and type `npm run dev` in terminal

(Optional) install and setup browser-sync to autoreload page on modifications

## Creating a new page

We will be using pug for templating and server side rendering. Pug templates don't use HTML tags. Instead, they simply use the names of HTML elements and whitespace to define their structure. You establish parent-child relationships between elements using indentation.

For CSS, enter html tag followed by a "." followed by class name. eg: `div.container.main` applies "container" and "main" css class to a div. You can also use `.container` as div tag is implied by default.

#### Step 1 - Create new view

- Inside `views` folder create a new `.pug` file. eg: newpage.pug
- Add code to render page.
- Modify `index.js` to handle new page.

Example:

```js
...
app.get("/linktopage", (req, res) => {
  res.render("newpage", { var: "value" });
});
...
```
