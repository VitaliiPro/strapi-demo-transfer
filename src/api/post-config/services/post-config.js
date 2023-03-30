'use strict';

/**
 * post-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-config.post-config');
