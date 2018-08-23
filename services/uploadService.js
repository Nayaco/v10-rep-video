'use strict'

const fs = require('fs-extra');
const Crypto = require('crypto');
const redis = require('redis');


/*
* Write file to disk
*/
const WriteFile = async(file, filePath) =>{
    return new Promise((resolve,reject) =>{
        const Source = fs.createReadStream(file);
        const Dst = fs.createWriteStream(filePaths, {flags: 'a'});
        Source.pipe(Dst)
        .on('error', (err)=>{reject(err)})
        .on('finish', ()=>{resolve(true)});
    });
}

/*
* Get the hash key of the first blob
*/
const GetHash = async(filePath) =>{
    return new Promise((resolve,reject) =>{
        const Source = fs.createReadStream(filePath);
        const Hash =  Crypto.createHash('sha256');
        Source.pipe(Hash)
        .on('error', (err)=>{reject(err)})
        .on('finish', ()=>{resolve(Hash.digest('hex'))});
    });
}

const 



