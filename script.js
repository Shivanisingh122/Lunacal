document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabs = document.querySelectorAll('.tab-container .tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add 'active' class to the clicked tab
        this.classList.add('active');
        
        // Add logic to show/hide content based on active tab
        const tabContentId = this.classList[1]; // Use class of the clicked tab to determine content
        document.querySelectorAll('.tab-content').forEach(content => {
          content.style.display = content.classList.contains(tabContentId) ? 'block' : 'none';
        });
      });
    });

    
  });
  