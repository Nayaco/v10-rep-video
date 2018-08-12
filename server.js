'use strict'

const server_config = require('./configs/server.config');
const Koa = require('koa'), app = new Koa();
const parser = require('koa-bodyparser');
const logger = require('koa-logger');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');
const stripAnsi = require('strip-ansi');

const s2s = require('./utils/string2Stream');

const log_file = fs.createWriteStream(path.join(server_config.log_path, `${moment().format('YYYY-MM-DD')}.log`), {flags:'a'});

app.use(async(ctx, next)=>{
    try{
        console.log(ctx.url);
        await next();
    }
    catch(Exception){
        console.log(Exception);
    }
})

app.use(logger({
    transporter: (str, args)=>{
        var stream = s2s(stripAnsi(str) + '\n', 'r');
        stream.pipe(log_file);
    }
}));

app.use(parser());

app.listen(server_config.port, console.log(`Port ${server_config.port} on listening`));