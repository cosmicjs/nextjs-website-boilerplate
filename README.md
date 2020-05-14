# Next.js Website Boilerplate
![nextjs-website-boilerplate](https://cosmic-s3.imgix.net/ef914540-3106-11e8-8a87-1d4e79eefafa-nextjs-cosmicjs.jpg)
A website template that satisfies some common website requirements including dynamic pages, blog articles, author management, SEO ability, contact form and website search.  Contributions welcome!

## Demo
[Click here to view the demo](https://cosmicjs.com/apps/nextjs-website-boilerplate)

> [Read how this app was built](https://cosmicjs.com/articles/nextjs-website-boilerplate-jeoea8au)

## Features
1. Fully responsive down to mobile w/ [Bootstrap](http://getbootstrap.com) frontend<br />
2. SEO ready<br />
3. A contact form that sends an email to your email(s) of choice and to [Cosmic](https://cosmicjs.com) for easy reference<br />
4. Full-site search functionality<br />
5. All content is easily managed in [Cosmic](https://cosmicjs.com) including pages, blog and contact info.

Sign up for [Cosmic](https://cosmicjs.com) to install the demo content and deploy this website.

## Getting Started

```bash
git clone https://github.com/cosmicjs/nextjs-website-boilerplate
cd nextjs-website-boilerplate
npm install

# Run in development and serve at localhost:3000
npm run dev

# build for production
npm run build

# Run in production and serve at localhost:3000
COSMIC_BUCKET=your-bucket-slug npm start
```
Import the `bucket.json` file into your Cosmic Bucket.  To do this go to Your Bucket > Settings > Import / Export Data.

## Contact form setup
Install and deploy the SendGrid Email Function.

<img src="https://cosmic-s3.imgix.net/a07738c0-00d6-11e9-95fe-59d8fdd00c64-sendgrid-email.png?w=1500" width="700" />

The contact form on the contact page uses the [SendGrid Email Function](https://github.com/cosmicjs/send-email-function) to send emails. To deploy your email function go to Your Bucket > Settings > Functions. Install and deploy the SendGrid Function. You will need an account with [SendGrid](https://sendgrid.com/) to add your SendGrid API key.

### Add the SendGrid Function Endpoint

#### in development
Go to `config/index.js` and edit `SENDGRID_FUNCTION_ENDPOINT` to manually add the URL for testing.

#### in production
If you are using the Web Hosting option that's included with every Bucket:
1. Go to Your Bucket > Settings > Web Hosting
2. Deploy your Website
3. Click 'Set Environment Variables' tab and add the SendGrid Function endpoint:

Key | Value
--- | ---
| SENDGRID_FUNCTION_ENDPOINT     | https://your-lambda-endpoint.amazonaws.com/dev/send-email
