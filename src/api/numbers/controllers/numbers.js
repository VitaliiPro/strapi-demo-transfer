'use strict';

/**
 * numbers controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::numbers.numbers');
