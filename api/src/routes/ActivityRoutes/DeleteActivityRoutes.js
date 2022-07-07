const { Activity } = require('../../db');
const { dbActivityCheck } = require('../../controllers/DbActivityController');
const { dbParser } = require('../../controllers/DbParserController');

module.exports = async (req, res) => {
    const name = await dbParser(req.query.name);
    try {
        if(!await dbActivityCheck(name)) {
            return res.status(404).json('Activity does not exist.');
        }
        let deletedAct = name;
        await Activity.destroy({
            where: {
                name: name
            }
        });
        return res.status(200).json('Activity ' + deletedAct + ' was deleted successfully!');
    } catch(error) {
        return res.status(400).json('Ooops! something went wrong. Try again please.');
    }
};