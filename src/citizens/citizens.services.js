const citizensController = require('./citizens.controller')
const { HOST } = require('../config')

const getOnCitizen = (req, res) => {

    const cedula = req.params.cedula;

    citizensController
    .getOneCitizen({cedula})
    .then((data) => {res.status(200).json({ciudadano: data})})
    .catch((err) => {res.status(404).json({ err })});
}

const getAllCitizens = (req, res) => {

    //donde inicia 
    const offset = Number(req.query.offset) || 0

    //capacidad maxima
    const limit =  Number(req.query.limit) || 50
  
    const urlBase = `${HOST}/api/v1/citizens/getAllCitizen`
  
    citizensController
      .getAllCitizens(offset, limit)
      .then((data) => {
        const nexPage = data.count - offset >= limit ? `${urlBase}?offset=${offset + limit}&limit=${limit}` : null
        res.status(200).json({
          next: nexPage,
          prev: `${urlBase}`,
          offset,
          limit,
          count: data.count,
          results: data.rows});
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  };

module.exports = {
    getOnCitizen,
    getAllCitizens
}