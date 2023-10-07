'use strict';
module.exports = (sequelize, DataTypes) => {
    const files = sequelize.define('files', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            //also we can use UUID
            primaryKey: true,
            autoIncrement: true
        },
        uniquefilename: {
            field: 'uniquefilename',
            type: DataTypes.STRING,
        },
        originalname: {
            field: 'originalname',
            type: DataTypes.STRING,
        },
        url: {
            field: 'url',
            type: DataTypes.STRING,
        },
        datetime :{
            field: 'datetime',
            type: DataTypes.DATE
        },
        filesize: {
            field: 'filesize',
            type: DataTypes.INTEGER,
        },
        filetype: {
            field: 'filetype',
            type: DataTypes.STRING,
        },
        
	}, {
                timestamps: false,
                tableName: 'files',
                schema: "dropBox",
        },
  );

  return files;
};

