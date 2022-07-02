const { Country, Activity } = require('../db.js');
const axios = require('axios');

// The "countries" db loads every time the server is started ( @ .../api/index.js). 
// This keeps the db updated in case any country is added, deleted or updated in the restcountries api.

const dbLoad = async() => {
    try {
        let dataFetch = (await axios('https://restcountries.com/v3/all')).data.map((c) => {
            Country.findOrCreate({
                where: {
                    id: c.cca3,
                    name: c.name.common ? c.name.common : 'Unknown',
                    flag: c.flags[1] ? c.flags[1] : 'Unknown',
                    continent: c.region ? c.region : 'Unknown',
                    capital: Array.isArray(c.capital) ? c.capital[0] : 'Unknown',
                    subregion: c.subregion ? c.subregion : 'Unknown',
                    area: parseInt(c.area) ? parseInt(c.area) : 0,
                    population: parseInt(c.population) ? parseInt(c.population) : 0
                }
            });
        });
        console.log('Successfully loaded countries to db');
    } catch(error) {
        console.log(error);
    }
};

module.exports = { dbLoad, getAll };
// const getAll = async () =>{
//     await dbLoad()
//     return await Country.findAll({                                                  
//         include: { // includes activities
//             model: Activity,                                                      
//             attributes: ['name', 'difficulty', 'duration', 'season', 'description'],
//             through: {
//                 attributes: []
//             }
//         }
//     });
// };

