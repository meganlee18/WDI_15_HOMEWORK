console.log ('test')

/*

Write a javascript program that randomly generates a startup idea for you. 
ach time you run it, you should see a random combination from the two 
arrays below for a great startup idea, e.g. "Skynet for Pandas"

*/

var thisArray = ["Skynet","Digital Music Distribution",
"FitBit","Realtime Data","ManPacks","Landing Page",
"Conversion Funnel","Social Network","Airbnb","SnapChat",
"Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query",
"Node.js Server","KickStarter","Match.com","Adultfriendfinder",
"Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine",
"Distributed Social Network","Quadcopter","Daring Fireball",
"Content Distribution Network","Analytics Platform","OpenTable",
"LinkedIn","Brick and Mortar Solution","Aggregator","Social Game","jQuery Plugin","Game-based Incentive","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Zivity","Playboy","Cloud Storage Provider","Kindle Fire App","Pandora","Green Tech Program","Eco-Friendly Marketplace",
"Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","Mac App","SEO Optimizer","Apartment Guide","Social CRM","Database Abstraction Layer","Microblogging Service","Product Curation Service","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Digg 2.0",
"Recommendation Engine","News Recommender","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];


var thatArray = ["Facebook Platform","Erlang Enthusiasts","Ex-Girlfriends",
"Mitt Romney's Hair","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists",
"Cracked iPhone Apps","Stolen Goods","Adult Dancers","People Who Hate Groupon","Hunters","Sysadmins","Bath Salts","Nootropics","California","Government Corruption","Political Attack Ads","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics",
"Camp Counselors","Nature Blogs","World of Warcraft","Models","Family Guy Enthusiasts","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Presentation Tools","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes", "Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Happy Families","Social Outcasts",
"Surgeons","Pounding Jagger Bombs","Textbooks","Coffee Shops","Baristas"];



//1. Create random in arrays


var generateRandomElement = function (arr) {
	var randIndex = Math.floor(Math.random() * arr.length)
	return arr[randIndex]
}

var first = generateRandomElement(thisArray)
var second = generateRandomElement(thatArray)
console.log (first + ' for ' + second)

}

//Second method
//var randomValue = thisArray[Math.floor(Math.random() * thisArray.length)]
//var randomValue2 = thatArray[Math.floor(Math.random() * thatArray.length)]
//console.log (randomValue + " for " + randomValue2)


}

/*

Bonus: 

Add each random combo that gets generated into an array. 
When the array contains 5 random combos, 
print them out in order with a number prefixing each one e.g.


1. Skynet for Pandas
2. Playboy for Coffee Shops
3. Netflix for Pets
4. Fitbit for Funeral Homes
5. KickStarter for Pounding Jagger Bombs

*/


var generateRandomElement = function (arr) {
	var randIndex = Math.floor(Math.random() * arr.length)
	return arr[randIndex]
}


var combos = []
for (var i = 0; i < 5; i++) {

	var first = generateRandomElement(thisArray)
	var second = generateRandomElement(thatArray)
	var result = first + ' for ' + second
	combos.push(result)

}

console.log (combos.join('\n'))

for (var i=0, i < 5; i++) {
	console.log(i + ": " + combos[i-1])

}





