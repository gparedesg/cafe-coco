export const gtagReportConversion = (url?: string) => {
  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17609191068/Kzd_CMPeqLMbEJzd28xB',
      'value': 1.0,
      'currency': 'USD',
      'transaction_id': '',
      'event_callback': callback
    });
  }

  return false;
};