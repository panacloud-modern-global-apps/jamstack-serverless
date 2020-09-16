# Learn JAMstack Serverless in Baby Steps

Here we will learn to develop blazingly fast and scalable modern websites and apps using JAMstack, GraphQL and Serverless technologies.

In this repo we will learn how to develop JAMstack Serverless Websites and Apps using React, Gatsby.js, Contentful, Serverless Functions, Netlify, FaunaDB, Hasura, Firebase, and GitHub Actions. 

If you don't have web programming background or don't know React we suggest you start from this [app development foundation bootcamp](https://panacloud.github.io/bootcamp-2020/).

Before starting the steps we suggest reading the following articles which cover the concepts, technologies, architecture and companies behind modern fullstack websites and apps:

Modern Applications

Modern applications are built with a combination of modular architecture patterns like micro services (instead of monolithic)  and components, serverless operational models, event driven with data stored in modern globally distributed databases, services connected with GraphQL Query and realtime subscription APIs, and agile developer processes that allow organizations to innovate faster while reducing risk, time to market, and total cost of ownership.

[AWS Modern Applications](https://aws.amazon.com/modern-apps/)

[FAQ](https://aws.amazon.com/modern-apps/faqs/)

[Your Guide to Modern Cloud-Based Application Development](https://relevant.software/blog/modern-cloud-based-application-development/)

[The rise of 'modern applications': Why you need them](https://searchcio.techtarget.com/feature/The-rise-of-modern-applications-Why-you-need-them)


SSG vs SSR vs CSR

If you build everything as a Single Page App (SPA) using React (Using Create React App) this will be the result: [Stop using React](https://dev.to/ender_minyard/why-you-should-stop-using-react-g7c). Please do read the comments in the article.

[Server Side Rendering vs Static Site Generation](https://dev.to/matfrana/server-side-rendering-vs-static-site-generation-17nf)

[Next.js vs. GatsbyJS: A developer’s perspective](https://blog.logrocket.com/next-js-vs-gatsbyjs-a-developers-perspective/)

[Which To Choose in 2020: NextJS or Gatsby?](https://medium.com/frontend-digest/which-to-choose-in-2020-nextjs-vs-gatsby-1aa7ca279d8a)

[What is the point of SSR these days?](https://github.com/vercel/next.js/discussions/10437)

[Hey Next.js, Is Server Side Rendering Dead?](https://arunoda.me/blog/hey-nextjs-is-server-side-rendering-dead)

[Static is the new Dynamic](https://rauchg.com/2020/2019-in-review#static-is-the-new-dynamic)

[Latest Next.js has SSG](https://nextjs.org/blog/next-9-5)

[Gatsby won against Next.js in this head-to-head](https://dev.to/notsidney/gatsby-won-against-next-js-in-this-head-to-head-37ka)


[Even Next.js 9.3+ recommends SSG when possible, only use SSR when absolutely necessary](https://nextjs.org/docs/basic-features/pages)

[Next.js vs. Gatsby vs. Create React App](https://leerob.io/blog/nextjs-gatsby-create-react-app)

Therefore we will be using Gatsby for JSMstack to do SSG with CSR when required. You cannot implement SSR with Gatsby, but in our opinion SSR is not Jamstack-y anyway.


JAMstack

[Introducing the JAMstack](https://www.infoq.com/news/2020/04/introducing-jamstack/)

[Client-serverless is the 4th generation application model](https://www.infoworld.com/article/3564264/client-serverless-is-the-4th-generation-application-model.html).

[Jamstack brings front-end development back into focus](https://sdtimes.com/webdev/jamstack-brings-front-end-development-back-into-focus/)

[The state of the Jamstack in 2020](https://sdtimes.com/webdev/the-state-of-the-jamstack-in-2020/)

[The JAMStack and the startups building it](https://technically.dev/posts/the-jamstack-and-the-startups-building-it)


[JAMstack](https://jamstack.org/)

[JAMstack Best Practices](https://jamstack.org/best-practices/)

[Static First: Pre-Generated JAMstack Sites with Serverless Rendering as a Fallback](https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/)

[Celebrating 1 million developers: What’s next for Netlify and the Jamstack](https://www.netlify.com/blog/2020/08/03/celebrating-1-million-developers-whats-next-for-netlify-and-the-jamstack/)

[New to JAMstack? Everything You Need to Know to Get Started](https://snipcart.com/blog/jamstack)

[WordPress Co-Founder Matt Mullenweg Is Not a Fan of JAMstack](https://thenewstack.io/wordpress-co-founder-matt-mullenweg-is-not-a-fan-of-jamstack/)

[The Rise of Full Stack Serverless at Amazon Web Services](https://thenewstack.io/theres-a-service-for-that-amazon-web-services-and-serverless-computing/)

[Extending JAMstack: 10 APIs and Tools to check out in 2020](https://www.stackbit.com/blog/extending-jamstack-2020/)


Gatsby.js

[Gatsby Raises $28M in Series B Funding to Become the Way the Web is Built](https://www.businesswire.com/news/home/20200527005268/en/Gatsby-Raises-28M-Series-Funding-Web-Built)

[Gatsby for blazing fast Websites and Apps](https://www.gatsbyjs.org/)

[Gatsby JS stands on the shoulders of thousands](https://www.infoworld.com/article/3540708/gatsby-js-stands-on-the-shoulders-of-thousands.html)

[Turn Your Gatsby Site into a Progressive Web App](https://www.gatsbyjs.org/blog/100days/pwa/) 

[Making Gatsby a PWA: Service Worker and Web App Manifest](https://www.digitalocean.com/community/tutorials/gatsbyjs-gatsby-pwa)



Contentful (Headless CMS)

[Contentful raises $80M Series E round for its headless CMS](https://techcrunch.com/2020/06/17/contentful-raises-80m-series-e-round-for-its-headless-cms/)

[Contentful: The content platform for the digital-first era](https://www.contentful.com/)

[Headless, decoupled and Contentful: A non-technical explanation for the confused](https://www.contentful.com/blog/2019/02/04/difference-between-headless-decoupled-contentful/)


Netlify

[Netlify nabs $53M Series C as microservices approach to web development grows](https://techcrunch.com/2020/03/04/netfily-nabs-53m-series-c-as-micro-services-approach-to-web-development-grows/)

[About Netlify](https://www.netlify.com/about/)

[Netlify Edge](https://www.netlify.com/products/edge/)

[Introducing Edge Handlers](https://www.netlify.com/blog/2020/05/27/introducing-edge-handlers-in-preview/)

Alternatives to Netlify for deploying Fullstack Serverless apps and websites:

[AWS Amplify](https://aws.amazon.com/amplify/)

[Google Firebase](https://firebase.google.com/)

[Vercel](https://vercel.com/)

[Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)


Serverless

[Why serverless is the future of software and apps](https://ttpsc.com/en/blog/why-serverless-is-the-future-of-software-and-apps/)

[The impact of serverless on the future of cloud technology](https://cio.economictimes.indiatimes.com/news/cloud-computing/the-impact-of-serverless-on-the-future-of-cloud-technology/77275273)

[Serverless Architecture – The Future of Cloud Computing](https://www.fortunesoftit.com/serverless-the-future-of-cloud-computing/)

[From Frontend to Fullstack!](https://dev.to/fllstck/from-frontend-to-fullstack-2ah4)

[The Rise of Full Stack Serverless at Amazon Web Services](https://thenewstack.io/theres-a-service-for-that-amazon-web-services-and-serverless-computing/)


[Chapter 1 of Full Stack Serverless](https://learning.oreilly.com/library/view/full-stack-serverless/9781492059882/ch01.html)


[What is serverless? Serverless computing explained](https://www.infoworld.com/article/3406501/what-is-serverless-serverless-computing-explained.html)

[Future of Serverless Architecture](https://www.infoq.com/news/2020/07/future-serverless-architecture/)

[AWS Lambda Serverless Functions by Netlify](https://www.netlify.com/products/functions/)

[Read Summary and Predictions of the paper on Cloud Programming Simplified: A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)


Serverless FaunaDB

[FaunaDB Closes $27M Series A, Welcomes New Leadership](https://news.crunchbase.com/news/faunadb-closes-27m-series-a-welcomes-new-leadership/)

[Serverless FaunaDB](https://fauna.com/)

[The Effortless Backend for Jamstack Applications with GraphQL](https://www2.fauna.com/jamstack)

Alternatives are MongoDB, Amazon DynamoDB, and Google Firestore


GraphQL Services

[Hasura Raises $25M in Series B Funding](https://www.finsmes.com/2020/09/hasura-raises-25m-in-series-b-funding.html)

[Enterprise startup Hasura grabs $25 million in a round led by Lightspeed Venture Partners](https://thetechportal.com/2020/09/10/enterprise-startup-hasura-25-million-funding-round-lightspeed-venture-partners/)

[Hasura Website](https://hasura.io/)

[Approaches to add dynamic content to statically generated sites (JAMStack)](https://hasura.io/blog/approaches-to-add-dynamic-content-statically-generated-sites-jamstack/)

[Dynamic JAMStack with Gatsby and Hasura GraphQL](https://hasura.io/blog/dynamic-jamstack-with-gatsby-hasura-graphql/)

[Building a realtime chat app with GraphQL Subscriptions](https://dev.to/dabit3/building-chatt---a-real-time-multi-user-graphql-chat-app-3jik)

[Hasura is ideal for building realtime GraphQL subscriptions](https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)

[Ramblings: Firebase vs Appsync vs Hasura](https://www.youtube.com/watch?v=mvy79Q3eXsY)


Alternatives to Hasura:

[AWS AppSync is a serverless GraphQL service](https://www.serverless.com/aws-appsync)

[Why Serverless GraphQL Is Better with AWS AppSync](https://thenewstack.io/why-serverless-graphql-is-better-with-aws-appsync/)

[Building a serverless real-time chat application with AWS AppSync](https://aws.amazon.com/blogs/mobile/building-a-serverless-real-time-chat-application-with-aws-appsync/)

[Apollo Server Lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda/)

[Comparing Tools For GraphQL Schema Stitching: Hasura vs. Apollo](https://nordicapis.com/comparing-tools-for-graphql-schema-stitching-hasura-vs-apollo/)


Next.js

[Next.js creator, Vercel, Raises $21 Million with Series A Funding](https://www.globenewswire.com/news-release/2020/04/21/2019124/0/en/Next-js-creator-Vercel-Raises-21-Million-with-Series-A-Funding-Led-by-Accel-to-Transform-Frontend-Experience-for-11-Million-Worldwide-JavaScript-Developers.html)

[How Next.js can help improve SEO](https://blog.logrocket.com/how-next-js-can-help-improve-seo/)

[Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-app)


Serverless Authentication

[Firebase Authentication](https://firebase.google.com/docs/auth)

It is a totally free serverless authentication service. Alternative is AWS Cognito.



CI/CD

You can connect Netlify directly to GitHub Repos. But GitHub actions is also a good choice for CI/CD.

[GitHub Actions](https://github.com/features/actions)



What is Next for Web App Technologies

[An Overview of WebAssembly](https://medium.com/swlh/an-overview-of-webassembly-4ce9bd98aae7)

[Project Fugu by Google, Microsoft, Intel, and Samsung](https://www.chromium.org/teams/web-capabilities-fugu)

[A Practical Overview Of CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)



