const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const ContentBasedRecommender = require('content-based-recommender')
router.get('/titles', (req, res, next) => {
  Movie.find({'Origin/Ethnicity':'American'}, 'Title')
    .then((data) => {res.json(data)})
    .catch(next);
});
router.post('/recommend', (req, res, next) => {
	console.log(req.body)
  if (req.body) {
    Movie.find({'Origin/Ethnicity':'American'}).limit(10000).lean()
    .then((data) => {
    	const recommender = new ContentBasedRecommender({
		  minScore: 0.1,
		  maxSimilarDocuments: 100
		});
    	var documents = data.map(movie =>{ return {id:movie._id.toString(), content:movie.Title.toString()}})
    	recommender.train(documents);
 
		const similarDocuments = recommender.getSimilarDocuments(req.body[0]._id, 0, 10);
		console.log(similarDocuments)
		const result = data.filter((el) => {
		  return similarDocuments.some((f) => {
		    return f.id === el._id.toString();
		  });
		});
		res.json(result)
    })
    .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});
module.exports = router;