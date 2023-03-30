'use strict';

/**
 * numbers router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::numbers.numbers');
