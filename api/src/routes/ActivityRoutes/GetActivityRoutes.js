const { Activity, Country, ctry_act } = require('../../db');

 const getActivities = async (req, res) => { // it returns all the activities from the table "activity"
    try {
        if(req.query.name) {
            const activity = await Activity.findOne({
                where: {
                    name: req.query.name
                }
            });        
            const countryCodes = [];        
            const match = await ctry_act.findAll({
                where: {
                    activityId: activity.id
                }
            });
            for(let i = 0; i < match.length; i++) {
                const countryName = await Country.findOne({
                    where: {
                        id: match[i].countryId
                    }
                })
                countryCodes.push(countryName.name)
            };
            return res.status(200).json(countryCodes);
        };
        const activities = await Activity.findAll();        
        return res.status(200).json(activities);
    } catch(error) {
        return res.status(404).json({ error: error });
    }
};

const getCountryActivities = async (req, res) => { // it returns every country along with its associated activities
    try {
        let dbCountries = await Country.findAll();
        const match = await ctry_act.findAll();
        for(let i = 0; i < dbCountries.length; i++) {
            dbCountries[i] = {
                ...dbCountries[i].dataValues,
                activities: []
            }
        };    
        for(let i = 0; i < match.length; i++) {
            const activityId = match[i].activityId;
            const countryId = match[i].countryId;    
            const activity = await Activity.findOne({
                where: {
                    id: activityId
                }
            });    
            for(j = 0; j < dbCountries.length; j++) {
                if(dbCountries[j].id === countryId) {
                    dbCountries[j].activities.push(activity)
                }
            };
        };    
        res.status(200).json(dbCountries);  
    } catch(error) {
        res.status(400).json({ error: error});  
    }
};

module.exports = { getActivities, getCountryActivities };