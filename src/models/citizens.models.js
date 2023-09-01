const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Padron = db.define("PADRON", {
  IdProvincia: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdMunicipio: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  CodigoCircunscripcion: {
    type: DataTypes.STRING(2),
    allowNull: true
  },
  CodigoRecinto: {
    type: DataTypes.STRING(5),
    allowNull: true
  },
  CodigoColegio: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  Cedula: {
    type: DataTypes.STRING(11),
    allowNull: false,
    primaryKey: true
  },
  nombres: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  apellido1: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  apellido2: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  NombresPlastico: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  ApellidosPlastico: {
    type: DataTypes.STRING(60),
    allowNull: true
  },
  FechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  IdNacionalidad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdSexo: {
    type: DataTypes.CHAR(1),
    allowNull: true
  },
  IdEstadoCivil: {
    type: DataTypes.CHAR(1),
    allowNull: true
  },
  IdCategoria: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdCausaCancelacion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdColegio: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdColegioOrigen: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdMunicipioOrigen: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  ColegioOrigen: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  PosPagina: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  LugarVotacion: {
    type: DataTypes.CHAR(1),
    allowNull: true
  },
  IdProvinciaExterior: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdMunicipioExterior: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  CodigoRecintoExterior: {
    type: DataTypes.STRING(5),
    allowNull: true
  },
  ColegioExterior: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  PosPaginaExterior: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Pagina: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IdRangoEdad: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'PADRON'
});

module.exports = Padron;


module.exports = Padron