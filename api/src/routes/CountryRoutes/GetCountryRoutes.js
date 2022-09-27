const { Country, Activity, ctry_act } = require("../../db");
const { dbParser } = require("../../controllers/DbParserController");

const getCountries = async (req, res) => {
  let countriesAll = await Country.findAll({
    order: [["name", "ASC"]],
  });
  let country = req.query.name;
  if (country) {
    let countryName = await countriesAll.filter((c) =>
      c.name.toLowerCase().includes(country.toLowerCase())
    );
    res.status(200).json(countryName);
    // ---------------- for exact match -------------------------------------------------------------------
    // let countryName = await countriesAll.filter( (c) => c.name.toLowerCase() == country.toLowerCase());
    // countryName.length ? res.status(200).json(countryName) :
    // res.status(404).json( { error: 'The requested country does not exist in our data base. Check spelling.' } );
  } else {
    res.status(200).json(countriesAll);
  }
};

const getCountryById = async (req, res) => {
  try {
    const id = dbParser(req.params.id, true);
    let activitiesId = [];
    let activitiesDetail = [];
    let result = {};
    let dbCountry = await Country.findOne({
      where: {
        id: id,
      },
    });
    const relationalDb = await ctry_act.findAll({
      where: {
        countryId: id,
      },
    });
    for (let i = 0; i < relationalDb.length; i++) {
      activitiesId.push(relationalDb[i].dataValues.activityId);
    }
    for (let i = 0; i < activitiesId.length; i++) {
      const match = await Activity.findOne({
        where: {
          id: activitiesId[i],
        },
      });
      activitiesDetail.push(match.dataValues);
    }
    result = await { ...dbCountry.dataValues, activities: activitiesDetail };
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: "Country not found " + error });
  }
};

module.exports = { getCountries, getCountryById };
