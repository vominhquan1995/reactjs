let env = process.env.NODE_ENV || 'development';
let config = {
  development: {
    app: {
      url_image: 'https://www.google.com/',
    },
  },
  production: {
    app: {
      api: 'WILL_BE_REPLACE_PRODUCTION_URL_IMAGE',
    },
  },
};
export default config[env];