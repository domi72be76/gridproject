# Getting Started with GridProject

# About
A re-usable datagrid component in React/Typescript hosted by a light-weight server using node.js.\
You can have an overview by looking to the images in the screenshot/ folder. 

## Features
- Handles 100,000s of rows.
- Generic, re-usable API that abstracts away the underlying implementation.
- Light backend that serves up the data.
- Allow sorting by clicking on columns.
- Don't use a 3rd party data grid library.

## Requirements
You need to previously installed those tools.

Git, Node, NPM, and Typescript


## Install
Run the below commands.

git clone https://github.com/domi72be76/gridproject.git \
cd gridproject\
cd client\
npm install\
npm run build\
cd ..\
npm install\
npx tsc server.ts 

## Run
One's the install is completed, run the below command.

node server.js 

## Access

### FrontEnd Interface
Open a Web Browser and enter this URL.

http://localhost:4000/ \
or \
http://<MACHIME_IP>:4000/

Then you can: 
- click on the column titles to switch the order.
- scroll down as you want to see the full dataset.

### BackEnd API
You can access diretly the data with the below URL.

http://localhost:4000/api/people \
or \
http://<MACHIME_IP>:4000/api/people

You can customize the result be adding those parameters in the URL.
- page, default 1
- limit, default 20
- ordercol
- orderway

Like: \
http://localhost:4000/api/people?limit=1


## To change DataSet
Manually rename the file dataset/people-100k.json to something else.\
Then set the name of another dataset to dataset/people-100k.json.\
After stop/start the server and go back to the browser to see the change.

## Troubleshooting

### On Install
If the server.ts doesn't compile, try

npm install typescript\
npm install --save-dev @types/node

### On Running
If the server.js doesn't start, try

npm install express