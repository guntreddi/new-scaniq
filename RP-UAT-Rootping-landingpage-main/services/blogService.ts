
import { BlogPost } from '../types';

// MOCK DATA: This simulates what your backend would return.
const MOCK_BLOG_POST: BlogPost = {
  id: '1',
  title: 'The Rise of CTEM: Why Vulnerability Management is Failing',
  category: 'Threat Intelligence',
  author: 'Rootping Intelligence Team',
  date: new Date().toLocaleDateString(),
  readTime: '5 min read',
  content: `
## The Shift from Vulnerability to Exposure

In the modern threat landscape, the traditional approach of "scan and patch" is no longer sufficient. Security teams are drowning in alerts, yet breaches continue to happen. This is where **Continuous Threat Exposure Management (CTEM)** comes in.

### Key Trends in 2025

1.  **External Attack Surface Management (EASM)** is becoming a board-level metric.
2.  **Identity is the new perimeter.** 80% of breaches now involve compromised credentials rather than software exploits.
3.  **Automated Takedowns** are replacing manual legal requests for phishing sites.

### Why Context Matters

Without threat intelligence, a vulnerability is just a number. Rootping correlates your external assets with real-time dark web chatter to tell you not just *what* is vulnerable, but *who* is targeting it.

> "The goal is not to fix everything, but to fix the things that matter before an attacker finds them."

### Conclusion

Organizations must pivot from reactive patching to proactive exposure management. By unifying visibility across the open, deep, and dark web, defenders can regain the advantage.
  `
};

/**
 * Fetches the daily blog post.
 * 
 * TO CONNECT YOUR BACKEND:
 * 1. Replace the return statement below with the commented-out fetch code.
 * 2. Ensure your backend returns a JSON object matching the BlogPost interface.
 */
export const fetchDailyInsights = async (): Promise<BlogPost> => {
  // --- BACKEND INTEGRATION CODE ---
  /*
  try {
    const response = await fetch('https://api.yourdomain.com/api/blog/latest');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data as BlogPost;
  } catch (error) {
    console.error("Failed to fetch blog feed:", error);
    // Fallback to mock data if API fails
    return MOCK_BLOG_POST;
  }
  */
  // --------------------------------

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return MOCK_BLOG_POST;
};
