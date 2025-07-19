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

export function downloadFile(url: string, filename: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function scrollToSection(sectionId: string): void {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}