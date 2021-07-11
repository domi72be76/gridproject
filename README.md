# Getting Started with GridProject

# About
A re-usable datagrid component in React/Typescript hosted by a light-weight server using node.js.
You cam have an onverview by looking to the images in the screenhot/ folder. 

## Features
- Handles 100,000s of rows.
- Generic, re-usable API that abstracts away the underlying implementation.
- Light backend that serves up the data.
- Allow sorting by clicking on columns.
- Don't use a 3rd party data grid library.

## Prerequisites
You need to previouly installedthose tools.

Git, Node, NPM, and Typescript


## Install
Run the below commands.

git clone https://github.com/domi72be76/gridproject.git
cd gridproject
cd client
npm install
npm run build
cd ..
npm install
npx tsc server.ts 

## Run
One'S the installton is completed, run the below command.

node server.js 

## Access
###FrontEnd Interface
Open a Web Browser and enter this URL.
http://localhost:4000/
or
http://<MACHIME_IP>:4000/

Than you can:
- click on the column titles to toggle the order.
- scroll down as you want to see the complet dataset.

### BackEnd API
You can access diretly the data with the below UEL.

http://localhost:4000/api/people
or
http://<MACHIME_IP>:4000/api/people

You can customize the result be adding those parameter in thw URL.
- page, default 1
- limit, default 20
- ordercol
- orderway

Like:
http://localhost:4000/api/people?limit=1

### To change DataSet
Manually rename the file dataset/people-100k.json to something else.
Than set the name of another dataset to dataset/people-100k.json.
After stop/start the server and go back to the browser to see the change.

## Troubleshooting

### On Install
If the server.ts don't compile try
npm install typescript
npm install --save-dev @types/node

### On Running
If the server.js don's start  try
