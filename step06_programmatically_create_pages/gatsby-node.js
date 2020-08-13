exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: { 
            // Data passed to context is available
            // in page queries as GraphQL variables.
            name: "Zia",
         },
    });
    console.log("End of Gatsby Node File");
}