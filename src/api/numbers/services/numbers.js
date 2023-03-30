'use strict';

/**
 * numbers service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::numbers.numbers');
