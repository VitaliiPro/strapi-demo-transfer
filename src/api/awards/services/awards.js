'use strict';

/**
 * awards service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::awards.awards');
