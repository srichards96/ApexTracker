# ApexTracker
Stat lookup for ApexLegends

> Based on Apex Tracker video by [Traversy Media](https://www.youtube.com/watch?v=8z2qRln9tnc).

> Backend Node server taken from video. Frontend built with Angular instead of Vuejs.

## Setup instructions
1. Clone repository and navigate into folder
2. Run ```npm install``` to install backend dependencies
3. Create a file named ```config.env``` and fill it with the following values
    * ```PORT={{port number}}```
    * ```MODE={{'development' or 'production'}}```
    * ```TRACKER_API_URL={{url of api}}```
    * ```TRACKER_API_KEY={{key for api}}```
4. Run ```node server``` to start the server
### If in development mode...
1. Make sure that ```MODE``` inside ```config.env``` is set to ```'development'```
2. Navigate into ```client``` folder
3. Run ```npm install``` to install frontend dependencies
4. Run ```ng serve``` to run frontend on ```http://localhost:4200```
5. Frontend should now be accessible at ```http://localhost:4200```

In development mode the backend sets CORS headers so that ```http://localhost:4200``` can interact with the backend.

### If in production mode...
1. Make sure that ```MODE``` inside ```config.env``` is set to ```'production'```
2. Navigate into ```client``` folder
3. Run ```npm install``` to install frontend dependencies
4. Run ```ng build --prod``` to build frontend in production mode
    * This should output the built code in the ```public``` folder (in the root folder of the project)
5. Frontend should now be accessible at ```http://localhost:{{port}}``` (where ```{{port}}``` is the ```PORT``` value in ```config.env```) while ```server.js``` is running

## Deployment instructions (Heroku)
1. Create a new Heroku app.
2. Go to the deploy tab and choose to deploy using Heroku Git.
3. Follow the instructions for logging in, cloning the Heroku Git repository, and entering the repository's folder.
4. Move the following files and folders into the repository folder
    * ```public``` (folder)
    * ```routes``` (folder)
    * ```config.env```
    * ```Procfile```
    * ```package.json```
    * ```package-lock.json```
    * ```server.js```
5. Commit and push the changes to the Heroku Git repository
