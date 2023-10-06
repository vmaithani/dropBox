'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
const config = require(__dirname + '/../config/index.js').storage

config.pool.max=50;
config.pool.min=0;
config.pool.idle=30000;
config.pool.acquire= 360000;
config.pool.evict = 6000;
config.pool.handleDisconnects = true;

var db = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
        .filter(file => {
                return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
         //     var model = sequelize['import'](path.join(__dirname, file)); // for old version version sequelize^4.44.3
         var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
                db[model.name] = model;
        });

Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
                db[modelName].associate(db);
        }
});

db.sequelize = sequelize;

module.exports = db;
