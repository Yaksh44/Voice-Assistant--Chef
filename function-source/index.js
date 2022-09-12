// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome, you can say Hello or you can ask for recipe for different cookies. Which would you like to try?`);
  }
  function getRecipeforBakingIntent(agent) {
 	const cookietype = agent.parameters.typeofcookies;
    const numberofing = agent.parameters.number;
    if (cookietype === 'chocolate_chip'){
      agent.add('This is recipe of chocolate chip cookie.');
    }
    else if (numberofing === 250 && cookietype === 'shortbread'){
      agent.add('This is recipe for 250 grams of shortbread cookies.');
    }
    else if (numberofing === 500 && cookietype === 'shortbread'){
      agent.add('This is recipe for 500 grams of shortbread cookies.');
    }
    else if (numberofing === 750 && cookietype === 'shortbread'){
      agent.add('This is recipe for 750 grams of shortbread cookies.');
    }
    else if (numberofing === 1000  && cookietype === 'shortbread'){
      agent.add('This is recipe for 1000 grams of shortbread cookies.');
    }
    else if (cookietype === 'shortbread'){
      agent.add('In the bowl of a stand mixer, add in butter, sugar, vanilla, and flour. Mix slowly until a crumbly dough forms. I do not recommend mixing by hand.');
    }
    else if (numberofing === 250 && cookietype === 'gingersnaps'){
      agent.add('This is recipe for 250 grams of gingersnaps cookies.');
    }
    else if (numberofing === 500 && cookietype === 'gingersnaps'){
      agent.add('This is recipe for 500 grams of gingersnaps cookies.');
    }
    else if (numberofing === 750 && cookietype === 'gingersnaps'){
      agent.add('This is recipe for 750 grams of gingersnaps cookies.');
    }
     else if (numberofing === 1000 && cookietype === 'gingersnaps'){
      agent.add('This is recipe for 1000 grams of gingersnaps cookies.');
    }
    else if (cookietype === 'gingersnaps'){
      agent.add('Sift the flour, ginger, baking soda, cinnamon, and salt into a mixing bowl. Stir the mixture to blend evenly, and sift a second time into another bowl.');
    }
    else if (numberofing === 250 && cookietype === 'peanut butter'){
      agent.add('This is recipe for 250 grams of peanut butter cookies.');
    }
    else if (numberofing === 500 && cookietype === 'peanut butter'){
      agent.add('This is recipe for 500 grams of peanut butter cookies.');
    }
    else if (numberofing === 750 && cookietype === 'peanut butter'){
      agent.add('This is recipe for 750 grams of peanut butter cookies.');
    }
    else if (numberofing === 1000 && cookietype === 'peanut butter'){
      agent.add('This is recipe for 1000 grams of peanut butter cookies.');
    }
    else if (cookietype === 'peanut butter'){
      agent.add('Cream butter, peanut butter, and sugars together in a bowl; beat in eggs.In a separate bowl, sift flour, baking powder, baking soda, and salt; stir into butter mixture. Put dough in refrigerator for 1 hour.');
    }
    else if (numberofing === 250 && cookietype === 'Oatmeal raisin'){
      agent.add('This is recipe for 250 grams of Oatmeal raisin cookies.');
    }
    else if (numberofing === 500 && cookietype === 'Oatmeal raisin'){
      agent.add('This is recipe for 500 grams of Oatmeal raisin cookies.');
    }
    else if (numberofing === 750 && cookietype === 'Oatmeal raisin'){
      agent.add('This is recipe for 750 grams of Oatmeal raisin cookies.');
    }
    else if (numberofing === 1000 && cookietype === 'Oatmeal raisin'){
      agent.add('This is recipe for 1000 grams of Oatmeal raisin cookies.');
    }
    else if (cookietype === 'Oatmeal raisin'){
      agent.add('In large bowl, beat margarine and sugars until creamy. Add egg and vanilla; beat well. Add combined flour, baking soda, cinnamon, salt and nutmeg; mix well. Add oats; mix well. Drop dough by rounded tablespoonfuls onto ungreased cookie sheets.');
    }
    
  }
  
  
  function getIngredientsIntent(agent) {
    
    const numberofing = agent.parameters.number;
    if (numberofing === 1){
      agent.add('The main ingredient is flour.');
    }
    else if (numberofing === 2){
      agent.add('The main ingredient is flour and sugar.');
    }
    else if (numberofing === 3){
      agent.add('The main ingredient is flour, sugar and chocolate chips.');
    }
    else if (numberofing === 4){
      agent.add('The main ingredient is flour, sugar, chocolate chips, vanilla and baking soda.');
    }
    else if (numberofing > 4){
      agent.add('The main ingredient is flour, sugar, chocolate chips, vanilla, eggs and baking soda.');
    }
  }
 
  
  
  const getDetailsArray = [
   'Make sure to use exactly 50 grams of sugar.',
   'You have to preheat oven to 350 degrees.',
   'For best results, bake cookies on middle oven rack.',
   'The best cookie sheets are shiny aluminum with a smooth surface and no sides.',
   'The ratio and type of sugars used, the amount of butter or shortening, and how much flour is stirred in all make a difference.',
   'Use a 1-inch meat baller (or a cookie/ice cream scoop) to make consistently even-shaped cookies.',
   'Drop dough 3 inches apart, and bake until edges are set.',
   'To ensure success in baking, measure ingredients accurately using the right measuring equipment.' 
  ];
  
  const getRandom = (len) => {
    const random = Math.floor(Math.random() * len);
    return random;
  };
  
  function getDetails(agent) {
    const random = getRandom(getDetailsArray.length);
    agent.add(getDetailsArray[random]);
  }
  
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('getRecipeforBakingIntent', getRecipeforBakingIntent);
  intentMap.set('getDetails', getDetails);
  intentMap.set('getIngredientsIntent', getIngredientsIntent);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
