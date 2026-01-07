const hairstyles = [
    // Box Braids (3 unique images)
    { id: 1, name: "Classic Box Braids", category: "box-braids", image: "assets/styles/box-braids-1.jpg", trending: true, length: "long" },
    { id: 2, name: "Jumbo Box Braids", category: "box-braids", image: "assets/styles/box-braids-2.jpg", trending: true, length: "long" },
    { id: 3, name: "Bantu Knots", category: "box-braids", image: "assets/styles/box-braids-3.jpg", trending: true, length: "short" },

    // Locs (5 unique images)
    { id: 4, name: "Butterfly Locs", category: "locs", image: "assets/styles/locs-1.jpg", trending: true, length: "medium" },
    { id: 5, name: "Goddess Locs", category: "locs", image: "assets/styles/locs-2.jpg", trending: true, length: "long", boho: true },
    { id: 6, name: "Halo Braid Crown", category: "locs", image: "assets/styles/locs-3.jpg", trending: true, length: "short" },
    { id: 7, name: "Faux Locs", category: "locs", image: "assets/styles/locs-4.jpg", trending: true, length: "long" },
    { id: 8, name: "Soft Locs", category: "locs", image: "assets/styles/locs-5.jpg", trending: true, length: "medium" },

    // Knotless (4 items)
    { id: 9, name: "Classic Knotless", category: "knotless", image: "assets/styles/knotless-1.jpg", trending: true, length: "long" },
    { id: 20, name: "Boho Knotless", category: "knotless", image: "assets/styles/boho-knotless-1.jpg", trending: true, length: "long", boho: true },
    { id: 10, name: "Knotless with Curls", category: "knotless", image: "assets/styles/knotless-2.jpg", trending: true, length: "long" },
    { id: 11, name: "Curly Knotless Bob", category: "knotless", image: "assets/styles/knotless-3.jpg", trending: true, length: "short" },

    // Cornrows (4 unique images)
    { id: 12, name: "Geometric Cornrows", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: true, length: "short" },
    { id: 13, name: "Fulani Braids", category: "cornrows", image: "assets/styles/cornrows-2.jpg", trending: true, length: "medium" },
    { id: 14, name: "Cornrow Updo", category: "cornrows", image: "assets/styles/cornrows-3.jpg", trending: true, length: "short" },
    { id: 15, name: "Cornrow Ponytail", category: "cornrows", image: "assets/styles/cornrows-4.jpg", trending: true, length: "long" },

    // Twists (3 unique images)
    { id: 16, name: "Passion Twists", category: "twists", image: "assets/styles/twists-1.jpg", trending: true, length: "medium" },
    { id: 17, name: "Spring Twists", category: "twists", image: "assets/styles/twists-2.jpg", trending: true, length: "short" },
    { id: 19, name: "Marley Twists", category: "twists", image: "assets/styles/twists-3.jpg", trending: true, length: "long" },

    // Natural (1 unique image)
    { id: 18, name: "Natural Afro", category: "natural", image: "assets/styles/natural-1.jpg", trending: true, length: "medium" },
];

const colorRecommendations = {
    fair: [
        { name: "Honey Blonde", hex: "#D4A76A" },
        { name: "Auburn", hex: "#A52A2A" },
        { name: "Light Brown", hex: "#987654" },
        { name: "Rose Gold", hex: "#B76E79" },
        { name: "Soft Pink", hex: "#E8B4B8" },
        { name: "Caramel", hex: "#C68E17" },
        { name: "Platinum", hex: "#E5E4E2" },
        { name: "Strawberry", hex: "#FF9999" },
    ],
    light: [
        { name: "Caramel", hex: "#C68E17" },
        { name: "Chestnut", hex: "#954535" },
        { name: "Golden Brown", hex: "#996515" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Copper", hex: "#B87333" },
        { name: "Amber", hex: "#FFBF00" },
        { name: "Bronze", hex: "#CD7F32" },
        { name: "Mahogany", hex: "#C04000" },
    ],
    medium: [
        { name: "Dark Brown", hex: "#654321" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Copper", hex: "#B87333" },
        { name: "Wine", hex: "#722F37" },
        { name: "Espresso", hex: "#4E3629" },
        { name: "Cinnamon", hex: "#D2691E" },
        { name: "Auburn", hex: "#A52A2A" },
        { name: "Merlot", hex: "#730039" },
    ],
    tan: [
        { name: "Dark Brown", hex: "#3B2F2F" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Deep Burgundy", hex: "#5C0029" },
        { name: "Espresso", hex: "#4E3629" },
        { name: "Plum", hex: "#8E4585" },
        { name: "Wine", hex: "#722F37" },
        { name: "Chocolate", hex: "#4D3319" },
        { name: "Royal Blue", hex: "#4169E1" },
    ],
    brown: [
        { name: "Jet Black", hex: "#0A0A0A" },
        { name: "Dark Brown", hex: "#3B2F2F" },
        { name: "Violet", hex: "#7F00FF" },
        { name: "Deep Red", hex: "#8B0000" },
        { name: "Blue Black", hex: "#1C2951" },
        { name: "Plum", hex: "#8E4585" },
        { name: "Green", hex: "#228B22" },
        { name: "Electric Blue", hex: "#7DF9FF" },
    ],
    dark: [
        { name: "Jet Black", hex: "#0A0A0A" },
        { name: "Blue Black", hex: "#1C2951" },
        { name: "Violet", hex: "#7F00FF" },
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Red", hex: "#FF0000" },
        { name: "Electric Blue", hex: "#7DF9FF" },
        { name: "Neon Pink", hex: "#FF6EC7" },
        { name: "Emerald", hex: "#50C878" },
    ],
};

const hairdressers = [
    {
        id: 1,
        name: "Amara Johnson",
        specialty: "Box Braids & Locs",
        rating: 4.9,
        reviews: 127,
        location: "Johannesburg, SA",
        avatar: "assets/hairdressers/hairdresser-1.jpg",
        whatsapp: "+263774694160",
        email: "mapeterenyasha@gmail.com",
        preferredContact: "whatsapp", // Test with your contact
    },
    {
        id: 2,
        name: "Thandi Nkosi",
        specialty: "Cornrows & Designs",
        rating: 4.8,
        reviews: 89,
        location: "Cape Town, SA",
        avatar: "assets/hairdressers/hairdresser-2.jpg",
        whatsapp: "+27987654321",
        email: "thandi.styles@email.com",
        preferredContact: "email",
    },
    {
        id: 3,
        name: "Blessing Okafor",
        specialty: "Knotless & Twists",
        rating: 5.0,
        reviews: 203,
        location: "Lagos, Nigeria",
        avatar: "assets/hairdressers/hairdresser-3.jpg",
        whatsapp: "+2348012345678",
        email: "blessing.hair@email.com",
        preferredContact: "whatsapp",
    },
    {
        id: 4,
        name: "Zanele Dlamini",
        specialty: "Natural Hair Styling",
        rating: 4.7,
        reviews: 64,
        location: "Durban, SA",
        avatar: "assets/hairdressers/hairdresser-4.jpg",
        whatsapp: "+27765432109",
        email: "zanele.natural@email.com",
        preferredContact: "whatsapp",
    },
];

// ============================================
// DOM Elements
// ============================================
const navbar = document.getElementById('navbar');
const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more');
const skinTones = document.querySelectorAll('.skin-tone');
const colorPalette = document.getElementById('color-palette');
const uploadArea = document.getElementById('upload-area');
const photoUpload = document.getElementById('photo-upload');
const styleOptions = document.getElementById('style-options');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const resultPreview = document.getElementById('result-preview');
const hairdresserGrid = document.getElementById('hairdresser-grid');

// AI Integration
const aiApiKey = localStorage.getItem('gemini_api_key') || 'YOUR_GEMINI_API_KEY';
const crownAIInstance = typeof CrownColorAI !== 'undefined' ? new CrownColorAI(aiApiKey) : null;
const aiAnalysisResult = document.getElementById('ai-analysis-result');
const aiFindings = document.getElementById('ai-findings');

// ============================================
// State
// ============================================
let currentFilter = 'all';
let selectedSkinTone = null;
let selectedColor = null;
let uploadedImage = null;
let selectedStyle = null;
let displayedItems = 6;

// ============================================
// Navigation
// ============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
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

// ============================================
// Gallery Functions
// ============================================
function createGalleryItem(style) {
    const item = document.createElement('div');
    item.className = 'gallery-item animate-fade-in-up';
    item.dataset.category = style.category;

    // Create placeholder gradient if image doesn't exist
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    ];

    const fallbackGradient = gradients[style.id % gradients.length];
    const trendingBadge = style.trending ? '<span class="trending-badge">Trending</span>' : '';

    item.innerHTML = `
        <img src="${style.image}" alt="${style.name}" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
             style="width: 100%; height: 100%; object-fit: cover;">
        <div class="gallery-fallback" style="display: none; width: 100%; height: 100%; background: ${fallbackGradient}; align-items: center; justify-content: center; position: absolute; top: 0; left: 0;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
        </div>
        ${trendingBadge}
        <div class="gallery-item-overlay">
            <h4 class="gallery-item-title">${style.name}</h4>
            <span class="gallery-item-category">${style.category.replace('-', ' ')}</span>
        </div>
    `;

    item.addEventListener('click', () => {
        selectStyleForTryOn(style);
    });

    return item;
}

function renderGallery(filter = 'all', isAppend = false) {
    const filteredStyles = filter === 'all'
        ? hairstyles
        : hairstyles.filter(s => s.category === filter);

    const prevCount = isAppend ? galleryGrid.children.length : 0;
    if (!isAppend) galleryGrid.innerHTML = '';

    const stylesToShow = filteredStyles.slice(prevCount, displayedItems);

    stylesToShow.forEach((style, index) => {
        const item = createGalleryItem(style);
        // Use global index for animation delay to maintain continuity
        const globalIndex = prevCount + index;
        item.style.animationDelay = `${globalIndex * 0.1}s`;
        galleryGrid.appendChild(item);
    });

    // Update load more button visibility
    loadMoreBtn.style.display = filteredStyles.length > displayedItems ? 'flex' : 'none';
}

// Gallery filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        displayedItems = 6;
        renderGallery(currentFilter);
    });
});

// Load more button
loadMoreBtn.addEventListener('click', () => {
    displayedItems += 6;
    renderGallery(currentFilter, true);
});

// Color picker logic removed as it was replaced by Maintenance section
// No additional logic needed here as navigation is handled via anchor links

// ============================================
// Try-On Functions
// ============================================
function renderStyleOptions() {
    styleOptions.innerHTML = '';

    hairstyles.slice(0, 8).forEach(style => {
        const option = document.createElement('div');
        option.className = 'style-option';

        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        ];

        option.innerHTML = `
            <div style="width: 100%; height: 100%; background: ${gradients[style.id % gradients.length]}; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 0.5rem;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span style="font-size: 0.65rem; text-align: center; margin-top: 0.25rem; color: white;">${style.name}</span>
            </div>
        `;

        option.addEventListener('click', () => {
            document.querySelectorAll('.style-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            selectedStyle = style;
            updateGenerateButton();
        });

        styleOptions.appendChild(option);
    });
}

function selectStyleForTryOn(style) {
    // Scroll to try-on section
    document.getElementById('try-on').scrollIntoView({ behavior: 'smooth' });

    // Select the style
    setTimeout(() => {
        const styleOption = styleOptions.children[hairstyles.indexOf(style)];
        if (styleOption) {
            document.querySelectorAll('.style-option').forEach(o => o.classList.remove('selected'));
            styleOption.classList.add('selected');
            selectedStyle = style;
            updateGenerateButton();
        }
    }, 500);
}

function updateGenerateButton() {
    generateBtn.disabled = !(uploadedImage && selectedStyle);
}

// Drag and drop handling
uploadArea.addEventListener('click', () => photoUpload.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImageUpload(file);
    }
});

photoUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleImageUpload(file);
    }
});

function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
        uploadedImage = e.target.result;
        uploadArea.classList.add('has-image');
        uploadArea.innerHTML = `<img src="${uploadedImage}" alt="Your photo">`;
        updateGenerateButton();

        // Trigger AI Analysis
        if (crownAIInstance && aiApiKey !== 'YOUR_GEMINI_API_KEY') {
            aiAnalysisResult.style.display = 'block';
            aiFindings.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; gap: 8px;"><div class="loading-dots"></div> AI is analyzing your facial features...</div>';

            try {
                const base64Image = uploadedImage.split(',')[1];
                const analysis = await crownAIInstance.detectFaceShape(base64Image);

                if (analysis) {
                    const styles = crownAIInstance.getStylesForFaceShape(analysis.faceShape);
                    aiFindings.innerHTML = `
                        <p style="margin-bottom: 0.5rem;">Detected <strong>${analysis.faceShape}</strong> face shape with <strong>${analysis.skinTone}</strong> skin tone.</p>
                        <p style="font-size: 0.85rem; color: var(--text-secondary);">
                            Recommended: ${styles.join(', ')}
                        </p>
                    `;
                }
            } catch (error) {
                console.error('AI analysis failed:', error);
                aiAnalysisResult.style.display = 'none';
            }
        }
    };
    reader.readAsDataURL(file);
}

// Generate button handled below

// Generate button
generateBtn.addEventListener('click', () => {
    if (!uploadedImage || !selectedStyle) return;

    // Show loading state
    resultPreview.innerHTML = `
        <div class="result-placeholder">
            <div class="loading" style="width: 48px; height: 48px; border-radius: 50%; background: var(--bg-tertiary);"></div>
            <p style="margin-top: 1rem;">Generating your look...</p>
        </div>
    `;

    // Simulate AI processing
    setTimeout(() => {
        resultPreview.classList.add('has-result');
        const feedback = crownAIInstance && aiApiKey !== 'YOUR_GEMINI_API_KEY'
            ? `Our AI confirms this style perfectly balances your ${document.getElementById('ai-findings').innerText.split(' ')[1] || 'features'}!`
            : "This style would look amazing on you!";

        resultPreview.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(168, 85, 247, 0.1)); padding: 2rem;">
                <img src="${uploadedImage}" alt="Your transformed look" style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%; border: 4px solid var(--gold-400);">
                <h3 style="margin-top: 1.5rem; color: var(--text-primary);">${selectedStyle.name}</h3>
                <p style="color: var(--gold-400); margin-top: 0.5rem;">Great choice!</p>
                <p style="color: var(--text-muted); font-size: 0.875rem; margin-top: 1rem; text-align: center;">
                    ${feedback}<br>
                    Find a hairdresser below to make it happen.
                </p>
            </div>
        `;
    }, 2000);
});

// Reset button
resetBtn.addEventListener('click', () => {
    uploadedImage = null;
    selectedStyle = null;

    uploadArea.classList.remove('has-image');
    if (aiAnalysisResult) aiAnalysisResult.style.display = 'none';
    if (aiFindings) aiFindings.innerHTML = '';
    uploadArea.innerHTML = `
        <div class="upload-content">
            <div class="upload-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17,8 12,3 7,8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
            </div>
            <h3>Upload Your Photo</h3>
            <p>Drag & drop or click to upload</p>
            <span class="upload-hint">PNG, JPG up to 10MB</span>
        </div>
    `;

    document.querySelectorAll('.style-option').forEach(o => o.classList.remove('selected'));

    resultPreview.classList.remove('has-result');
    resultPreview.innerHTML = `
        <div class="result-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
            <p>Your transformed look will appear here</p>
        </div>
    `;

    updateGenerateButton();
});

// ============================================
// Hairdresser Functions
// ============================================
function renderHairdressers() {
    hairdresserGrid.innerHTML = '';

    hairdressers.forEach((hairdresser, index) => {
        const card = document.createElement('div');
        card.className = 'hairdresser-card animate-fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`;

        // Create WhatsApp link with pre-filled message
        const whatsappMessage = encodeURIComponent(`Hi ${hairdresser.name}! I found you on Crown & Color and would like to book an appointment.`);
        const whatsappLink = `https://wa.me/${hairdresser.whatsapp.replace(/\+/g, '')}?text=${whatsappMessage}`;

        // Email link
        const emailSubject = encodeURIComponent('Booking Inquiry from Crown & Color');
        const emailBody = encodeURIComponent(`Hi ${hairdresser.name},\n\nI found your profile on Crown & Color and would like to book an appointment for ${hairdresser.specialty}.\n\nPlease let me know your availability.\n\nThank you!`);
        const emailLink = `mailto:${hairdresser.email}?subject=${emailSubject}&body=${emailBody}`;

        // Determine recommended badges
        const waRecommended = hairdresser.preferredContact === 'whatsapp';
        const emailRecommended = hairdresser.preferredContact === 'email';

        card.innerHTML = `
            <div class="hairdresser-header">
                <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, var(--gold-400), var(--purple-400)); display: flex; align-items: center; justify-content: center; border: 2px solid var(--gold-400);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div class="hairdresser-info">
                    <h4>${hairdresser.name}</h4>
                    <span class="hairdresser-specialty">${hairdresser.specialty}</span>
                </div>
            </div>
            <div class="hairdresser-rating">
                <span class="stars">★★★★★</span>
                <span>${hairdresser.rating} (${hairdresser.reviews} reviews)</span>
            </div>
            <div class="hairdresser-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${hairdresser.location}
            </div>
            <div class="contact-buttons">
                <a href="${whatsappLink}" target="_blank" class="contact-btn whatsapp-btn ${waRecommended ? 'recommended' : ''}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                    ${waRecommended ? '<span class="recommended-badge">Recommended</span>' : ''}
                </a>
                <a href="${emailLink}" class="contact-btn email-btn ${emailRecommended ? 'recommended' : ''}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>Email</span>
                    ${emailRecommended ? '<span class="recommended-badge">Recommended</span>' : ''}
                </a>
            </div>
        `;

        hairdresserGrid.appendChild(card);
    });
}

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    renderStyleOptions();
    renderHairdressers();

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// ============================================
// Mobile Menu
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', toggleMobileMenu);
}

// Close menu when clicking links
document.querySelectorAll('.mobile-menu-links a, .mobile-menu-cta').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});
