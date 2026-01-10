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

// Hairdressers data moved to stylists-data.js

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
const onboardingModal = document.getElementById('onboarding-modal');
const personaBtns = document.querySelectorAll('.persona-btn');
const stylistSearch = document.getElementById('stylist-search');
const searchStats = document.getElementById('search-stats');

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
let currentRole = localStorage.getItem('user_role') || null;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let currentQuickViewStyle = null;

// ============================================
// Favorites Functions
// ============================================
function isFavorite(styleId) {
    return favorites.includes(styleId);
}

function toggleFavorite(styleId) {
    if (isFavorite(styleId)) {
        favorites = favorites.filter(id => id !== styleId);
    } else {
        favorites.push(styleId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderGallery(currentFilter);
}

// ============================================
// Quick View Functions
// ============================================
function openQuickView(style) {
    currentQuickViewStyle = style;
    const modal = document.getElementById('quick-view-modal');
    document.getElementById('quick-view-img').src = style.image;
    document.getElementById('quick-view-title').textContent = style.name;
    document.getElementById('quick-view-category').textContent = style.category.replace('-', ' ');
    document.getElementById('quick-view-description').textContent =
        `A beautiful ${style.length || 'versatile'} length ${style.category.replace('-', ' ')} style. ` +
        (style.boho ? 'Features bohemian curly accents for a goddess look. ' : '') +
        'Perfect for any occasion.';
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    document.getElementById('quick-view-modal').style.display = 'none';
    document.body.style.overflow = '';
    currentQuickViewStyle = null;
}

// Quick view event listeners
document.getElementById('quick-view-close')?.addEventListener('click', closeQuickView);
document.getElementById('quick-view-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'quick-view-modal') closeQuickView();
});
document.getElementById('quick-view-try')?.addEventListener('click', () => {
    if (currentQuickViewStyle) {
        closeQuickView();
        selectStyleForTryOn(currentQuickViewStyle);
    }
});
document.getElementById('quick-view-favorite')?.addEventListener('click', () => {
    if (currentQuickViewStyle) {
        toggleFavorite(currentQuickViewStyle.id);
        const btn = document.getElementById('quick-view-favorite');
        btn.innerHTML = isFavorite(currentQuickViewStyle.id) ?
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> Saved' :
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> Save';
    }
});

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
        <img src="${style.image}" alt="${style.name}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
             style="width: 100%; height: 100%; object-fit: cover;">
        <div class="gallery-fallback" style="display: none; width: 100%; height: 100%; background: ${fallbackGradient}; align-items: center; justify-content: center; position: absolute; top: 0; left: 0;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
        </div>
        ${trendingBadge}
        <button class="gallery-favorite-btn" data-id="${style.id}" onclick="event.stopPropagation(); toggleFavorite(${style.id})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFavorite(style.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
        </button>
        <div class="gallery-item-overlay">
            <h4 class="gallery-item-title">${style.name}</h4>
            <span class="gallery-item-category">${style.category.replace('-', ' ')}</span>
        </div>
    `;

    item.addEventListener('click', () => {
        openQuickView(style);
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
// Try-On Functions - Premium Style Carousel
// ============================================
function renderStyleOptions() {
    styleOptions.innerHTML = '';

    // Use all hairstyles for a rich carousel experience
    hairstyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'style-option-premium';
        option.style.animationDelay = `${index * 0.05}s`;

        option.innerHTML = `
            <div class="style-image-wrapper">
                <img src="${style.image}" alt="${style.name}" loading="lazy" 
                     onerror="this.src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=250&fit=crop'">
                <div class="style-overlay">
                    <span class="style-name">${style.name}</span>
                    <span class="style-category">${style.category.replace('-', ' ')}</span>
                </div>
                <div class="style-select-indicator">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
            </div>
        `;

        option.addEventListener('click', () => {
            document.querySelectorAll('.style-option-premium').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            selectedStyle = style;
            updateGenerateButton();

            // Visual feedback
            option.style.transform = 'scale(0.95)';
            setTimeout(() => option.style.transform = '', 150);
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
// Hairdresser & Search Functions
// ============================================
function renderHairdressers(data = stylists) {
    if (!hairdresserGrid) return;
    hairdresserGrid.innerHTML = '';

    if (data.length === 0) {
        hairdresserGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: var(--neutral-900); border-radius: 24px; border: 1px dashed var(--neutral-700);">
                <div style="margin-bottom: 1.5rem; color: var(--gold-400); opacity: 0.5;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                </div>
                <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">We couldn't find any stylists matching that</h3>
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">Try different keywords or browse our full network.</p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button onclick="resetSearch()" class="btn btn-secondary" style="padding: 0.6rem 1.5rem;">Show All Stylists</button>
                    <button onclick="window.location.hash='#onboarding'" class="btn btn-primary nav-cta" style="padding: 0.6rem 1.5rem;">I'm a Stylist</button>
                </div>
            </div>
        `;
        if (searchStats) searchStats.innerText = 'No matches found';
        return;
    }

    data.forEach((stylist, index) => {
        const card = document.createElement('div');
        card.className = 'hairdresser-card animate-fade-in-up';
        card.style.animationDelay = `${index * 0.05}s`;

        const whatsappMessage = encodeURIComponent(`Hi ${stylist.name}! I found you on Crown & Color and would like to book an appointment.`);
        const whatsappLink = `https://wa.me/${stylist.contact.whatsapp.replace(/\+/g, '')}?text=${whatsappMessage}`;
        const emailSubject = encodeURIComponent('Booking Inquiry from Crown & Color');
        const emailLink = `mailto:${stylist.contact.email}?subject=${emailSubject}`;

        const isRecommended = stylist.id === 1 || stylist.id === 3 || stylist.id === 10;

        const starSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color: #f59e0b;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        const ratingStars = starSvg.repeat(Math.floor(stylist.rating)) +
            (stylist.rating % 1 !== 0 ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #f59e0b;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' : '');

        card.innerHTML = `
            ${isRecommended ? '<span class="recommended-badge">Recommended</span>' : ''}
            <div class="hairdresser-header">
                <img src="${stylist.image}" alt="${stylist.name}" class="hairdresser-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(stylist.name)}&background=18181b&color=f59e0b'">
                <div class="hairdresser-info">
                    <h3>${stylist.name}</h3>
                    <span class="hairdresser-specialty">${stylist.specialties[0]}</span>
                </div>
            </div>
            
            <div class="hairdresser-rating">
                <div style="display: flex; gap: 2px; margin-right: 8px;">${ratingStars}</div>
                <span>${stylist.rating} (${stylist.reviews} reviews)</span>
            </div>

            <div class="hairdresser-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${stylist.location}
            </div>

            <div class="hairdresser-actions">
                <a href="${whatsappLink}" target="_blank" class="contact-btn whatsapp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                </a>
                <a href="${emailLink}" class="contact-btn email">
                    Email
                </a>
            </div>
        `;

        hairdresserGrid.appendChild(card);
    });

    if (searchStats) searchStats.innerText = `Found ${data.length} beauty experts`;
}

function handleSearch(query) {
    const q = query.toLowerCase().trim();

    // Add loading shimmer class
    if (hairdresserGrid) hairdresserGrid.classList.add('searching');

    setTimeout(() => {
        if (q === '') {
            renderHairdressers(stylists);
        } else {
            const filtered = stylists.filter(s =>
                s.name.toLowerCase().includes(q) ||
                s.location.toLowerCase().includes(q) ||
                s.specialties.some(spec => spec.toLowerCase().includes(q))
            );
            renderHairdressers(filtered);
        }
        if (hairdresserGrid) hairdresserGrid.classList.remove('searching');
    }, 400);
}

function resetSearch() {
    if (stylistSearch) stylistSearch.value = '';
    renderHairdressers(stylists);
}

// ============================================
// Onboarding Functions
// ============================================
function initOnboarding() {
    if (!currentRole) {
        onboardingModal.style.display = 'flex';
    } else {
        onboardingModal.style.display = 'none';
        applyPersonaCustomization(currentRole);
    }

    personaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const role = btn.dataset.role;
            setRole(role);
        });
    });
}

function setRole(role) {
    currentRole = role;
    localStorage.setItem('user_role', role);
    onboardingModal.style.opacity = '0';
    setTimeout(() => {
        onboardingModal.style.display = 'none';
        applyPersonaCustomization(role);
        updateRoleLabel();
    }, 500);
}

function applyPersonaCustomization(role) {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const stylistSubtitle = document.getElementById('stylist-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroStats = document.querySelectorAll('.stat');
    const hairdresserSection = document.getElementById('hairdressers');
    const sectionHeader = hairdresserSection?.querySelector('.section-header');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuLinks = document.querySelector('.mobile-menu-links');

    // Reset any previous persona-specific additions
    document.querySelectorAll('.persona-specific').forEach(el => el.remove());

    // Persona configurations
    const personaConfig = {
        client: {
            heroTitle: '<span class="title-line">Discover Your</span><span class="title-line accent">Perfect Style</span>',
            heroSubtitle: 'Visualize stunning hairstyles and braid colors before your next appointment. AI-powered try-ons that match your unique beauty.',
            primaryCTA: { text: 'Try Your Look', href: '#try-on', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' },
            secondaryCTA: { text: 'Find a Stylist', href: '#hairdressers' },
            stats: [
                { number: '500+', label: 'Hairstyles' },
                { number: '200+', label: 'Braid Colors' },
                { number: '50+', label: 'Partner Stylists' }
            ],
            stylistSectionTitle: 'Find Your Stylist',
            stylistSectionSubtitle: 'Connect with talented hairdressers near you',
            welcomeMessage: 'Welcome, Beautiful! Let\'s find your perfect style.'
        },
        stylist: {
            heroTitle: '<span class="title-line">Grow Your</span><span class="title-line accent">Artistry</span>',
            heroSubtitle: 'Showcase your portfolio to thousands of clients looking for their next look. Join our elite network of beauty professionals.',
            primaryCTA: { text: 'Join Our Network', href: '#hairdressers', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
            secondaryCTA: { text: 'Explore Styles', href: '#gallery' },
            stats: [
                { number: '10K+', label: 'Monthly Clients' },
                { number: '22+', label: 'Partner Stylists' },
                { number: '95%', label: 'Booking Rate' }
            ],
            stylistSectionTitle: 'Join Our Network',
            stylistSectionSubtitle: 'Showcase your work and connect with clients seeking your expertise',
            welcomeMessage: 'Welcome, Artist! Ready to grow your clientele?'
        },
        provider: {
            heroTitle: '<span class="title-line">Scale Your</span><span class="title-line accent">Supply</span>',
            heroSubtitle: 'Connect with top salons and stylists needing high-quality hair products. Partner with Africa\'s growing beauty network.',
            primaryCTA: { text: 'Partner With Us', href: '#hairdressers', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>' },
            secondaryCTA: { text: 'View Network', href: '#hairdressers' },
            stats: [
                { number: '50+', label: 'Partner Salons' },
                { number: '5', label: 'Countries' },
                { number: '1M+', label: 'Products Sold' }
            ],
            stylistSectionTitle: 'Salon Network',
            stylistSectionSubtitle: 'Connect with our partner salons and stylists for wholesale opportunities',
            welcomeMessage: 'Welcome, Partner! Let\'s expand your reach.'
        },
        visitor: {
            heroTitle: '<span class="title-line">Welcome to</span><span class="title-line accent">Crown & Color</span>',
            heroSubtitle: 'Explore AI-powered hairstyle visualization technology. Discover trending styles and see how they\'d look on you.',
            primaryCTA: { text: 'Explore Styles', href: '#gallery', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>' },
            secondaryCTA: { text: 'Try AI Magic', href: '#try-on' },
            stats: [
                { number: '500+', label: 'Hairstyles' },
                { number: 'AI', label: 'Powered' },
                { number: 'Free', label: 'To Try' }
            ],
            stylistSectionTitle: 'Meet Our Stylists',
            stylistSectionSubtitle: 'Discover talented beauty experts in our growing network',
            welcomeMessage: 'Welcome to Crown & Color! Let\'s explore together.'
        }
    };

    const config = personaConfig[role] || personaConfig.client;

    // Apply hero customization
    if (heroTitle) heroTitle.innerHTML = config.heroTitle;
    if (heroSubtitle) heroSubtitle.innerText = config.heroSubtitle;

    // Apply CTA customization
    if (heroButtons) {
        heroButtons.innerHTML = `
            <a href="${config.primaryCTA.href}" class="btn btn-primary">
                <span>${config.primaryCTA.text}</span>
                ${config.primaryCTA.icon}
            </a>
            <a href="${config.secondaryCTA.href}" class="btn btn-secondary">${config.secondaryCTA.text}</a>
        `;
    }

    // Apply stats customization
    if (heroStats.length >= 3) {
        config.stats.forEach((stat, index) => {
            if (heroStats[index]) {
                heroStats[index].querySelector('.stat-number').innerText = stat.number;
                heroStats[index].querySelector('.stat-label').innerText = stat.label;
            }
        });
    }

    // Customize hairdresser section header
    if (sectionHeader) {
        const title = sectionHeader.querySelector('.section-title');
        const subtitle = sectionHeader.querySelector('.section-subtitle');
        if (title) title.innerText = config.stylistSectionTitle;
        if (subtitle) subtitle.innerText = config.stylistSectionSubtitle;
    }

    // Add role-specific content to hairdresser section
    if (hairdresserSection && (role === 'stylist' || role === 'provider')) {
        const joinBanner = document.createElement('div');
        joinBanner.className = 'persona-specific join-network-banner';
        joinBanner.innerHTML = role === 'stylist' ? `
            <div class="join-banner-content">
                <h3>Ready to Showcase Your Work?</h3>
                <p>Join 22+ talented stylists in our network. Get discovered by clients looking for your expertise.</p>
                <a href="mailto:stylists@crowncolor.co.zw?subject=Stylist%20Application" class="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Apply to Join
                </a>
            </div>
        ` : `
            <div class="join-banner-content">
                <h3>Become a Partner Supplier</h3>
                <p>Supply quality hair products to our network of 50+ salons across Africa.</p>
                <a href="mailto:partners@crowncolor.co.zw?subject=Partnership%20Inquiry" class="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                    Partner With Us
                </a>
            </div>
        `;
        sectionHeader.after(joinBanner);
    }

    // Show welcome toast
    showWelcomeToast(config.welcomeMessage, role);
}

// Welcome toast notification
function showWelcomeToast(message, role) {
    // Remove any existing toast
    document.querySelector('.welcome-toast')?.remove();

    const roleIcons = {
        client: '👑',
        stylist: '✂️',
        provider: '📦',
        visitor: '✨'
    };

    const toast = document.createElement('div');
    toast.className = 'welcome-toast persona-specific';
    toast.innerHTML = `
        <span class="toast-icon">${roleIcons[role] || '✨'}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
    `;
    document.body.appendChild(toast);

    // Auto-dismiss after 5 seconds
    setTimeout(() => toast.classList.add('toast-hidden'), 4500);
    setTimeout(() => toast.remove(), 5000);
}

// Update role label in footer
function updateRoleLabel() {
    const roleLabel = document.getElementById('current-role-label');
    if (!roleLabel) return;

    const roleNames = {
        client: 'Client',
        stylist: 'Stylist',
        provider: 'Provider',
        visitor: 'Visitor'
    };

    const storedRole = localStorage.getItem('user_role');
    roleLabel.textContent = storedRole ? `Browsing as ${roleNames[storedRole] || 'Guest'}` : 'Change Role';
}

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initOnboarding();
    renderGallery();
    renderStyleOptions();
    renderHairdressers();

    // Search event listener
    if (stylistSearch) {
        stylistSearch.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });
    }

    // Connect "Get Started" buttons to show onboarding
    const getStartedBtns = document.querySelectorAll('.nav-cta, .mobile-menu-cta, .hero-cta');
    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Only show onboarding if it's the role selection intent
            // If it's a link to a section, handle it normally
            if (!btn.getAttribute('href') || btn.getAttribute('href') === '#') {
                e.preventDefault();
                onboardingModal.style.display = 'flex';
                onboardingModal.style.opacity = '1';
            }
        });
    });

    // Role switcher in footer
    const roleSwitcher = document.getElementById('role-switcher');
    if (roleSwitcher) {
        roleSwitcher.addEventListener('click', () => {
            onboardingModal.style.display = 'flex';
            onboardingModal.style.opacity = '1';
            // Scroll to top for better onboarding experience
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Update role label on load
    updateRoleLabel();

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


// ============================================
// Camera Capture Functions
// ============================================
let cameraStream = null;

function startCamera() {
    const video = document.getElementById('camera-stream');
    const uploadContent = document.querySelector('.upload-content');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
            .then(stream => {
                cameraStream = stream;
                video.srcObject = stream;
                video.style.display = 'block';
                video.play();
                uploadContent.style.display = 'none';

                // Add capture button
                const captureBtn = document.createElement('button');
                captureBtn.className = 'btn btn-primary';
                captureBtn.id = 'capture-btn';
                captureBtn.style.marginTop = '1rem';
                captureBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> Capture';
                captureBtn.onclick = capturePhoto;
                video.insertAdjacentElement('afterend', captureBtn);
            })
            .catch(err => {
                console.error('Camera access denied:', err);
                alert('Camera access denied. Please use file upload instead.');
            });
    } else {
        alert('Camera not supported on this device.');
    }
}

function capturePhoto() {
    const video = document.getElementById('camera-stream');
    const canvas = document.getElementById('camera-canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);

    // Stop camera
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
    }
    video.style.display = 'none';
    document.getElementById('capture-btn')?.remove();

    // Use captured image
    const imageData = canvas.toDataURL('image/jpeg');
    handleImageUpload(dataURLtoFile(imageData, 'selfie.jpg'));
}

function dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
}

// ============================================
// Download Result Function
// ============================================
function downloadResult() {
    const resultImg = document.querySelector('#result-preview img');
    if (resultImg) {
        const link = document.createElement('a');
        link.download = 'crown-color-style-preview.jpg';
        link.href = resultImg.src;
        link.click();
    }
}
