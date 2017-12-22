'use strict'

const express = require('express');
const server = express();
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const cheerio = require('cheerio');

server.use(bodyParser.json());
server.use(express.static('./public'));
// https://i.pximg.net/c/150x150/img-master/img/2017/12/13/00/14/45/66269531_p0_master1200.jpg
server.use('/api/rank-img', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    var subPath = req.originalUrl.split("/");
    subPath.splice(0, 3);
    var mainPath = 'https://i.pximg.net/c/600x600/img-master/img/' + subPath.join("/");
    subPath = null;
    var options = {
        url: mainPath   ,
        headers: {
          'referer': 'https://www.pixiv.net/ranking_area.php?type=detail&no=6'
        }
    };
    request(options).pipe(res);
});
server.use('/api/rank-big-img', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    var subPath = req.originalUrl.split("/");
    subPath.splice(0, 3);
    var mainPath = 'https://i.pximg.net/img-master/img/' + subPath.join("/");
    subPath = null;
    var options = {
        url: mainPath   ,
        headers: {
          'referer': 'https://www.pixiv.net/ranking_area.php?type=detail&no=6'
        }
    };
    request(options).pipe(res);
});

server.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));   
});

server.get('/api/rank', (req, res) => {

    request(
        { 
            url: 'https://www.pixiv.net/ranking_area.php?type=detail&no=6',
        }, (error, response, body) => {
            if(response.statusCode == 200){
                const $ = cheerio.load(body);
                let itemsArray = $('section.ranking-items>div.ranking-item');
                let rankItems = [];
                for(var i = 0; i < itemsArray.length; i++){
                    var imgObj = {};
                    var imgSrc = $(".work_wrapper ._layout-thumbnail>img", itemsArray[i]).attr('data-src').split("/");
                    imgSrc.splice(0,7);
                    var title = $(".data h2 a", itemsArray[i]).text();
                    var detailObj = $("dd", $(".data .slash-separated", itemsArray[i]));
                    var views = detailObj.first().text();
                    var thumbs = detailObj.last().text();
                    imgObj.src = '/api/rank-img/' + imgSrc.join("/");
                    imgObj.href = '/api/rank-big-img/'+ imgSrc.join("/");
                    imgObj.title = title;
                    imgObj.views = views;
                    imgObj.thumbs = thumbs;
                    rankItems.push(imgObj);
                };
                res.json(rankItems);
            }
    });
    
});

server.listen(5151);

