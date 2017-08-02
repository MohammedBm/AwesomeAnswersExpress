'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      QuestionId: {
        type: Sequelize.INTEGER,
        //The `references` property is used to configure out forigen key
        references: {
          //the model property takes a string that is the table name
          //that this foreign key refers to.
          model: 'Questions',
          //the key property takers a string of the column that holds the foreing key in the table named above
          key: 'id'
        },
        onDelete: 'cascade', // similar to `dependant: :destroy`
        onUpdate: 'cascade',
        allowNull: false
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
    return queryInterface.dropTable('Answers');
  }
};
