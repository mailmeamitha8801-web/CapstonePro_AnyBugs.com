        
class PerformanceBugRepro {
  constructor(page) {
    this.page = page;

    this.loadingSpinner = page.locator('#post-125 div[style*="animation: rotation"]');

    this.pageContent = page.locator('#post-125 .entry-content');
  }

  async openRequestQuotePage() {
    
    await this.page.goto('/request-a-quote/');
  }
};

module.exports = { PerformanceBugRepro };

    
