
'use strict';

var _ = require('lodash'),
	path = require('path'),
	dotenv  = require('dotenv'),
	querystring = require('querystring');

function get(data, allow) {
	if (!allow) {
		return data;
	} else {
		return _.pick(data, allow.split(','));
	}
}

module.exports = function(source) {
	this.cacheable();
	var data = dotenv.parse(source);
	var param = querystring.parse(this.query.substr(1));
	return 'module.exports = '+ JSON.stringify(
		get(data, param.allow),
		undefined,
		'\t'
	);
};
