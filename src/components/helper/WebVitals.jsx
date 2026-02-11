import { useEffect } from 'react';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

function WebVitals() {
    useEffect(() => {
        // Report Core Web Vitals
        const reportWebVital = (metric) => {
            // Log to console in development
            if (process.env.NODE_ENV === 'development') {
                console.log(metric);
            }

            // You can send to analytics service here
            // Example: analytics.send(metric)
        };

        onCLS(reportWebVital);
        onFID(reportWebVital);
        onLCP(reportWebVital);
        onFCP(reportWebVital);
        onTTFB(reportWebVital);
    }, []);

    return null;
}

export default WebVitals;
