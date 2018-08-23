'use strict'

const koaStatic = require('koa-static');

function MediaService(MediaPath){
    this._mediaPath = MediaPath;
} 

MediaService.prototype.sendFile = async() =>{
    
}

module.exports = MediaService;