In this step we added a client-only route to our Gatsby application. It will have no static HTML assets generated for it, and will only ever be rendered client-side. 

For some pages, none of the page needs to be server rendered, as all data will be loaded live from your API. For example, a user account page that displays a user's personal profile and data. It's only accessible to the user, and the content is completely dynamic. Another example is the checkout funnel of an e-commerce application; the contents of your cart and all of the payment-related pages are completely dynamic and unique for each use.

[Understanding client-only routes](https://www.gatsbyjs.com/docs/client-only-routes-and-user-authentication/#understanding-client-only-routes)

Create Client1.tsx and DefaultClient.tsx components

Create app.tsx page

create gatsby-note.js 


gatsby develop

You can now view the app in the browser.
⠀
http://localhost:8000/






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
