/*
* Licensed Materials - Property of IBM
* (C) Copyright IBM Corp. 2014. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/
/* Logger Utility */

/**
 * Logger definition
 */

var log4js = require('log4js');
var levels = ["INFO","DEBUG","ERROR"];
var level = "INFO";
var events = require('events');
var dynamicLogging = new events.EventEmitter();
var u = require("util");
var LOGPATH = __dirname +'/../logs';
var fs = require('fs');

log4js.loadAppender('file');
log4js.configure(__dirname + '/../config/log4js.json', {
    reloadSecs : 180
});	

dynamicLogging.setMaxListeners(50);

exports.getLogger = function(name) {
	var logger = log4js.getLogger(name);
	logger.setLevel(level);
    dynamicLogging.on("levelChange",function(newLevel){
        console.log(u.format("logger %s -- > Level : %s ", name, newLevel));
        logger.setLevel(newLevel);
    });
    return logger;
};

var hasLevel = function(levelName){
    var i;
    for(i=0; i<levels.length;i++){
        if (levelName === levels[i]) {
            return true;
        }
    }
    return false;
};

var getLevel = function(){
    return level;
};

var resetLevel = function(){
    dynamicLogging.emit("levelChange", getLevel());
};
var setLevel = function(_level) {
	level =  _level;
};
exports.setLevel = setLevel;
exports.hasLevel = hasLevel;
exports.getLevel = getLevel;
exports.resetLevel = resetLevel;
