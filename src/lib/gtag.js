export const GTM_ID = 'GTM-XXXXXXX'; // Replace with your GTM ID

export const pageview = (url) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url,
  });
};
