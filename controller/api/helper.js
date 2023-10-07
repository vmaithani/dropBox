
module.exports = {
    getDBObj: function () {
      const dbOBJ = require('../../models/db');
      return dbOBJ;
    },

    getAllFiles: async function() {
        return new Promise(async (resolve, reject) => {
            const dbOBJ = this.getDBObj();
            var resp = await dbOBJ.files
            .findAll({
                attributes: ["id","uniquefilename","originalname","filesize","filetype"],
            });
            resolve(resp);
        })
    },

    insertFileData: async function(inputData) {
        return new Promise(async (resolve, reject) => {
            const dbOBJ = this.getDBObj();
            await dbOBJ.files
              .create(inputData, {
                returning: true
              })
              .then((resData) => {
                resReturn = {
                  'code': 200,
                  'message': "success",
                  'data': resData
                }
                resolve(resReturn);
              }).catch(function (error) {
                    console.log( "Some error occurred while insert into files -- " + error);
                reject (error);
              });
        })
    },

    getFileById: async function(id) {
        return new Promise(async (resolve, reject) => {
            const dbOBJ = this.getDBObj();
            var resp = await dbOBJ.files
            .findOne({
                where: {
                    id: id,
                },
                attributes: ["id","uniquefilename","originalname","filesize","filetype"],
            });
            resolve(resp);
        })
    },

}