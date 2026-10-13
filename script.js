    
    //  конт
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }

//    +-текст
    const fontToggleBtn = document.getElementById('font-toggle');
    let currentFontSizeLevel = 0; 

    if (fontToggleBtn) {
        fontToggleBtn.addEventListener('click', () => {
           
            document.body.classList.remove('fixed-large');
            
     
            document.body.classList.remove('font-size-1', 'font-size-2', 'font-size-3');

            currentFontSizeLevel++;
            if (currentFontSizeLevel > 3) {
                currentFontSizeLevel = 0; 
            }

            if (currentFontSizeLevel > 0) {
                document.body.classList.add(`font-size-${currentFontSizeLevel}`);
            }
        });
    }

    //  фікстекст
    const largeFixedToggleBtn = document.getElementById('large-fixed-toggle');
    if (largeFixedToggleBtn) {
        largeFixedToggleBtn.addEventListener('click', () => {
        
            currentFontSizeLevel = 0;
            document.body.classList.remove('font-size-1', 'font-size-2', 'font-size-3');

            
            document.body.classList.toggle('fixed-large');
        });
    }

    //    формзв
    const feedbackForm = document.getElementById('feedback-form');
    const successMessage = document.getElementById('success-message');

    if (feedbackForm && successMessage) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            
            feedbackForm.reset();
            
           
            successMessage.style.display = 'block';
            
            
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 4000);
        });
    }
