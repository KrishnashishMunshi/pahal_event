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
  
  // Utility function to show notifications
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium shadow-lg font-quicksand ${
                type === 'success' ? 'bg-sage text-white border-green-400' : 'bg-coral text-white border-red-400'
            }`;
            notification.innerHTML = message;
            
            document.body.appendChild(notification);
            
            // Trigger show animation
            setTimeout(() => notification.classList.add('show'), 100);
            
            // Auto hide after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 400);
            }, 3000);
        }

        // Logo click handler
        function logoClick() {
            showNotification('🎪 Welcome to Childhood Carnival! A magical experience awaits!');
        }

        // Game card click handler
        function gameClick(gameName) {
            const messages = {
                'Water Pong': '🎯 Water Pong - Test your aim and win amazing prizes!',
                'Spoon Rush': '🥄 Spoon Rush - Balance and speed in this exciting race!',
                'Ring Toss': '💍 Ring Toss - Test your accuracy and win rewards!',
                'Blindfolded Art': '🎨 Blindfolded Art - Create masterpieces without seeing!',
                'DIY Gifts': '🎁 DIY Gifts - Make beautiful handmade treasures!',
                'Pyramid Siege': '🥤 Pyramid Siege - Knock down the pyramid and win!',
                'Life-size Snake and Ladders': '🐍 Life-size Snakes and Ladders - Play the classic game in real life!',
                'Beyblades': '🌀 Beyblades - Let it rip and battle to victory!'
            };
            showNotification(messages[gameName] || `🎮 ${gameName} - Coming soon!`);
        }

        // Social media click handler
        function socialClick(platform) {
            const messages = {
                'Instagram': '📷 Check our Instagram for behind-the-scenes content!',
                'WhatsApp': '💬 Follow our whatsapp channel for the latest updates!'
            };
            showNotification(messages[platform]);
        }

        // Main registration button handler
        document.addEventListener('DOMContentLoaded', function() {
            const registerBtn = document.getElementById('registerBtn');
            
            registerBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Button press animation
                this.style.transform = 'translateY(0px) scale(0.96)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(-3px) scale(1.05)';
                    showNotification('✅ Registration interest recorded! Event details will be shared with you soon. Get ready for an amazing carnival experience!');
                }, 150);
            });
        });

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

        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.target.classList.contains('game-card')) {
                e.target.click();
            }
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