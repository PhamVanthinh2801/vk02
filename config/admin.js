module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ae8aa2f06d340c202e047633fd506172'),
  },
});
