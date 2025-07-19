// Static utility functions for the portfolio site
// This replaces server communication with static functionality

export function simulateFormSubmission(data: Record<string, any>): Promise<void> {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(resolve, 1500);
  });
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}