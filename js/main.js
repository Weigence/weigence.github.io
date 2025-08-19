/**
 * Progress Bar Animation Module
 * Handles the animated progress bar functionality
 */

(function() {
    'use strict';
    
    /**
     * Initialize the progress bar animation
     */
    function initializeProgressBar() {
        const progressBar = document.getElementById('progressBar');
        
        if (!progressBar) {
            console.error('Progress bar element not found');
            return;
        }
        
        let progress = 0;
        const incrementValue = 10;
        const maxProgress = 100;
        const animationInterval = 500; // milliseconds
        
        /**
         * Update progress bar width
         */
        function updateProgress() {
            progress = (progress + incrementValue) % (maxProgress + incrementValue);
            progressBar.style.width = `${progress}%`;
        }
        
        // Start the animation
        setInterval(updateProgress, animationInterval);
    }
    
    /**
     * Initialize all modules when DOM is ready
     */
    function initialize() {
        initializeProgressBar();
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
})();
