// Performance monitoring utilities
export const reportWebVitals = (metric: {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Log to console in development, send to analytics in production
    console.log('Web Vital:', metric);

    // Future: Send to analytics service
    // analytics.track('Web Vital', metric);
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical font weights
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/fonts/jetbrains-mono-400.woff2';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }
};

// Measure performance
export const measurePerformance = (name: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    return {
      start: () => performance.mark(`${name}-start`),
      end: () => {
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
        const measure = performance.getEntriesByName(name)[0];
        console.log(`${name}: ${measure.duration.toFixed(2)}ms`);
        return measure.duration;
      },
    };
  }
  return { start: () => {}, end: () => 0 };
};
