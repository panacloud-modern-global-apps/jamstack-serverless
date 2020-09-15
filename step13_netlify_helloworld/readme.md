[Signup on Netlify](https://app.netlify.com/signup)

Install Globally:

npm install -g yarn

npm install -g netlify-cli 

[Watch this video](https://www.youtube.com/watch?v=RL_gtVZ_79Q&feature=youtu.be&t=812)

[Read this Document](https://cli.netlify.com/netlify-dev/)

Create project folder named "Step13_netlify_helloworld"

Change to project directory:

cd step13_netlify_helloworld

Create hello world index.html file in public folder in the project directory.

Create netlify.toml file

You can also Start the Local Server:

netlify dev

Open in the Browser:

http://localhost:8888

Login to Netlify on Local Machine to start the publishing process:

netlify login

To publish on Netlify:

netlify deploy --prod

[Published Web Site](https://step13-netlify-helloworld.netlify.app/)

Notice that the tool has created .netlify directory in your project folder.

Now the site is published and you can copy the link given by the tool in the browser.

Add .gitignore so that .netlify directory not pushed to github

Bug: Currently there is some bug in the netlify dev tool, once the .netlify folder is created the dev tool stops working. Therefore, you will have to delete .netlify directory to restart netlify dev.

Very Important Note:
For teaching purposed in order to help the students understand and manage, we have included all the steps in a single GitHub repo. For development we would suggest that single project should be in a single repo and that repo connected to Netlify, thus making development easy. Local develop will be done in netlify dev and the code is pushed it is automatically deployed on Netlify.


Alternatives to Netlify:

[Google Firebase](https://firebase.google.com/)

[Vercel](https://vercel.com/)

[Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)

[AWS Amplify](https://aws.amazon.com/amplify/)

[Battle of the Jamstack platforms — Netlify, Vercel, AWS](https://www.lambrospetrou.com/articles/battle-of-jamstack-platforms-netlify-vercel-aws/)

Must Read:

[New to JAMstack? Everything You Need to Know to Get Started](https://snipcart.com/blog/jamstack)





