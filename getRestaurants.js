
		'use strict';

		const yelp = require('yelp-fusion');

		// Place holder for Yelp Fusion's API Key. Grab them
		// from https://www.yelp.com/developers/v3/manage_app
		const apiKey = 'us3JoVXloKKJVIAUIymDSxA8ts6B5B8SCPYy130BAJC5ORXQNGw5cPXvarF1dQAKsEaSMnVYd84J8xixuY6UWiNXmevSo-I6tbq9yyg8PuiDGdAmSyZtPTVR7edtWnYx';

		const searchRequest = {
		  term:'Food',
		  location: 'LAX'
		  categories: 'airports'
		};

		const client = yelp.client(apiKey);

		client.search(searchRequest).then(response => {
		  const firstResult = response.jsonBody.businesses[0];
		  const prettyJson = JSON.stringify(firstResult, null, 4);
		  console.log(prettyJson);
		}).catch(e => {
		  console.log(e);
		});

