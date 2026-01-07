// ============================================
// Crown & Color - Hairstyle Data
// Full database with 100+ styles
// ============================================

const hairstyles = [
    // ============================================
    // BOX BRAIDS (15 styles)
    // ============================================
    { id: 1, name: "Classic Box Braids", category: "box-braids", image: "assets/styles/box-braids-1.jpg", trending: true, length: "long", description: "Traditional box braids, versatile sizing" },
    { id: 2, name: "Jumbo Box Braids", category: "box-braids", image: "assets/styles/box-braids-2.jpg", trending: true, length: "long", description: "Thick, statement braids" },
    { id: 3, name: "Micro Box Braids", category: "box-braids", image: "assets/styles/box-braids-1.jpg", trending: false, length: "long", description: "Tiny, delicate braids" },
    { id: 4, name: "Bob Box Braids", category: "box-braids", image: "assets/styles/box-braids-1.jpg", trending: true, length: "short", description: "Chic chin-length braids" },
    { id: 5, name: "Goddess Box Braids", category: "box-braids", image: "assets/styles/box-braids-2.jpg", trending: true, length: "long", boho: true, description: "Curly accent strands woven throughout" },
    { id: 6, name: "Bohemian Box Braids", category: "box-braids", image: "assets/styles/box-braids-2.jpg", trending: true, length: "long", boho: true, description: "Loose curly strands scattered throughout" },
    { id: 7, name: "Triangle Part Box Braids", category: "box-braids", image: "assets/styles/box-braids-1.jpg", trending: true, length: "long", description: "Triangular sections at base" },
    { id: 8, name: "Poetic Justice Braids", category: "box-braids", image: "assets/styles/box-braids-2.jpg", trending: false, length: "extra-long", description: "Large, long iconic style" },
    { id: 9, name: "Box Braids with Curly Ends", category: "box-braids", image: "assets/styles/box-braids-1.jpg", trending: true, length: "long", description: "Curly ends only" },
    { id: 10, name: "Bantu Knots", category: "box-braids", image: "assets/styles/box-braids-3.jpg", trending: true, length: "short", description: "Knotted sections, iconic protective style" },
    { id: 11, name: "Medium Box Braids", category: "box-braids", image: "assets/styles/box-braids-1.jpg", trending: true, length: "medium", description: "Balanced size, easy to maintain" },
    { id: 12, name: "Ombre Box Braids", category: "box-braids", image: "assets/styles/box-braids-2.jpg", trending: true, length: "long", description: "Color fade effect" },

    // ============================================
    // CORNROWS (14 styles)
    // ============================================
    { id: 13, name: "Classic Straight Back", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: false, length: "short", description: "Simple straight-back rows" },
    { id: 14, name: "Goddess Cornrows", category: "cornrows", image: "assets/styles/cornrows-2.jpg", trending: true, length: "medium", boho: true, description: "Thick/thin mix with wavy ends" },
    { id: 15, name: "Ghana Braids", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: true, length: "medium", description: "Thick tapered cornrows" },
    { id: 16, name: "Stitch Braids", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: true, length: "short", description: "Distinctive stitched pattern" },
    { id: 17, name: "Fulani Braids", category: "cornrows", image: "assets/styles/cornrows-2.jpg", trending: true, length: "medium", description: "Center cornrow with side braids + beads" },
    { id: 18, name: "Lemonade Braids", category: "cornrows", image: "assets/styles/cornrows-2.jpg", trending: true, length: "long", description: "Side-swept cornrows" },
    { id: 19, name: "Feed-in Cornrows", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: true, length: "medium", description: "Seamless extension technique" },
    { id: 20, name: "Tribal Cornrows", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: true, length: "short", description: "Traditional African patterns" },
    { id: 21, name: "Pop Smoke Braids", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: false, length: "medium", description: "Middle-parted jumbo cornrows" },
    { id: 22, name: "Cornrow Updo", category: "cornrows", image: "assets/styles/cornrows-3.jpg", trending: true, length: "short", description: "Elegant bun/updo style" },
    { id: 23, name: "Cornrow Ponytail", category: "cornrows", image: "assets/styles/cornrows-4.jpg", trending: true, length: "long", description: "Cornrows into high ponytail" },
    { id: 24, name: "Half Cornrow Half Box", category: "cornrows", image: "assets/styles/cornrows-2.jpg", trending: true, length: "long", description: "Cornrows at scalp, box braids below" },
    { id: 25, name: "Geometric Cornrows", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: true, length: "short", description: "Intricate geometric patterns" },
    { id: 26, name: "Zig-Zag Cornrows", category: "cornrows", image: "assets/styles/cornrows-1.jpg", trending: true, length: "short", description: "Zigzag pattern designs" },

    // ============================================
    // KNOTLESS BRAIDS (12 styles)
    // ============================================
    { id: 27, name: "Classic Knotless", category: "knotless", image: "assets/styles/knotless-1.jpg", trending: true, length: "long", description: "Standard feed-in knotless" },
    { id: 28, name: "Jumbo Knotless", category: "knotless", image: "assets/styles/knotless-1.jpg", trending: true, length: "long", description: "Thick knotless braids" },
    { id: 29, name: "Small Knotless", category: "knotless", image: "assets/styles/knotless-1.jpg", trending: true, length: "long", description: "Tiny, natural-looking braids" },
    { id: 30, name: "Medium Knotless", category: "knotless", image: "assets/styles/knotless-1.jpg", trending: true, length: "medium", description: "Balanced size and length" },
    { id: 31, name: "Knotless with Curly Ends", category: "knotless", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", description: "Curly ends only" },
    { id: 32, name: "Boho Knotless", category: "knotless", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", boho: true, description: "Long curly strands woven throughout" },
    { id: 33, name: "Boho Knotless Bob", category: "knotless", image: "assets/styles/knotless-3.jpg", trending: true, length: "short", boho: true, description: "Bob-length with curly accent strands" },
    { id: 34, name: "Goddess Knotless", category: "knotless", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", boho: true, description: "Curly accent strands scattered through" },
    { id: 35, name: "Curly Knotless Bob", category: "knotless", image: "assets/styles/knotless-3.jpg", trending: true, length: "short", description: "Bob with curly ends" },
    { id: 36, name: "Knotless with Beads", category: "knotless", image: "assets/styles/knotless-1.jpg", trending: true, length: "long", description: "Decorated with beads" },
    { id: 37, name: "Waist Length Knotless", category: "knotless", image: "assets/styles/knotless-2.jpg", trending: true, length: "extra-long", description: "Ultra-long glamorous style" },
    { id: 38, name: "Ombre Knotless", category: "knotless", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", description: "Color gradient effect" },

    // ============================================
    // TWISTS (12 styles)
    // ============================================
    { id: 39, name: "Senegalese Twists", category: "twists", image: "assets/styles/twists-1.jpg", trending: true, length: "long", description: "Smooth rope-like twists" },
    { id: 40, name: "Marley Twists", category: "twists", image: "assets/styles/twists-1.jpg", trending: true, length: "long", description: "Coarse kinky texture" },
    { id: 41, name: "Havana Twists", category: "twists", image: "assets/styles/twists-1.jpg", trending: false, length: "long", description: "Thick two-strand twists" },
    { id: 42, name: "Passion Twists", category: "twists", image: "assets/styles/twists-1.jpg", trending: true, length: "medium", description: "Soft, bouncy, wavy texture" },
    { id: 43, name: "Spring Twists", category: "twists", image: "assets/styles/twists-2.jpg", trending: true, length: "short", description: "Light, springy coily twists" },
    { id: 44, name: "Flat Twists", category: "twists", image: "assets/styles/twists-2.jpg", trending: true, length: "short", description: "Twisted flat against scalp" },
    { id: 45, name: "Kinky Twists", category: "twists", image: "assets/styles/twists-1.jpg", trending: false, length: "medium", description: "Coily kinky texture" },
    { id: 46, name: "Two-Strand Twists", category: "twists", image: "assets/styles/twists-2.jpg", trending: false, length: "medium", description: "Basic natural twist style" },
    { id: 47, name: "Bohemian Twists", category: "twists", image: "assets/styles/twists-1.jpg", trending: true, length: "long", boho: true, description: "Curly strands woven throughout" },
    { id: 48, name: "Mini Twists", category: "twists", image: "assets/styles/twists-2.jpg", trending: true, length: "short", description: "Tiny protective twists" },
    { id: 49, name: "Twist Out", category: "twists", image: "assets/styles/twists-2.jpg", trending: true, length: "short", description: "Unraveled for wavy texture" },
    { id: 50, name: "Bob Twists", category: "twists", image: "assets/styles/twists-2.jpg", trending: true, length: "short", description: "Shoulder-length twist style" },

    // ============================================
    // LOCS / FAUX LOCS (14 styles)
    // ============================================
    { id: 51, name: "Traditional Locs", category: "locs", image: "assets/styles/locs-1.jpg", trending: false, length: "long", description: "Classic permanent locs" },
    { id: 52, name: "Sisterlocks", category: "locs", image: "assets/styles/locs-1.jpg", trending: false, length: "long", description: "Very small uniform locs" },
    { id: 53, name: "Microlocs", category: "locs", image: "assets/styles/locs-1.jpg", trending: true, length: "long", description: "Small, delicate locs" },
    { id: 54, name: "Faux Locs", category: "locs", image: "assets/styles/locs-1.jpg", trending: true, length: "long", description: "Temporary wrapped locs" },
    { id: 55, name: "Goddess Locs", category: "locs", image: "assets/styles/locs-2.jpg", trending: true, length: "long", boho: true, description: "Curly/wavy ends" },
    { id: 56, name: "Butterfly Locs", category: "locs", image: "assets/styles/locs-1.jpg", trending: true, length: "medium", description: "Soft, whimsical, fluffy texture" },
    { id: 57, name: "Soft Locs", category: "locs", image: "assets/styles/locs-2.jpg", trending: true, length: "medium", description: "Lightweight soft feel" },
    { id: 58, name: "Bohemian Locs", category: "locs", image: "assets/styles/locs-2.jpg", trending: true, length: "long", boho: true, description: "Boho curly accents" },
    { id: 59, name: "Ombre Locs", category: "locs", image: "assets/styles/locs-2.jpg", trending: true, length: "long", description: "Color fade effect" },
    { id: 60, name: "Halo Braid Crown", category: "locs", image: "assets/styles/locs-3.jpg", trending: true, length: "short", description: "Braided crown around head" },
    { id: 61, name: "Crochet Locs", category: "locs", image: "assets/styles/locs-1.jpg", trending: true, length: "long", description: "Faux locs via crochet method" },
    { id: 62, name: "Distressed Locs", category: "locs", image: "assets/styles/locs-2.jpg", trending: true, length: "medium", description: "Messy, lived-in look" },
    { id: 63, name: "Bob Locs", category: "locs", image: "assets/styles/locs-3.jpg", trending: true, length: "short", description: "Shoulder-length loc style" },
    { id: 64, name: "Ocean Locs", category: "locs", image: "assets/styles/locs-2.jpg", trending: true, length: "long", boho: true, description: "Wavy mermaid-like texture" },

    // ============================================
    // CROCHET STYLES (6 styles)
    // ============================================
    { id: 65, name: "Crochet Braids", category: "crochet", image: "assets/styles/box-braids-1.jpg", trending: false, length: "medium", description: "Extensions crocheted into cornrows" },
    { id: 66, name: "Crochet Twists", category: "crochet", image: "assets/styles/twists-1.jpg", trending: false, length: "medium", description: "Twist extensions crocheted in" },
    { id: 67, name: "Crochet Curls", category: "crochet", image: "assets/styles/knotless-2.jpg", trending: true, length: "short", description: "Curly extensions crocheted" },
    { id: 68, name: "Crochet Faux Locs", category: "crochet", image: "assets/styles/locs-1.jpg", trending: true, length: "long", description: "Loc extensions crocheted in" },
    { id: 69, name: "Water Wave Crochet", category: "crochet", image: "assets/styles/knotless-2.jpg", trending: true, length: "medium", description: "Wet/wavy look" },
    { id: 70, name: "Deep Wave Crochet", category: "crochet", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", description: "Deep defined waves" },

    // ============================================
    // NATURAL HAIR (15 styles)
    // ============================================
    { id: 71, name: "Classic TWA", category: "natural", image: "assets/styles/box-braids-3.jpg", trending: true, length: "short", description: "Teeny weeny afro" },
    { id: 72, name: "Fluffy Afro", category: "natural", image: "assets/styles/box-braids-3.jpg", trending: true, length: "medium", description: "Full natural volume" },
    { id: 73, name: "Defined Afro", category: "natural", image: "assets/styles/box-braids-3.jpg", trending: true, length: "medium", description: "Sleek, shaped afro" },
    { id: 74, name: "Afro Puff", category: "natural", image: "assets/styles/box-braids-3.jpg", trending: true, length: "short", description: "High puff updo" },
    { id: 75, name: "Finger Coils", category: "natural", image: "assets/styles/twists-2.jpg", trending: true, length: "short", description: "Defined tight coils" },
    { id: 76, name: "Wash and Go", category: "natural", image: "assets/styles/knotless-2.jpg", trending: true, length: "medium", description: "Natural curl pattern" },
    { id: 77, name: "Frohawk", category: "natural", image: "assets/styles/cornrows-1.jpg", trending: true, length: "short", description: "Mohawk-style natural" },
    { id: 78, name: "Tapered TWA", category: "natural", image: "assets/styles/box-braids-3.jpg", trending: true, length: "short", description: "Shorter sides, longer top" },
    { id: 79, name: "High Bun", category: "natural", image: "assets/styles/cornrows-3.jpg", trending: true, length: "medium", description: "Classic top knot" },
    { id: 80, name: "Pineapple Updo", category: "natural", image: "assets/styles/box-braids-3.jpg", trending: true, length: "medium", description: "Crown puff style" },
    { id: 81, name: "Braid Out", category: "natural", image: "assets/styles/twists-2.jpg", trending: true, length: "medium", description: "Unraveled braids for waves" },
    { id: 82, name: "Curly Side Sweep", category: "natural", image: "assets/styles/knotless-2.jpg", trending: true, length: "medium", description: "Swept to one side" },
    { id: 83, name: "Afro with Headband", category: "natural", image: "assets/styles/box-braids-3.jpg", trending: true, length: "medium", description: "Accessorized natural" },
    { id: 84, name: "Chunky Twists", category: "natural", image: "assets/styles/twists-1.jpg", trending: true, length: "medium", description: "Large protective twists" },
    { id: 85, name: "Coiled Bun", category: "natural", image: "assets/styles/cornrows-3.jpg", trending: true, length: "medium", description: "Bun made from coiled hair" },

    // ============================================
    // WIG STYLES (15 styles)
    // ============================================
    { id: 86, name: "Lace Front Straight", category: "wigs", image: "assets/styles/knotless-1.jpg", trending: true, length: "long", description: "Silky straight lace front" },
    { id: 87, name: "Body Wave Wig", category: "wigs", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", description: "Soft flowing waves" },
    { id: 88, name: "Deep Wave Wig", category: "wigs", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", description: "Defined deep waves" },
    { id: 89, name: "Kinky Straight Wig", category: "wigs", image: "assets/styles/box-braids-1.jpg", trending: true, length: "medium", description: "Blown-out texture" },
    { id: 90, name: "Kinky Curly Wig", category: "wigs", image: "assets/styles/box-braids-3.jpg", trending: true, length: "medium", description: "Tight curly texture" },
    { id: 91, name: "Afro Curly Wig", category: "wigs", image: "assets/styles/box-braids-3.jpg", trending: true, length: "short", description: "Full afro texture" },
    { id: 92, name: "Water Wave Wig", category: "wigs", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", description: "Wet/wavy look" },
    { id: 93, name: "Pixie Cut Wig", category: "wigs", image: "assets/styles/cornrows-1.jpg", trending: true, length: "short", description: "Chic short cut" },
    { id: 94, name: "Bob Wig", category: "wigs", image: "assets/styles/knotless-3.jpg", trending: true, length: "short", description: "Classic bob shape" },
    { id: 95, name: "HD Lace Wig", category: "wigs", image: "assets/styles/knotless-1.jpg", trending: true, length: "long", description: "Ultra-realistic hairline" },
    { id: 96, name: "Glueless Wig", category: "wigs", image: "assets/styles/knotless-1.jpg", trending: true, length: "medium", description: "No adhesive needed" },
    { id: 97, name: "U-Part Wig", category: "wigs", image: "assets/styles/knotless-1.jpg", trending: true, length: "long", description: "Blend with natural hair" },
    { id: 98, name: "Braided Wig", category: "wigs", image: "assets/styles/box-braids-1.jpg", trending: true, length: "long", description: "Pre-styled braid look" },
    { id: 99, name: "Curly Bob Wig", category: "wigs", image: "assets/styles/knotless-3.jpg", trending: true, length: "short", description: "Curly bob shape" },
    { id: 100, name: "Loose Curl Wig", category: "wigs", image: "assets/styles/knotless-2.jpg", trending: true, length: "long", description: "Soft loose curls" },
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hairstyles };
}
