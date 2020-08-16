module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `your_space_id_grab_it_from_contentful`,
        accessToken: `your_token_id_grab_it_from_contentful`,
      },
    },
  ],
};
