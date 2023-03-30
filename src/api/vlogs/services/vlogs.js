'use strict';

/**
 * vlogs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vlogs.vlogs');
