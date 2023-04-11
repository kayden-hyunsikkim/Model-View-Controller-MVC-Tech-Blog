const User = require('./User');
const Tech = require('./Tech');
const Comment = require('./comment');

User.hasMany(Tech, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tech.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Tech, Comment };
