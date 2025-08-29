         tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'quicksand': ['Quicksand', 'sans-serif'],
                        'poppins': ['Poppins', 'sans-serif'],
                    },
                    colors: {
                        'ochre': '#E67E22',
                        'ochre-light': '#F39C12',
                        'ochre-dark': '#D35400',
                        'warm-cream': '#FFF8DC',
                        'warm-beige': '#F4E4BC',
                        'warm-brown': '#8B4513',
                        'coral': '#FF6B35',
                        'sage': '#27AE60',
                        'purple-fun': '#9B59B6',
                        'blue-sky': '#3498DB',
                        'pink-candy': '#E91E63',
                        'yellow-sun': '#F1C40F'
                    }
                }
            }
        } 

        // Social media click handler
        function socialClick(platform) {
            const messages = {
                'Instagram': '📷 Check our Instagram for behind-the-scenes content!',
                'WhatsApp': '💬 Follow our whatsapp channel for the latest updates!'
            };
            showNotification(messages[platform]);
        }

      

        // Add interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects for info cards
            const infoCards = document.querySelectorAll('.hover-lift');
            infoCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-6px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0px) scale(1)';
                });
            });
        });

        // Make elements accessible
        document.addEventListener('DOMContentLoaded', function() {
            const gameCards = document.querySelectorAll('.game-card');
            gameCards.forEach(card => {
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
                card.setAttribute('aria-label', `Play ${card.querySelector('.text-xs').textContent}`);
            });
            
            const socialLinks = document.querySelectorAll('a[onclick]');
            socialLinks.forEach(link => {
                link.setAttribute('aria-label', 'Social media link');
            });
        });

        // Handle responsive behavior
        function handleResize() {
            const width = window.innerWidth;
            const sun = document.querySelector('.animated-sun');
            
            if (width <= 480) {
                sun.style.transform = 'scale(0.6)';
            } else if (width <= 768) {
                sun.style.transform = 'scale(0.7)';
            } else {
                sun.style.transform = 'scale(1)';
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on load

        // Get the registration button element
        const registerBtn = document.getElementById('registerBtn');

    
            const originalBtnText = registerBtn.innerHTML;
            
            registerBtn.addEventListener('click', function() {
                console.log("clicked");
                // Provide visual feedback to the user
                this.innerHTML = 'Redirecting...';
                this.disabled = true;
                
                // --- IMPORTANT ---
                // Replace this placeholder URL with your actual registration link (e.g., a Google Form).
                const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdp8flybfByxzf-LNLjzFYiflZCOfnP5k8H_NVqWy3c-Md_Lg/viewform?usp=header';

                // Open the registration link in a new tab
                window.open(registrationUrl, '_blank');
                
                // Reset the button text after a short delay
                // This is helpful if the user stays on the page or the popup is blocked
                setTimeout(() => {
                    this.innerHTML = originalBtnText;
                    this.disabled = false;
                }, 2500);
            });