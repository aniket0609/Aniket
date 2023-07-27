// This function is used to measure and report web performance metrics
const reportWebVitals = onPerfEntry => {
  // Check if the 'onPerfEntry' parameter is provided and it is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Asynchronously import the 'web-vitals' module
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the 'getCLS', 'getFID', 'getFCP', 'getLCP', and 'getTTFB' functions from the 'web-vitals' module
      // and pass the 'onPerfEntry' function as a callback to report the metrics
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // First Input Delay (FID)
      getFCP(onPerfEntry); // First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Time to First Byte (TTFB)
    });
  }
};

// Export the 'reportWebVitals' function as the default export
export default reportWebVitals;
