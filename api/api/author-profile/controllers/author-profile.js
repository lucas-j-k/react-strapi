'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');


module.exports = {

    // Find all records for this content type
    async find(ctx) {

        if(!ctx.query.user) {
            ctx.throw(400, 'Missing Required Parameter : user');
        }

        const entity = await strapi.services['author-profile'].findOne(ctx.query);
        const profile = sanitizeEntity(entity, { model: strapi.models['author-profile'] });
        return {
            bio: profile.bio,
            id: profile.id,
            username: profile.user.username,
        }
      },
};

