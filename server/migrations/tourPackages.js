module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      packageName:{
        type:Sequelize.STRING,
        allowNull:false
      },
      packageType:{
        type:Sequelize.STRING,
        allowNull:false
      },
      placeName:{
        type:Sequelize.STRING,
        allowNull:false
      },
      price:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('tours');
  }
};
