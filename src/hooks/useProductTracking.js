const trackProductView = (productCode) => {
    if (window._etmc) {
      window._etmc.push(["trackPageView", { item: productCode }]);
    }
  };
  
  const trackCategoryView = (category) => {
    if (window._etmc) {
      window._etmc.push(["trackPageView", { category }]);
    }
  };
  
  export { trackProductView, trackCategoryView };
  