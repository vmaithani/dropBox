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
        fileName: {
            field: 'fileName',
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
        fileSize: {
            field: 'fileSize',
            type: DataTypes.INTEGER,
        },
        fileType: {
            field: 'fileType',
            type: DataTypes.STRING,
        },
        
	}, {
                timestamps: false,
                tableName: 'files',
                schema: "public",
        },
  );

  return files;
};

