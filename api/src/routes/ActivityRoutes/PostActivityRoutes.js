const { Activity, Country } = require('../../db');
const { dbActivityCheck } = require('../../controllers/DbActivityController');
const { dbParser } = require('../../controllers/DbParserController');

module.exports = async (req, res) => {
    const name = await dbParser(req.body.name);
    const difficulty = await dbParser(req.body.difficulty);
    const duration = await req.body.duration;
    const season = await dbParser(req.body.season);
    const description = req.body.description;
    let selectedCountries = req.body.selectedCountries;
    try {
        if(await dbActivityCheck(name, difficulty, duration, season)) {
            return res.status(400).json('Activity already exists.');
        }
        const newActivity = await Activity.findOrCreate({
            where: {
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season,
                description: description,
            }
        });
        for(let i = 0; i < selectedCountries.length; i++) {
            const match = await Country.findOne({
                where: {
                    name: selectedCountries[i]
                }
            })
            await newActivity[0].addCountry(match);
        };
        return res.status(200).json('Activity created successfully!');
    } catch(error) {
        return res.status(400).json('Ooops! something went wrong. Try again please.');
    }
};