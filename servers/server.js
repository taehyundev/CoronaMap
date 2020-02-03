const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const request = require('request');
const cheerio = require('cheerio');

const options = {
    url: 'http://www.cdc.go.kr/linkCheck.es?mid=a21111050500',
    headers: {
        'User-Agent': 'request'
    }
};
const callback = ((error, response, body) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(body);
        const search = $('li');
        search.each((index, item) => {
            if(index == 12){

          a = $(item).text().trim().split(' ');
          //  console.log(`${$(item).text()}`);
          a[1] = a[1].replace(',','');
          a[1] = "확진 환자 : "+ a[1];
          a[3] = "조사대상유증상자 : " + a[3];
          a[5] = a[5].replace(',','');
          a[5] = "격리해제 : " + a[5];
          a[8] = a[8].replace(')','');
          a[8] = "검사중 : " + a[8];
          result = [a[1],a[3],a[5],a[8]];
          app.use(cors());
          app.use(bodyParser.json());
          app.use('/api', (req, res)=> res.json({username:result}));
          app.listen(port, ()=>{
            console.log('express is running');
          })
          }
        });
    }
});


request(options, callback);
