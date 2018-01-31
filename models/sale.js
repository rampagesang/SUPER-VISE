
module.exports = function(sequelize, DataType){

  const Sale = sequelize.define("Sale", 
  {
      gross_margin: {
          type: DataType.INTEGER(20),
          validate: {
              notEmpty: true,
              len: [1, 140]
          }
      },
      profit_margin: {
          type: DataType.INTEGER(20)
      }
  })
  return Sale
}