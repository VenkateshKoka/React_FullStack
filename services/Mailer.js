/**
 * Created by venkateshkoka on 11/22/17.
 */
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
  constructor({subject, recipients}, content){
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    // new helper.Content is sendgrid own implementation of content.
    this.body = new helper.Content('text/html',content);
    this.recipients = this.formatAddresses(recipients);

    // addContent is a super method from Mail class
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  };

  formatAddresses(recipients){
      return recipients.map(({ email}) =>{
          // this new helper.Email is for sendgrid api to construct it's own email from the
          // input email address..
         return new helper.Email(email);
      });
  }
    addClickTracking(){
      // everything below is standard documentation of sendgrid
      const trackingSettings = new helper.TrackingSettings();
      const clickTracking = new helper.ClickTracking(true,true);

      trackingSettings.setClickTracking(clickTracking);
      this.addTrackingSettings(trackingSettings);
    };

   addRecipients(){
     const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
        personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
   };

   async send(){
       const request = this.sgApi.emptyRequest({
          method:'POST',
           path:'/v3/mail/send',
           body:this.toJSON()
       });
       const response =  await this.sgApi.API(request);
       return response;
   };

}

module.exports = Mailer;