'use strict';

/**
 * post-config router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post-config.post-config');
