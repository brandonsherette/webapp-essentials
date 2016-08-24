#Web App Essentials
Still Under Development

#Purpose
A quick template for creating and building out generic web applications.

#Features
##Gulp
Various tasks such as building out application, and running application in Express Server.

##SystemJS
Allows for module loading.

##Babel
JavaScript Compiler

##Application Minification
Minifies main.js and any imported modules as well as SystemJS and JSPM Packages.

##Express 
Testing on development server and testing minified version in build server, both utilizing Express.

#Gulp Commands
`gulp build`

Cleans the build directory, and moves and builds out the src files to the build directory.

`gulp serve-dev`

Serves the application in development environment.

`gulp serve-build`

Serves the applicaiton in a build / production environment (minified files).