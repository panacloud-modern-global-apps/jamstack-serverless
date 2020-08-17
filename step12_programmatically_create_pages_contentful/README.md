In this step we will programmatically create pages from the data fetched from Contentful at build time. Review Step 06 before continuing with this step.

Now continuing from step 11.

Update the content model of the space you created for previous post and add a Slug in Blog post content model.

[Creating an automated slug with Contentful](https://www.contentful.com/blog/2019/11/29/creating-automated-slug-with-contentful/)

Update and add a few more Blog post entries.

Create tempalate blog-post.tsx in templates directory for the page created dynamically

Create gatsby-node.js in the root, and dynamically create pages at build time

Add links to the dynamically created pages in the index.tsx page

gatsby develop

You can now view the links to the dynamically created blog posts in the browser.
⠀
http://localhost:8000/

Note that this dynamic page is created at build time just like the pages that are in the pages directory are created at build time.

Also note that build time is not run in the browser but on your machine using Node.js on your machine and we build static pages at build time.

Gatsby is also working to do implement this functionality in another way:

[RFC: File System Routing Improvements](https://github.com/gatsbyjs/gatsby/pull/24463)




We want to keep envirnoment variables seprate in a .env file, and not commiting in repo

 npm i dotenv --save

 Create a ".env" file at the root and define the following two envirnoment variables

CONTENTFUL_SPACE_ID=your_space_id_grab_it_from_contentful

CONTENTFUL_ACCESS_TOKEN=your_token_id_grab_it_from_contentful

require and config dotenv package in gatsby-config.js file


gatsby develop

You can view the GraphQL Explorer at:

http://localhost:8000/___graphql

select the allContentfulBlogPost/edges/node in the GraphQL Explorer and create the Query and run it to test it.

Update index.tsx

You can now view the website with Contentful blog post title content in the browser.
⠀
http://localhost:8000/

Before commiting your code to git add .env in .gitignore




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
