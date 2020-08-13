exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Zia",
         },
    });
    console.log("End of Gatsby Node File");
}