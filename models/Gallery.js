var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	state: { type: Types.Select, options: 'published, hidden, darft', default: 'darft', index: true },
	fotos: {
		linkTo: { type: String },
		images: { type: Types.CloudinaryImages},
	},
	name: { type: String, required: true },
});

Gallery.defaultColumns = 'name, state, fotos.linkTo'
Gallery.register();