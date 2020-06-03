'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');


// Remove unnecessary fields from the nested article author object
const formatAuthor = article => ({
        ...article,
        author: {
            id: article.author.id,
            username: article.author.username,
        }
})

module.exports = {
    // Find all records for this content type
    async find(ctx) {
        let entities;
        if (ctx.query._q) {
          entities = await strapi.services.article.search(ctx.query);
        } else {
          entities = await strapi.services.article.find(ctx.query);
        }
    
        return entities.map(entity => {
            const article = sanitizeEntity(entity, { model: strapi.models.article })
            if(article) {
                return formatAuthor(article);
            };
            return article;
        }
        );
      },

      // Find one record of this content type, by ID
      async findOne(ctx) {
        const entity = await strapi.services.article.findOne(ctx.params);
        const article = sanitizeEntity(entity, { model: strapi.models.article });
        if(article) {
            return formatAuthor(article);
        };
        return article;
      },
};
