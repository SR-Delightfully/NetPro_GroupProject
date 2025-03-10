# NetPro_GroupProject
### INTERNET PROGRAMMING - GROUP PROJECT
#### Team Members: 
- Rachel Herron
- Helene Rousseau
- Sabrina Robinson<br><br>

<hr>

### Why use react for this project?

<!-- When creating the frontend of an e-commerce website with a focus on learning the fundamentals of html and css, but requires a multitude of components react  -->

With the task being to make an e-commerce website,<br>
we foresaw a need for many components of which would share the same<br> styles and attributes. Fearing that we may have to copy paste a lot of our<br> code, we chose to use reactjs to handle our dilema.<br>

While ReactJs may be officially deprecated (as of feb. 14th, 2025),<br> it is a Javascript library that is easy to learn. Creating our project with reactJs<br> allows us to directly insert javascript into our html code and return jsx,<br> cleaning up our code and making it easier for us to maintain our focus<br>
on the html and css structures of the website.<br>

If we wanted to implement a server and allow for a large userbase, then reactJs may notbe feasable and we should consider adapt our code to work with either vite or nextJs.
<hr>

#### Before you run the project: 
ensure that you have downloaded and successfully installed nodejs.

><hr><br>
>
> To verify, <br>
please open the terminal on your IDE and run the commands provided below. If you're using VSC you may use the shortcut: <br><br>`ctrl+j`<br><br> to quickly open the terminal.  
><br>

commands to test a successful installation of nodejs: 

><hr><br>
>
>- `npm -v`
>- `npx -v`
>- `nodejs -v`<br><br>
>
#### explaination:
What we're doing here is simply checking the version of the packages installed on your current machine. If any of these commands return an error then nodejs might not be installed on your machine or it was installed incorrectly.

#### More specifically:
if you encounter the error<br> 

`[insert error rachel recieved here (i dont remember)]`<br>
<br>
you may need to verify your machine's execution policy: <br>

> <hr><br>
> To do so,<br>
> open your windows powershell and run this command:<br>
> <br>`Get-ExecutionPolicy`<br><br> if it returns anything other
> than "remoteSigned" run this command:<br><br>
> `Set-ExectutionPolicy remoteSigned`<br><br>
> you'll be prompted with a confirmation query,<br> 
> which you can accept by entering 'Y' in the powershell.<br> 
> This will confirm the changes and you should be able to run the project.<br><br>
<br>

Once you are sure that your nodejs, npm and npm are functional you can go ahead and open your project!<br>
###### (cd into the app folder and run the cmd `npm start`!)


<br><br>
<hr>
<br><br>

# Create-React-App creation documentation:

## Getting Started with Create React App

<br>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
