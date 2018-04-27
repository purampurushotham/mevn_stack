'use strict'
module.exports = function(sequelize,Datatypes){
  return sequelize.define("tours",{
    packageName:{
      type:Datatypes.STRING,
      allowNull:false
    },
    packageType:{
      type:Datatypes.STRING,
      allowNull:false
    },
    placeName:{
      type:Datatypes.STRING,
      allowNull:false
    },
    price:{
      type:Datatypes.INTEGER,
      allowNull:false
    }
  },
    {
      underscored: true,
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    })
}
