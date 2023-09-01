const Citizens = require('../models/citizens.models')


const getOneCitizen = async ({cedula}) => {
    const data = await Citizens.findOne({
        where: {
            Cedula: cedula
        },
        attributes:['nombres']
    })
    return data
}
const getAllCitizens = async (offset, limit) => {
    const data = await Citizens.findAndCountAll({
      offset,
      limit,
      attributes:['nombres']
    });
    return data;
  };

module.exports = {
    getOneCitizen,
    getAllCitizens
}