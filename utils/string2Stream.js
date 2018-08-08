'use strict'

const Readable = require('stream').Readable;
const Duplex = require('stream').Duplex;

/*
* @Params 
*   str: String (The string you want to convert)
*   flag: String['r'|'d'] (The stream you want to convert to, default is 'r')
* @Return
*   stream: Stream[Readable|Duplex] (The stream you need)
*
/// example usage:
/// const s2s = require('path-to-this-file');
/// const stream = s2s('I am a cow', 'r');
*
*/
var string2Stream = (str, flag) =>{
    if(typeof(str) != 'string')
        throw('s2s: type error');
    var _flag = flag || 'r';
    _flag = _flag === 'r' || _flag === 'd' ? _flag: 'r'; 
    if(flag == 'r'){
        var stream = new Readable();
        stream.push(str);
        stream.push(null);
        return stream;
    }else{
        var stream = new Duplex();
        stream.push(str);
        stream.push(null);
        return stream;
    }
}

module.exports = string2Stream;