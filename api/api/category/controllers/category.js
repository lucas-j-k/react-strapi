'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.query._q) {
          entities = await strapi.services.category.search(ctx.query);
          console.log('Entities (search /categories) -- ', entities);
        } else {
          entities = await strapi.services.category.find(ctx.query, 'author');
          console.log('Entities (find/categories) -- ', entities);
        }
    
        return entities.map(entity =>
          sanitizeEntity(entity, { model: strapi.models.category })
        );
      },
};
