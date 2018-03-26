# Next.js Website Boilerplate
![nextjs-website-boilerplate](https://cosmic-s3.imgix.net/ef914540-3106-11e8-8a87-1d4e79eefafa-nextjs-cosmicjs.jpg)
A website template that satisfies some common website requirements including dynamic pages, blog articles, author management, SEO ability, contact form and website search.  Contributions welcome!

## Demo
[Click here to view a demo website (Medical Professional)](https://cosmicjs.com/apps/medical-professional/demo)

> [Read full tutorial on the blog](https://cosmicjs.com/articles/nextjs-website-boilerplate-jeoea8au)

## Features
1. Fully responsive down to mobile w/ [Bootstrap](http://getbootstrap.com) frontend<br />
2. SEO ready<br />
3. A contact form that sends an email to your email(s) of choice and to [Cosmic JS](https://cosmicjs.com) for easy reference<br />
4. Full-site search functionality<br />
5. All content is easily managed in [Cosmic JS](https://cosmicjs.com) including pages, blog and contact info.

Sign up for [Cosmic JS](https://cosmicjs.com) to install the demo content and deploy this website.

## Configs

To add your mailgun cradentials go to your Cosmic Bucket. Click Settings and go to 'Deploy Web App'
click 'Set Environment Variables' tab and add the following variables:
```
key => MAILGUN_KEY  value => 'your key'

key => MAILGUN_DOMAIN      value => 'your domain'
```
## Getting Started

``` bash
git clone https://github.com/cosmicjs/nodejs-website-boilerplate
cd nextjs-website-boilerplate
npm install

# Run in development and serve at localhost:3000
npm run dev

# build for production
npm run build

# Run in production and serve at localhost:3000
COSMIC_BUCKET=your-bucket-slug npm start
```
