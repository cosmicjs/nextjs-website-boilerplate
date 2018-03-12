import Cosmic from 'cosmicjs'
import config from 'config'

const api = Cosmic()
const bucket = api.bucket({
  slug: config.bucket.slug,
  read_key: config.bucket.read_key,
  write_key: config.bucket.write_key
})

function getGlobals() {
  const params = {
    type_slug: 'globals'
  }
  return bucket.getObjectsByType(params);
}

function getPages() {
  const params = {
    type_slug: 'pages'
  };
  return bucket.getObjectsByType(params);
}

function getObject(slug) {
  const params = {
    slug: slug
  };
  return bucket.getObject(params);
}

function getObjects() {
  const params = {
  };
  return bucket.getObjects(params);
}

function getBlogs() {
  const params = {
    type_slug: 'blogs'
  };
  return bucket.getObjectsByType(params);
}

function contactForm(data, contact) {

  if (!config.env.MAILGUN_KEY || !config.env.MAILGUN_DOMAIN) {
    return {
      status: false,
      message: "You must add a MailGun api key and domain using environment variables located in Your Cosmic JS Bucket > Deploy to Web.  Contact your developer to add these values."
    }
  } else {
    var api_key = config.env.MAILGUN_KEY // add mailgun key
    var domain = config.env.MAILGUN_DOMAIN // add mailgun domain
    var mailgun = require('mailgun.js')({
      apiKey: api_key,
      domain: domain
    })
    var message = 'Name: ' + data.name + '\n\n' +
      'Subject: ' + contact.subject + '\n\n' +
      'Message: ' + data.message + '\n\n'
    var mailgun_data = {
      from: 'Your Website <me@' + domain + '>',
      to: contact.to,
      subject: data.name + ' sent you a new message: ' + data.message,
      text: message
    }
    mailgun.messages().send(mailgun_data, function (error, body) {
      if (error)
        return {
          status: false,
          message: "You must add a MailGun api key and domain using environment variables located in Your Cosmic JS Bucket > Deploy to Web.  Contact your developer to add these values."
        }
      else
        var res = saveForm(data);
      if (res.status) {
        return {
          status: true,
          message: contact.metadata.contact_form_success_message.value
        }
      }
    })
  }

  function saveForm(data) {
    //Send to Cosmic
    const params = {
      type_slug: 'form-submissions',
      title: data.name,
      content: data.message,

      metafields: [{
          title: 'Email',
          key: 'email',
          type: 'text',
          value: data.email
        },
        {
          title: 'Phone',
          key: 'phone',
          type: 'text',
          value: data.phone
        }
      ]
    }
    if (config.bucket.write_key)
      // Write to Cosmic Bucket (Optional)
      bucket.addObject(params, (err, response) => {
        return res.json({
          status: 'success',
          data: response
        })
      })
  }
}

export default {
  getGlobals,
  getPages,
  getBlogs,
  getObject,
  contactForm,
  getObjects
}