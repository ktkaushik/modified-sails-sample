/**
 * Story
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {
  schema: true,
  adapter: 'mongoose',

  attributes: {
  	name: 'string',
  	_creator: {
		type: 'Schema.ObjectId'
	    , ref: 'Person'
	}
  	/* e.g.
  	nickname: 'string'
  	*/
    
  }

};
