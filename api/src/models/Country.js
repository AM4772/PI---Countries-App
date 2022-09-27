const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          is: /^[A-Z]{3}$/i,
          isUppercase: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // createdInDb: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      //   defaultValue: true
      // }
    },
    {
      timestamps: false,
    }
  );
};
