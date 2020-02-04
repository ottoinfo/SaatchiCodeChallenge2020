# Saatchi Art Code Challenge

In this example, we have an art browse app partially written.

You can run the app with `yarn dev` ( this will install and start service ) and access it via localhost:3000 in the browser.

There are two Routes available:

[Artworks - the VIEW you will update](http://localhost:3000/challenge/artworks)

[Instructions - all the tasks we would like you to complete](http://localhost:3000/challenge/instructions)

The actual [Challenge Markdown File](public/CHALLENGE.md) can be found in the `public` folder

#### Project Setup

We have installed a basic setup on NEXT.js with React and Redux. There is no special knowledge needed for this Framework (it is what we use in house), but you can read over the docs if you would like.

The framework adds HMR (hot module reloading) for you and the only time you should have to restart the server is if you make a change to the Express framework (you should NOT have to modify the EXPRESS server). When in doubt try refreshing browser window. We have also added [Chrome Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to the projects middleware. **The `REDUX` setup is already added to the APP**.

#### Files you Should Touch

The files you should touch are located in `apps/challenge` and `reducers.js`. You may see comments at the top of files; these are just a suggestion, but if you feel that you need to touch a file or edit something, go for it.

#### Adding a Package

Feel free to add any packages you need, example: `yarn add dompurify`. All packages will be available after download completion. You should **NOT** have to restart the APP.

#### End Result

In the end we want the app to look like this:

![SampleApp](https://user-images.githubusercontent.com/643526/73705331-7e906b80-46aa-11ea-9fa7-e98f37b6319b.gif)
