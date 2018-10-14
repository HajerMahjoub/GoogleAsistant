//Initialize the DialogflowApp object



const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Welcome_Intent', (conv) => {
  
});

exports.welcomeIntent = functions.https.onRequest(app);


//RequestPart
const app = dialogflow();

const WELCOME_INTENT = 'Default Welcome Intent';
const NUMBER_INTENT = 'Input Number';
const NUMBER_ARGUMENT = 'num';
app.fallback((conv) => {
    const intent = conv.intent;
      switch (intent) {

        case ' Welcome_Intent' :
      conv.ask(new SimpleRespone({
        speech: 'Wellcome to My Story ' +'do you want discover new story ?'
        text:'Wellcome to My Story'
                
      }));
      break;
     case 'Cathegorie_Story' :

   if (!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {
    conv.ask('sorry not available on your device');
    return;
    const Cathegorie_Story = conv.arguments.get(WelcomeIntent);
  conv.ask(new Response({
      speech: 
  }))
  // Create a basic card
  conv.ask(new BasicCard({
    text: 'Here is the story for you : ' + myStory
    subtitle: 'myStory',
    title: 'myStory',
    
    
    }))};
    break;


   
    
    