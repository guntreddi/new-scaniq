
// Service deprecated. 
// The AI Analyst and Real-time Blog generation features have been disabled.
// To re-enable, install @google/genai and restore the API connection logic.

export const streamThreatAnalysis = async (prompt: string) => {
  console.warn("AI Analyst is currently disabled.");
  return null;
};

export const generateMarketingBlog = async () => {
  console.warn("AI Blog generation is currently disabled.");
  return "Blog generation disabled.";
};
