# Rick and Morty React App
A Fun React project to demo basic functionalities

![Rick and Morty](https://images6.alphacoders.com/909/thumb-1920-909641.png)


#

# API
[Rick and Morty API](https://rickandmortyapi.com/)
The application fetches characters Rick & Morty characters from [Rick and Morty API](https://rickandmortyapi.com/). 
The [Rick and Morty API](https://rickandmortyapi.com/) is a RESTful and GraphQL API based on the television show Rick and Morty. You will access to data about hundreds of characters, images, locations and episodes. The [Rick and Morty API](https://rickandmortyapi.com/) is filled with canonical information as seen on the TV show. The Rick and Morty API is open (i.e. no need for authentication & authorization setup) however, a daily limit of 10000 requests is imposed.
[Rick and Morty API - GitHub](https://github.com/afuh/rick-and-morty-api)


# Libraries Used:

- [Material UI](https://mui.com/)
- Axios
- Redux
- Redux Thunk
- [react-icons](https://react-icons.github.io/react-icons/)

#
#
#

# Run App
```
npm start
```

#
#
#

# Deploy to GitHub Pages

```
npm run predeploy
npm run deploy

```
### How to deploy on pages?
https://pages.github.com/

### How to deploy React Applications in GitHub Pages?
https://github.com/gitname/react-gh-pages
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom

#### In package.json
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
//...
 "devDependencies": {
    "gh-pages": "^3.2.3"
  },
//....
"homepage": ".",
or 
"homepage": "https://sarat9.github.io/rick-and-morty-react-fun"
...


#### Errors might face
https://stackoverflow.com/questions/53797321/react-github-pages-deploy-err-aborted-404-not-found

#
#
#
