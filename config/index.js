module.exports = {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'nextjs-medical-website',
      read_key: process.env.COSMIC_READ_KEY,
      write_key: process.env.COSMIC_WRITE_KEY
    },
    env: {
      MAILGUN_KEY : process.env.MAILGUN_KEY,
      MAILGUN_DOMAIN : process.env.MAILGUN_DOMAIN
    }
}