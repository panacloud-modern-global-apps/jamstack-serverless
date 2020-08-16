module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `slazx5iwmrs1`,
        accessToken: `l8JPFmzcxmLaTYybqUcUHNT2_BTRMs9nwbPgN1BuXvM`,
      },
    },
  ],
};
