const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { Op, Model } = require('sequelize');

const router = Router();
const { getCountries, getCountryById } = require('./CountryRoutes/GetCountryRoutes');
const { getActivities, getCountryActivities } = require('./ActivityRoutes/GetActivityRoutes');
const postNewActivity = require('./ActivityRoutes/PostActivityRoutes');
const deleteActivity = require('./ActivityRoutes/DeleteActivityRoutes');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// Traigo la info de la API countries

router.get('/countries', getCountries);
router.get('/countries/:id', getCountryById);
router.get('/activities', getActivities);
router.get('/summary', getCountryActivities);
router.post('/activities', postNewActivity);
router.delete('/delete', deleteActivity);

module.exports = router;
