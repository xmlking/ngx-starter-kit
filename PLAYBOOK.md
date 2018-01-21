DIY Playbook
============

Do-it-yourself step-by-step instructions to create this project structure from scratch.


### Prerequisites  
| Software                      | Version  | Optical  |  
|-------------------------------|----------|----------| 
| Node                          | v9.4.0   |          | 
| Angular CLI                   | v1.6.5   |          | 
| @nrwl/schematics              | v0.6.15  |          | 


### Install Prerequisites
```bash
# install or Update Node with brew or NVM
brew update
brew install node
#brew upgrade node
```

#### Install Global Packages
```bash
npm install -g @nrwl/schematics
npm install -g @angular/cli
# temp workaround
npm un -g @angular-devkit/core @angular-devkit/schematics @schematics/angular @nrwl/schematics @angular/cli
npm i -g @angular-devkit/core
npm i -g @angular-devkit/schematics
npm i -g @schematics/angular
npm i -g @nrwl/schematics
npm i -g @angular/cli

# verify globally installed packages
npm list -g --depth=0
```

### Scaffold Project
> steps below are for setting up a new project from the scratch.

#### Create Workspace
```bash
# create-nx-workspace nx-starter-kit
ng new nx-starter-kit --collection=@nrwl/schematics
# temp workaround
cd nx-starter-kit
npm i -D @angular-devkit/core
```

#### Dependencies
> adding 3rd party modules/libs
```bash
cd nx-starter-kit
npm i @angular/flex-layout
npm i @angular/material @angular/cdk
npm i hammerjs
npm i web-animations-js
npm i @swimlane/ngx-charts
npm i @swimlane/ngx-datatable

npm i -D loaders.css

npm i angular-in-memory-web-api
#  temp workaround
npm i -D @angular/http
```

#### Generate Artifacts

