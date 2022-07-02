const { Activity } = require('../db');

// Controller to check whether the activity being posted already exists in the "activity" table.

const dbActivityCheck = async (name) => {
    const check = await Activity.findAll({
        where: {
            name: name,
            // difficulty: difficulty,
            // duration: duration,
            // season: parsedSeason
        }
    });
    if(check.length) {
        return true;
    }
    return false;
}

module.exports = { dbActivityCheck };

//, difficulty, duration, parsedSeason