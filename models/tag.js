export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});

  Tag.associate = (models) => {
    models.Tag.belongsToMany(models.Task, { through: 'TaskTags', foreignKey: 'tagId', otherKey: 'taskId' });
  };
  return Tag;
};
