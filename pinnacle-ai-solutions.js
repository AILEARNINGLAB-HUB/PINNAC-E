
        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 500);
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navbarMenu = document.querySelector('.navbar-menu');
        
        hamburger.addEventListener('click', function() {
            this.classList.toggle('open');
            navbarMenu.classList.toggle('active');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    hamburger.classList.remove('open');
                    navbarMenu.classList.remove('active');
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        // Scroll indicator
        window.addEventListener('scroll', function() {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            scrollIndicator.style.width = progress + '%';
        });
        
        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Chatbot toggle
        const chatbotToggle = document.querySelector('.chatbot-toggle');
        const chatbotContainer = document.querySelector('.chatbot-container');
        const chatbotClose = document.querySelector('.chatbot-close');
        
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('active');
        });
        
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
        });
        
        // Chatbot functionality
        const chatbotInput = document.querySelector('.chatbot-input input');
        const chatbotSendButton = document.querySelector('.chatbot-input button');
        const chatbotMessages = document.querySelector('.chatbot-messages');
        
        function addMessage(message, isUser = false) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add(isUser ? 'user' : 'bot');
            
            const messageContent = document.createElement('div');
            messageContent.classList.add('message-content');
            messageContent.textContent = message;
            
            messageElement.appendChild(messageContent);
            chatbotMessages.appendChild(messageElement);
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function handleUserMessage() {
            const message = chatbotInput.value.trim();
            if (message) {
                addMessage(message, true);
                chatbotInput.value = '';
                
                // Simulate typing indicator
                const typingIndicator = document.createElement('div');
                typingIndicator.classList.add('message', 'bot');
                typingIndicator.innerHTML = `
                    <div class="message-content typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                `;
                chatbotMessages.appendChild(typingIndicator);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                
                // Simulate bot response after delay
                setTimeout(() => {
                    chatbotMessages.removeChild(typingIndicator);
                    
                    // Simple responses based on keywords
                    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
                        addMessage('Hello! How can I help you today?');
                    } else if (message.toLowerCase().includes('service')) {
                        addMessage('We offer a range of AI services including app development, deployment, maintenance, and more. Would you like to know more about a specific service?');
                    } else if (message.toLowerCase().includes('contact')) {
                        addMessage('You can reach us at futureai4all@gmail.com or call us at 352-231-9154. Would you like to schedule a consultation?');
                    } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
                        addMessage('Our pricing varies based on project requirements. Would you like to request a custom quote?');
                    } else {
                        addMessage('Thank you for your message. One of our team members will get back to you shortly. Is there anything else I can help you with?');
                    }
                }, 1500);
            }
        }
        
        chatbotSendButton.addEventListener('click', handleUserMessage);
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleUserMessage();
            }
        });
        
        // Notification
        setTimeout(() => {
            const notification = document.querySelector('.notification');
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        }, 3000);
        
        document.querySelector('.notification-close').addEventListener('click', function() {
            document.querySelector('.notification').classList.remove('show');
        });
        
        // Cursor effect
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        document.addEventListener('mousedown', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        
        document.addEventListener('mouseup', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        
        // Hover effect for links and buttons
        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
                cursorFollower.style.width = '30px';
                cursorFollower.style.height = '30px';
            });
            
            link.addEventListener('mouseleave', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.5)';
                cursorFollower.style.width = '40px';
                cursorFollower.style.height = '40px';
            });
        });
        
        // Fade in animation for elements
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function checkFade() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                
                if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                }
            });
        }
        
        window.addEventListener('scroll', checkFade);
        window.addEventListener('resize', checkFade);
        window.addEventListener('load', checkFade);
        
        // Neural network animation
        function createNeuralNetwork() {
            const neuralNetwork = document.querySelector('.neural-network');
            if (!neuralNetwork) return;
            
            // Clear previous network
            neuralNetwork.innerHTML = '';
            
            const layers = [4, 8, 8, 4]; // Number of nodes in each layer
            const nodesByLayer = [];
            
            // Create nodes
            layers.forEach((nodeCount, layerIndex) => {
                const nodes = [];
                for (let i = 0; i < nodeCount; i++) {
                    const node = document.createElement('div');
                    node.classList.add('node');
                    
                    // Position nodes
                    const layerWidth = neuralNetwork.offsetWidth;
                    const layerHeight = neuralNetwork.offsetHeight;
                    
                    const x = (layerWidth / (layers.length + 1)) * (layerIndex + 1);
                    const y = (layerHeight / (nodeCount + 1)) * (i + 1);
                    
                    node.style.left = x + 'px';
                    node.style.top = y + 'px';
                    
                    neuralNetwork.appendChild(node);
                    nodes.push(node);
                }
                nodesByLayer.push(nodes);
            });
            
            // Create connections between layers
            for (let i = 0; i < nodesByLayer.length - 1; i++) {
                const currentLayerNodes = nodesByLayer[i];
                const nextLayerNodes = nodesByLayer[i + 1];
                
                currentLayerNodes.forEach(startNode => {
                    nextLayerNodes.forEach(endNode => {
                        const connection = document.createElement('div');
                        connection.classList.add('connection');
                        
                        // Get positions
                        const startRect = startNode.getBoundingClientRect();
                        const endRect = endNode.getBoundingClientRect();
                        const networkRect = neuralNetwork.getBoundingClientRect();
                        
                        const startX = startRect.left - networkRect.left + startNode.offsetWidth / 2;
                        const startY = startRect.top - networkRect.top + startNode.offsetHeight / 2;
                        const endX = endRect.left - networkRect.left + endNode.offsetWidth / 2;
                        const endY = endRect.top - networkRect.top + endNode.offsetHeight / 2;
                        
                        // Calculate length and angle
                        const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
                        
                        // Set styles
                        connection.style.width = length + 'px';
                        connection.style.left = startX + 'px';
                        connection.style.top = startY + 'px';
                        connection.style.transform = `rotate(${angle}deg)`;
                        
                        neuralNetwork.appendChild(connection);
                    });
                });
            }
            
            // Animate nodes
            const nodes = document.querySelectorAll('.node');
            nodes.forEach(node => {
                setInterval(() => {
                    node.style.backgroundColor = `rgb(${Math.floor(Math.random() * 100) + 99}, ${Math.floor(Math.random() * 100) + 102}, ${Math.floor(Math.random() * 100) + 241})`;
                    node.style.boxShadow = `0 0 10px rgb(${Math.floor(Math.random() * 100) + 99}, ${Math.floor(Math.random() * 100) + 102}, ${Math.floor(Math.random() * 100) + 241})`;
                }, Math.random() * 2000 + 1000);
            });
        }
        
        window.addEventListener('load', createNeuralNetwork);
        window.addEventListener('resize', createNeuralNetwork);
        
        // Particle effect
        function createParticles() {
            const heroParticles = document.querySelector('.hero-particles');
            if (!heroParticles) return;
            
            // Clear previous particles
            heroParticles.innerHTML = '';
            
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 3 + 1;
                
                // Random opacity
                const opacity = Math.random() * 0.5 + 0.1;
                
                // Set styles
                particle.style.left = x + '%';
                particle.style.top = y + '%';
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.opacity = opacity;
                
                // Animation
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                
                heroParticles.appendChild(particle);
            }
        }
        
        window.addEventListener('load', createParticles);
        
        // Contact form submission
        const contactForm = document.querySelector('.contact-form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                submitButton.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
                
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                }, 3000);
                
                // Show notification
                const notification = document.querySelector('.notification');
                notification.querySelector('h4').textContent = 'Message Sent!';
                notification.querySelector('p').textContent = 'We\'ll get back to you as soon as possible.';
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 5000);
            }, 2000);
        });
        
        // Initialize progress bars with animation
        function initProgressBars() {
            const progressBars = document.querySelectorAll('.progress-fill');
            
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }
        
        window.addEventListener('load', initProgressBars);
        
        // Data chart animation
        function animateDataChart() {
            const bars = document.querySelectorAll('.data-bar');
            
            bars.forEach(bar => {
                const height = Math.floor(Math.random() * 70) + 30 + '%';
                bar.style.height = '0';
                
                setTimeout(() => {
                    bar.style.height = height;
                }, Math.random() * 1000);
            });
        }
        
        window.addEventListener('load', animateDataChart);
        
        // Intersection Observer for animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.card, .feature-card, .ai-model-card, .testimonial-card').forEach(element => {
            observer.observe(element);
        });
        
        // Update active nav link on scroll
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 150 && window.pageYOffset < sectionTop + sectionHeight - 150) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNavLink);
        window.addEventListener('load', updateActiveNavLink);
    