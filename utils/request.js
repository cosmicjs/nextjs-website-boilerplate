import Cosmic from 'cosmicjs'
import config from 'config'
import axios from 'axios'

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

async function contactForm(data, contact) {

  if (!config.env.SENDGRID_FUNCTION_ENDPOINT) {
    return {
      status: false,
      message: "You must add a SendGrid Function Endpoint URL.  Contact your developer to add this value."
    }
  } else {
    try {
      var message = 'Name:<br>' + data.name + '<br><br>' +
      'Subject:<br>' + contact.metadata.subject + '<br><br>' +
      'Message:<br>' + data.message + '<br><br>'
      var email_data = {
        from: data.email,
        to: contact.metadata.to,
        subject: data.name + ' sent you a new message',
        text_body: message,
        html_body: message
      }
      const url = config.env.SENDGRID_FUNCTION_ENDPOINT
      await axios.post(url, email_data)
      saveForm(data)
      return {
        status: true,
        message: 'Success.'
      }
    } catch(error) {
      return {
        status: false,
        message: "You must add a SendGrid Function Endpoint URL.  Contact your developer to add this value."
      }
    }
  }

  async function saveForm(data) {
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
    // Write to Cosmic Bucket (Optional)
    const response = await bucket.addObject(params)
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