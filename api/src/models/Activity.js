const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
            msg: "Must be an integer."
        },
        min: 1,
        max: 5,
        outOfRange(value) {
            if (value < 0 || value > 5) {
              throw new Error('Strictly between 1 and 5!');
            }
        }
      }
    },
    duration: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    season: {
      type: DataTypes.ENUM( 'Any', 'Summer', 'Fall', 'Winter', 'Spring'),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  });
};