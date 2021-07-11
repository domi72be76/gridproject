const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//Load the JSON in RAM
console.log("Load Database (Json)...");
const jsonDataWines = JSON.parse(fs.readFileSync('dataset/wines-7k.json', 'utf-8'));
const jsonDataFlights = JSON.parse(fs.readFileSync('dataset/flights-200k.json', 'utf-8'));
const jsonDataPeople = JSON.parse(fs.readFileSync('dataset/people-100k.json', 'utf-8'));

app.use(express.static(path.join(__dirname, 'client/build')));
//Front
app.get('/', function (req, res) {
  console.log("/...");
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
// API
app.get('/api/people', (req, res) => {
  console.log("/api/people");
  //To make dynamic...
  var jsonData = jsonDataPeople;
  console.log("jsonData elements "+ jsonData.lenght );
  //Where clause params
  var limit = Number( req.query.limit );
  var page  = Number( req.query.page );
  var orderCol = String( req.query.ordercol);
  var orderWay = String( req.query.orderway);

  //Do we need to order the seledtion
  var col = null;
  if(jsonData && orderCol) {
    //Do order with string and number filtering
    jsonData.sort((a, b) => {
      let aTest = /^\d+$/.test(a[orderCol]);
      let bTest = /^\d+$/.test(b[orderCol]);
      if (aTest && bTest) {
        return parseInt(a[orderCol]) - parseInt(b[orderCol]);
      } else if (aTest) {
        return -1;
      } else if (bTest) {
        return 1;
      } else {
        return a[orderCol] > b[orderCol] ? 1 : -1;
      }
    })

    //What direction of the order, default is ASC
    if(orderWay && orderWay  === "desc") {
      jsonData.reverse();
    }     
  }

  //Grab the desired subset
  //base on the limit and page
  limit= limit ? limit : 20;
  page = page ? page : 1;
  var startSub = (page-1)*limit;
  var jfile = jsonData.slice(startSub, (startSub + limit));
   
  //return the result
  console.log("return elements "+ jfile.lenght );
  console.log("return elements "+ jfile.lenght );
  res.end( JSON.stringify( jfile ));
});

app.listen(4000, () => {
  console.log("server is r  unnig on port 4000");
  console.log("Open your browser and hit url 'localhost:4000'");
});