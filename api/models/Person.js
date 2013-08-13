/**
 * Person
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {
	schema: true,
	adapter: 'mongoose',
  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
  	name: 'String',

	stories: [{type: 'Schema.Types.ObjectId', ref: 'Story'}]
    
  },

  // beforeCreate: function() {
  // 	console.log(' $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
  // 	console.log(' $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
  // 	console.log(' in before save');
  // }

};
