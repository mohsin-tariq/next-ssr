<br />
<p align="center">
  <h1 align="center">NextJS - Server Side Rendering</h3>

  <p align="center">
    SpaceX! An application build in NextJS using ReactJS, TypeScript along with Redux
    <br />
    <br />
    <span><b> Author: <a href="https://www.linkedin.com/in/mohsin-tariq--reactjs/">Mohsin Tariq</a> </b></span><br/>
    <a href="https://nextjs-ssr-eight.vercel.app/"><b>View Demo</b></a>
   </p>
</p>


<!-- APPROACH -->
## Approach
To create Server side application I went with NextJS.
The idea behind going for NextJS was just to provide server side rendering solution along with ReactJS.
Initially when I started the assignment I was thinking to create a simple Frontend ReactJS application and then rendered using ExpressJs. I did a bit of research about
different ways of doing server side rendering and NextJS came as the approach to go ahead to create high performing application supporting SEO. And as this also gave me
an opportunity to learn something new to get added to my profile as well, I decided to go with this approach.

Here's why:
* High Performance
* Server side rendering
* Compatible with ReactJS and suggested on React website
* Demand of NextJS in market is high now 



### Built With
These are few libraries/plugins I used in this approach apart from NextJS.

* [ReactJS](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Typescript](https://www.typescriptlang.org/)
* Linting with [ESLint](https://eslint.org/)
* Formatting with [Prettier](https://prettier.io/)
* Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
* Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)




### Prerequisites
To begin with I assume you have NodeJS installed in your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mohsin-tariq/next-ssr.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```


<!-- SCRIPTS -->
## Scripts
Below are the scripts that can be useful to run application post installation

### To run applicaton on Development server
 ```sh
   npm run dev
   ```

### To Create a build and start build on local
 ```sh
   npm run build
   ```
   ```sh
   npm start
   ```
 
### To run unit test
 ```sh
   npm run test
   ```

### To run unit test and update snapshot
 ```sh
   npm run test -- -u
   ```
### To run unit test coverage report
 ```sh
   npm run test:coverage
   ```
### To run unit test coverage report and update snapshot
 ```sh
   npm run test:coverage -- -u
   ```
Note: Once you run the above command you can go to project and go inside coverage folder and open index.html, this will give you the full unit coverage report
of all the files. And once you run above command you will also see a coverage summary on your command prompt.
Below is the one generated from above command:
![image](https://user-images.githubusercontent.com/7425342/108430002-9ba5c700-7238-11eb-8d88-8bc97694080f.png)
      
### Lint Check
 ```sh
   npm run lint
   ```
### Type Check
 ```sh
   npm run type-check
   ```
### Run all (lint, type-check and test)
 ```sh
   npm run test-all
   ```

## Lighthouse Performance Report Screenshot
![image](https://user-images.githubusercontent.com/7425342/108430880-fa1f7500-7239-11eb-9479-3b5c05e86d92.png)
