// Main JavaScript file for Dashboard App

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Modal functionality
    const configureBtn = document.getElementById('configureBtn');
    const configModal = document.getElementById('configModal');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');

    if (configureBtn && configModal) {
        configureBtn.addEventListener('click', function() {
            configModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            configModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            configModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (configModal) {
        window.addEventListener('click', function(event) {
            if (event.target === configModal) {
                configModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Dashboard controls
    const refreshBtn = document.getElementById('refreshBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            // Add refresh functionality here
            showNotification('Dashboard refreshed!', 'success');
        });
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            const powerbiContainer = document.querySelector('.powerbi-container');
            if (powerbiContainer) {
                if (!document.fullscreenElement) {
                    powerbiContainer.requestFullscreen().catch(err => {
                        console.log('Error attempting to enable fullscreen:', err);
                    });
                } else {
                    document.exitFullscreen();
                }
            }
        });
    }

    // Configuration form handling
    const configForm = document.getElementById('configForm');
    if (configForm) {
        configForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const embedUrl = document.getElementById('embedUrl').value;
            const reportId = document.getElementById('reportId').value;
            const workspaceId = document.getElementById('workspaceId').value;

            if (embedUrl && reportId && workspaceId) {
                // Here you would typically send this data to your backend
                // For now, we'll just show a success message
                showNotification('Configuration saved successfully!', 'success');
                configModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Update the placeholder with configuration info
                updatePowerBIPlaceholder(embedUrl, reportId, workspaceId);
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation classes to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .stat-card, .tech-card').forEach(el => {
        observer.observe(el);
    });
});

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;

    // Add to document
    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function updatePowerBIPlaceholder(embedUrl, reportId, workspaceId) {
    const placeholder = document.querySelector('.powerbi-placeholder');
    if (placeholder) {
        placeholder.innerHTML = `
            <div class="placeholder-content">
                <i class="fas fa-check-circle placeholder-icon" style="color: #4CAF50;"></i>
                <h3>Configuration Applied</h3>
                <p>Your Power BI dashboard configuration has been saved.</p>
                <div class="config-details">
                    <p><strong>Report ID:</strong> ${reportId}</p>
                    <p><strong>Workspace ID:</strong> ${workspaceId}</p>
                    <p><strong>Status:</strong> Ready to embed</p>
                </div>
                <button class="btn btn-primary" onclick="location.reload()">
                    <i class="fas fa-sync-alt"></i>
                    Reload Dashboard
                </button>
            </div>
        `;
    }
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .config-details {
        background: rgba(255, 255, 255, 0.1);
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        text-align: left;
    }

    .config-details p {
        margin: 0.5rem 0;
        font-size: 0.9rem;
    }
`;

document.head.appendChild(notificationStyles);
