var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true },
	dark: { type: Boolean,  default: false, index: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },

	featrueText: { type: Types.Html, wysiwyg: false, height: 50 },
	year: { type: Number },
	client : { type: String },
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },


	content: {
		brief: { type: Types.Html, wysiwyg: false, height: 80 },
		loop: { type: Types.Html, wysiwyg: false, height: 80 },
		extended: { type: Types.Html, wysiwyg: true, height: 150},
		addition: { type: Types.Html, wysiwyg: true, height: 150 },
	},


	heroImage: { type: Types.CloudinaryImage },
	heroVideo: { type: String },

	image_00: { type: Types.CloudinaryImage },
	image_01: { type: Types.CloudinaryImage },
	image_02: { type: Types.CloudinaryImage },
	video_00: {type: String },

	image_03: { type: Types.CloudinaryImage },
	image_04: { type: Types.CloudinaryImage },
	image_05: { type: Types.CloudinaryImage },
	video_01: {type: String },

	imageInfoOne: { type: String },
	imageInfoTwo: { type: String },

	color_01: { type: Boolean,  default: false, index: true },
	_01_HEX : { type: String, index: true, dependsOn: { color_01: true } },

	color_02: { type: Boolean,  default: false, index: true },
	_02_HEX : { type: String , dependsOn: { color_02: true } },

	color_03: { type: Boolean,  default: false, index: true },
	_03_HEX : { type: String , dependsOn: { color_03: true } },

	color_04: { type: Boolean,  default: false, index: true },
	_04_HEX : { type: String , dependsOn: { color_04: true } },

	color_05: { type: Boolean,  default: false, index: true },
	_05_HEX : { type: String , dependsOn: { color_05: true } },

});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state, year, dark';
Post.register();
