// ============================================
// Crown & Color - Gemini AI Integration
// Provides AI-powered style recommendations and chat
// ============================================

class CrownColorAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        this.chatHistory = [];
        this.systemPrompt = `You are Crown & Color's AI Style Advisor, an expert in African hairstyles, braids, locs, twists, and natural hair care. You help users:

1. Choose hairstyles that suit their face shape and skin tone
2. Understand maintenance requirements for different styles
3. Learn about trending styles and color recommendations
4. Get tips for hair health and protection

Be warm, encouraging, and knowledgeable. Use simple language. Keep responses concise (under 150 words) unless asked for details.

Available styles on our platform:
- Box Braids (classic, jumbo, goddess, bohemian)
- Knotless Braids (classic, boho with curly strands, bob)
- Cornrows (straight back, fulani, lemonade, geometric)
- Twists (passion, senegalese, marley, spring)
- Locs (faux, goddess, butterfly, soft)
- Natural styles (afro, TWA, twist-out, wash and go)
- Wigs (lace front, closure, glueless)

When recommending colors, consider skin undertones:
- Warm undertones: honey, caramel, auburn, copper
- Cool undertones: burgundy, plum, blue-black, silver
- Neutral: can wear both warm and cool colors`;
    }

    async sendMessage(userMessage) {
        this.chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });

        const requestBody = {
            contents: [
                { role: 'user', parts: [{ text: this.systemPrompt }] },
                { role: 'model', parts: [{ text: 'I understand. I am Crown & Color\'s AI Style Advisor, ready to help with hairstyle recommendations, maintenance tips, color suggestions, and more. How can I help you today?' }] },
                ...this.chatHistory
            ],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 500,
            }
        };

        try {
            const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const aiResponse = data.candidates[0].content.parts[0].text;

            this.chatHistory.push({ role: 'model', parts: [{ text: aiResponse }] });
            return aiResponse;
        } catch (error) {
            console.error('Gemini AI Error:', error);
            return this.getFallbackResponse(userMessage);
        }
    }

    getFallbackResponse(message) {
        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes('knotless') || lowerMessage.includes('boho')) {
            return "Knotless braids are perfect for a natural, tension-free look! Boho knotless have curly strands woven throughout for that goddess vibe. They typically last 4-6 weeks with proper care. Would you like tips on maintaining them?";
        }
        if (lowerMessage.includes('locs') || lowerMessage.includes('faux')) {
            return "Faux locs give you the loc look without the commitment! Butterfly locs are trending right now - they're soft and lightweight. Goddess locs have curly ends for a boho feel. They can last 6-8 weeks!";
        }
        if (lowerMessage.includes('cornrow')) {
            return "Cornrows are a classic protective style! Fulani braids with beads and accessories are very popular. Lemonade braids (side-swept) are also trending. They typically last 2-4 weeks.";
        }
        if (lowerMessage.includes('color') || lowerMessage.includes('colour')) {
            return "For color recommendations, I'd consider your skin undertone! Warm undertones look great with honey blonde, auburn, and copper. Cool undertones shine with burgundy, plum, or blue-black. What's your skin tone?";
        }
        if (lowerMessage.includes('face') || lowerMessage.includes('shape')) {
            return "Face shape matters for choosing styles! Oval faces suit most styles. Round faces look great with height-adding styles like high ponytails. Heart-shaped faces rock chin-length bobs. What's your face shape?";
        }

        return "I'd love to help you find the perfect hairstyle! You can ask me about specific styles (knotless, locs, cornrows, twists), color recommendations, maintenance tips, or which styles suit your face shape. What would you like to know?";
    }

    async getStyleRecommendation(preferences) {
        const prompt = `Based on these preferences, recommend 3 hairstyles from our catalog:
Face Shape: ${preferences.faceShape || 'not specified'}
Skin Tone: ${preferences.skinTone || 'not specified'}
Lifestyle: ${preferences.lifestyle || 'not specified'}
Maintenance Level: ${preferences.maintenance || 'not specified'}
Preferred Length: ${preferences.length || 'not specified'}

Give specific style names and brief reasons why each would work.`;

        return await this.sendMessage(prompt);
    }

    clearHistory() {
        this.chatHistory = [];
    }
}

// ============================================
// Chat Widget UI
// ============================================
function initChatWidget() {
    // Create chat widget HTML
    const chatWidgetHTML = `
        <div class="ai-chat-widget" id="ai-chat-widget">
            <button class="ai-chat-toggle" id="ai-chat-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span class="chat-badge">AI</span>
            </button>
            <div class="ai-chat-panel" id="ai-chat-panel">
                <div class="ai-chat-header">
                    <div class="ai-avatar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                    </div>
                    <div>
                        <h4>Style Advisor</h4>
                        <span class="ai-status">Powered by Gemini AI</span>
                    </div>
                    <button class="ai-chat-close" id="ai-chat-close">×</button>
                </div>
                <div class="ai-chat-messages" id="ai-chat-messages">
                    <div class="ai-message">
                        <p>Hey! 👋 I'm your Crown & Color Style Advisor. I can help you:</p>
                        <ul>
                            <li>Find styles that suit your face shape</li>
                            <li>Recommend colors for your skin tone</li>
                            <li>Answer maintenance questions</li>
                        </ul>
                        <p>What would you like to know?</p>
                    </div>
                </div>
                <div class="ai-quick-prompts">
                    <button class="quick-prompt" data-prompt="What knotless braids would suit a round face?">Knotless for round face</button>
                    <button class="quick-prompt" data-prompt="What hair colors suit dark skin?">Colors for dark skin</button>
                    <button class="quick-prompt" data-prompt="How do I maintain passion twists?">Maintain twists</button>
                </div>
                <div class="ai-chat-input">
                    <input type="text" id="ai-input" placeholder="Ask about hairstyles..." />
                    <button id="ai-send">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

    // Initialize AI (using placeholder key - user should replace)
    const aiApiKey = localStorage.getItem('gemini_api_key') || 'YOUR_GEMINI_API_KEY';
    const crownAI = new CrownColorAI(aiApiKey);

    // Get elements
    const chatWidget = document.getElementById('ai-chat-widget');
    const chatToggle = document.getElementById('ai-chat-toggle');
    const chatPanel = document.getElementById('ai-chat-panel');
    const chatClose = document.getElementById('ai-chat-close');
    const chatMessages = document.getElementById('ai-chat-messages');
    const chatInput = document.getElementById('ai-input');
    const chatSend = document.getElementById('ai-send');
    const quickPrompts = document.querySelectorAll('.quick-prompt');

    // Toggle chat panel
    chatToggle.addEventListener('click', () => {
        chatPanel.classList.toggle('active');
        chatToggle.classList.toggle('active');
    });

    chatClose.addEventListener('click', () => {
        chatPanel.classList.remove('active');
        chatToggle.classList.remove('active');
    });

    // Send message function
    async function sendMessage(message) {
        if (!message.trim()) return;

        // Add user message
        const userDiv = document.createElement('div');
        userDiv.className = 'user-message';
        userDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(userDiv);

        // Clear input
        chatInput.value = '';

        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message typing';
        typingDiv.innerHTML = '<p>Thinking...</p>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Get AI response
        const response = await crownAI.sendMessage(message);

        // Remove typing indicator
        typingDiv.remove();

        // Add AI response
        const aiDiv = document.createElement('div');
        aiDiv.className = 'ai-message';
        aiDiv.innerHTML = `<p>${response.replace(/\n/g, '<br>')}</p>`;
        chatMessages.appendChild(aiDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listeners
    chatSend.addEventListener('click', () => sendMessage(chatInput.value));
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage(chatInput.value);
    });

    quickPrompts.forEach(btn => {
        btn.addEventListener('click', () => {
            sendMessage(btn.dataset.prompt);
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initChatWidget);
