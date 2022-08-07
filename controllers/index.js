const { PRODUCTS_URL, REVIEWS_URL, QA_URL } = process.env;

module.exports = {
  get: (target) => {
    let serverUrl = '';
    if (target === 'products') serverUrl = PRODUCTS_URL;
    if (target === 'reviews') serverUrl = REVIEWS_URL;
    if (target === 'qa') serverUrl = QA_URL;
    return (req, res) => res.redirect(301, `${serverUrl}${req.originalUrl}`);
  },

  postPut: (target) => {
    let serverUrl = '';
    if (target === 'products') serverUrl = PRODUCTS_URL;
    if (target === 'reviews') serverUrl = REVIEWS_URL;
    if (target === 'qa') serverUrl = QA_URL;
    return (req, res) => res.redirect(307, `${serverUrl}${req.originalUrl}`);
  },
};
