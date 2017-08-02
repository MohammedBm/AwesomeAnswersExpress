'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    QuestionId: DataTypes.INTEGER
  },);

  Answer.associate = function({Question}){
    //associations can be defined here
    Answer.belongsTo(Question);

    //Answer will get the follwing methods
    //Answer#setQuestion
    //Answer#getQuestion
  }
  return Answer;
};
