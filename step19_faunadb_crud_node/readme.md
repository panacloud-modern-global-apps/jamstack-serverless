# Create FaunaDB Database, Setup a Collection, and Create an Index with Node.js

FaunaDB Overview:

[What is FaunaDB](https://docs.fauna.com/fauna/current/introduction)

[FaunaDB review: Fast NoSQL database for global scale](https://www.infoworld.com/article/3489459/faunadb-review-fast-nosql-database-for-global-scale.html)

[Fauna Raises $27 Million to Continue Providing Cutting Edge Solutions for Developers](https://www.dbta.com/Editorial/News-Flashes/Fauna-Raises-27-Million-to-Continue-Providing-Cutting-Edge-Solutions-for-Developers-141679.aspx)

[Madrona leads $27M round in Twitter vets’ Fauna database startup; Bob Muglia named chairman](https://www.geekwire.com/2020/madrona-leads-27m-round-twitter-vets-fauna-database-startup-bob-muglia-named-chairman/)

[Fauna Named to Database Trends and Applications 2019 DBTA 100](https://www.businesswire.com/news/home/20190612005222/en/Fauna-Named-Database-Trends-Applications-2019-DBTA/)

[Consistency without Clocks: The FaunaDB Distributed Transaction Protocol](https://fauna.com/blog/consistency-without-clocks-faunadb-transaction-protocol)


To Do Steps:

[Signup for FaunaDB Service](https://dashboard.fauna.com/accounts/register)

Create a Project Directory

npm init

[Install DotEnv](https://www.npmjs.com/package/dotenv)

npm install dotenv --save

npm install faunadb --save


[We will follow this tutorial](https://docs.fauna.com/fauna/current/tutorials/crud)

Go to fauna dashboard setting section create a new account API key and paste it in .env file with the name FAUNADB_ADMIN_SECRET=my-admin-secret

Write and Run Node Programs:

node step0-create-database

Do the same with all the nine steps 