
# Node - Express III

to create a project first, we will need to check if we have express install. TO do that we will run the following code `npm install -g express-generator`. This file will instal `exrepss-generator` globally in our machine.


After that we can run the command `express AwesomeAnswersExpress`. This command will generate `AwesomeAnswersExpress` folder that contain the express file, this command also can be used `exrepss --view ejs -css sass AwesomeAnswersExpress`

we will also will need to change a few things inside the files we have. First, we will need to change something inside the `app.js` in `line 27` we will change the boolean from `true` to `false` so we can use `.scss` instead of `.sass`. The reason why we need to change that is we can use regular css and sass inside the file with the `scss` extension, in the `sass` we will not be able to use the regular css, only the `sass` syntax

After that we will need to install `nodemon` using yarn, `yarn add nodemon` will do that for us. We will need another package as well which is sequelize the command `yarn add sequelize`. We will be using sequelize with postgres which requires a few more packages. which is `yarn add pg pg-hstore`. Also there is another command line tool we will need to install `npm i -g sequelize sequelize-cli pg pg-hstore`
Â
Now we will need to create models, to do that we will need to run the following file `sequelize model:create --name Question --attributes title:string,content:text`

Next, we will check the `qeustion.js` file. sequelize is no longer supports the way of adding associations to model that was created from the generator. so we will need to comment this code
```js
, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
}

```
and change the file to this
```js
'use strict';
module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }/*, {
    // Sequelize no longer supports this way of adding association to models.
    // Unfortunately, sequelize-cli still generates models using this technique.
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }*/);

  Question.associate = (models) => {
    // associations can be defined here
  };

  return Question;
};
```

After that we will need to run this command `sequelize db:migrate` in the terminal.



<!-- also check package.json file and talk about the scripts that was added -->

<!-- Todo check file Question.js and add notes about what have changed inside this file  -->
