const Joi = require('joi');
const reviews = require('./models/reviews');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
        category: Joi.string().valid(
      'Trending', 'Rooms', 'Iconic Cities', 'Mountains', 'Castles',
      'Amazing Pools', 'Camping', 'Farms', 'Arctic', 'Boats',
      'Photography', 'Services'
    ).required(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});