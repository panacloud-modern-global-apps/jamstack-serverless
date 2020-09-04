[Next.js vs. GatsbyJS: A developer’s perspective](https://blog.logrocket.com/next-js-vs-gatsbyjs-a-developers-perspective/)

[Which To Choose in 2020: NextJS or Gatsby?](https://medium.com/frontend-digest/which-to-choose-in-2020-nextjs-vs-gatsby-1aa7ca279d8a)

[Install Node.js](https://nodejs.org/en/download/)

[Read Gatsby Receipe Announcement](https://www.gatsbyjs.org/blog/2020-04-15-announcing-gatsby-recipes/)

npm install -g gatsby-cli@latest

gatsby new step00_gatsby_typescript_helloworld  https://github.com/gatsbyjs/gatsby-starter-minimal

cd step00_gatsby_typescript_helloworld

npm install gatsby@latest

gatsby recipes

Note: Select Add Typescript to see what is in the recipe

gatsby recipes typescript --install

[Read TypeScript Plugin Docs](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)

Create index.tsx page in src/pages directory, any React component defined in src/pages/*.tsx will automatically become a page.

gatsby develop

You can now view the app in the browser.
⠀
  http://localhost:8000/

[Read this Tutorial](https://www.gatsbyjs.org/tutorial/part-one/)

[Learn more about recipes](https://www.gatsbyjs.org/docs/recipes/)



<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Minimal starter for installing recipes
</h1>

Note that this starter does not include any pages by default.

This starter is meant as a minimal reproduction of a Gatsby project in order to facilitate recipe installation.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    gatsby new my-site https://github.com/gatsbyjs/gatsby-starter-minimal
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-site/
    gatsby develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000`!
