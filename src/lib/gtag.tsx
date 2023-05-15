// Google Analytics 測定ID
export const GA_MEASUREMENT_ID = 'G-FEB3DM67MM';

export const pageview = (path: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
};
