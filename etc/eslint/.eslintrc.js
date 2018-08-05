/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = {};

/**
* Root configuration.
*
* @name root
* @memberof eslint
* @type {boolean}
* @default true
*/
eslint.root = true;

/**
* Default environments.
*
* @name env
* @memberof eslint
* @type {Object}
*/
eslint.env = require( './env' );

/**
* Lint rules.
*
* @name rules
* @memberof eslint
* @type {Object}
*/
eslint.rules = require( './rules' );

/**
* Overrides.
*
* @name overrides
* @memberof eslint
* @type {Array}
*/
eslint.overrides = require( './overrides' );

/**
* Parser options.
*
* @name ParserOptions
* @memberof eslint
* @type {Object}
*/
eslint.parserOptions = require( './parser-options' );

/**
* Plugins.
*
* @name Plugins
* @memberof eslint
* @type {Object}
*/
eslint.plugins = require( './plugins' );


// EXPORTS //

module.exports = eslint;
