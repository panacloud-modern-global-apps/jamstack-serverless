After completing step 05:

We want to create a page dynamically given the data from any source. However, to keep the step simple we are creating a page dynamically with static data.

Usually we will create these dynamic pages by fetching data from headless CMS like Contentful at Build Time.

In this step we are not dynamically building pages at runtime but at build time, just like the pages that are in the pages directory are created at build time. The only difference between these two methods of building pages is statically or dynamically, both at build time. In came of dynamically we basically are fetching data (may be from Headless CMS) at build time and dynamically building pages on the basis of data.

[Where Does Logic Go on Jamstack Sites?](https://css-tricks.com/where-does-logic-go-on-jamstack-sites/)

[Build time vs runtime](https://www.gatsbyjs.com/docs/overview-of-the-gatsby-build-process/#build-time-vs-runtime)

[Build Time and Client Runtime Data Fetching](https://www.gatsbyjs.com/docs/data-fetching/)

[Creating and Modifying Pages](https://www.gatsbyjs.cn/docs/creating-and-modifying-pages/)

[Read Create Pages Tutorial](https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages)

[Node API's](https://www.gatsbyjs.cn/docs/node-apis/)

Create gatsby-node.js in the root

Create tempalate dynamic-page.tsx in templates directory for the page created dynamically

Add a link to the my-dynamic-page page in the index.tsx page

gatsby develop

You can now view the dynamically created component page in the browser.
⠀
http://localhost:8000/my-dynamic-page

Note that this dynamic page is created at build time just like the pages that are in the pages directory are created at build time.

Also note that build time is not run in the browser but on your machine using Node.js on your machine and we build static pages at build time.

Gatsby is also working to do implement this functionality is another way:

[RFC: File System Routing Improvements](https://github.com/gatsbyjs/gatsby/pull/24463)






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
