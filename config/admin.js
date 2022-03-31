module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2070fe60edfa2ef02ed439ba7826ce4c'),
  },
});
