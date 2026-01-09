/**
 * Crown & Color - Stylist Database
 * Mock data for developmental search engine
 */

const stylists = [
    {
        id: 1,
        name: "Amara Johnson",
        specialties: ["Box Braids", "Locs", "Knotless Braids"],
        location: "Harare, Zimbabwe",
        rating: 4.9,
        reviews: 127,
        image: "assets/stylists/stylist-1.jpg",
        contact: {
            whatsapp: "263774694160",
            email: "mapeterenyasha@gmail.com",
            preferred: "whatsapp"
        },
        bio: "Master braider with 10+ years of experience in protective styling."
    },
    {
        id: 2,
        name: "Thandi Nkosi",
        specialties: ["Cornrows", "Hair Design", "Feed-in Braids"],
        location: "Bulawayo, Zimbabwe",
        rating: 4.8,
        reviews: 89,
        image: "assets/stylists/stylist-2.jpg",
        contact: {
            whatsapp: "263712345678",
            email: "thandi@crowncolor.co.zw",
            preferred: "email"
        },
        bio: "Expert in intricate geometric patterns and artistic hair design."
    },
    {
        id: 3,
        name: "Blessing Okafor",
        specialties: ["Knotless Braids", "Passion Twists", "Spring Twists"],
        location: "Mutare, Zimbabwe",
        rating: 5.0,
        reviews: 203,
        image: "assets/stylists/stylist-3.jpg",
        contact: {
            whatsapp: "263789012345",
            email: "blessing@styles.com",
            preferred: "whatsapp"
        },
        bio: "Specializing in tension-free knotless techniques for healthy edges."
    },
    {
        id: 4,
        name: "Zanele Dlamini",
        specialties: ["Natural Hair Styling", "Silk Press", "Twist Outs"],
        location: "Johannesburg, South Africa",
        rating: 4.7,
        reviews: 56,
        image: "assets/stylists/stylist-4.jpg",
        contact: {
            whatsapp: "27123456789",
            email: "zanele@hair.za",
            preferred: "whatsapp"
        },
        bio: "Natural hair enthusiast focusing on curl definition and moisture."
    },
    {
        id: 5,
        name: "Kuda Moyo",
        specialties: ["Dreadlocks", "Loc Repair", "Loc Extensions"],
        location: "Gweru, Zimbabwe",
        rating: 4.9,
        reviews: 112,
        image: "assets/stylists/stylist-5.jpg",
        contact: {
            whatsapp: "263733445566",
            email: "kuda@locmaster.com",
            preferred: "whatsapp"
        },
        bio: "The go-to expert for loc journeys and maintenance in the midlands."
    },
    {
        id: 6,
        name: "Ngonidzashe T.",
        specialties: ["Goddess Braids", "Boho Knotless", "Wig Installation"],
        location: "Victoria Falls, Zimbabwe",
        rating: 4.8,
        reviews: 74,
        image: "assets/stylists/stylist-6.jpg",
        contact: {
            whatsapp: "263711223344",
            email: "ngoni@vicfallsbraids.com",
            preferred: "whatsapp"
        },
        bio: "Bringing vacation vibes to your hair with premium boho styles."
    },
    {
        id: 7,
        name: "Sipho Kumalo",
        specialties: ["Mens Braids", "Fades", "Barbering"],
        location: "Cape Town, South Africa",
        rating: 4.6,
        reviews: 42,
        image: "assets/stylists/stylist-7.jpg",
        contact: {
            whatsapp: "27987654321",
            email: "sipho@cutandbraid.com",
            preferred: "whatsapp"
        },
        bio: "Bridging the gap between sharp fades and artistic braiding."
    },
    {
        id: 8,
        name: "Miriam Zulu",
        specialties: ["Micro Braids", "Traditional Braiding", "Thread Styles"],
        location: "Harare, Zimbabwe",
        rating: 4.9,
        reviews: 156,
        image: "assets/stylists/stylist-8.jpg",
        contact: {
            whatsapp: "263772112233",
            email: "miriam@tradstyles.zw",
            preferred: "whatsapp"
        },
        bio: "Preserving traditional African braiding arts with a modern touch."
    },
    {
        id: 9,
        name: "Tinashe M.",
        specialties: ["Braided Ponytails", "Updos", "Bridal Hair"],
        location: "Harare, Zimbabwe",
        rating: 5.0,
        reviews: 31,
        image: "assets/stylists/stylist-9.jpg",
        contact: {
            whatsapp: "263775566778",
            email: "tinashe@perfectupdo.com",
            preferred: "email"
        },
        bio: "Wedding and event specialist for sophisticated, clean finishes."
    },
    {
        id: 10,
        name: "Olawunmi A.",
        specialties: ["Nigerian Braids", "Stitch Braids", "Cornrows"],
        location: "Lagos, Nigeria",
        rating: 4.9,
        reviews: 245,
        image: "assets/stylists/stylist-10.jpg",
        contact: {
            whatsapp: "2341234567890",
            email: "ola@lagosbraid.ng",
            preferred: "whatsapp"
        },
        bio: "Speed and precision in every stitch. Master of the Lagos braid scene."
    },
    {
        id: 11,
        name: "Chiamaka Eze",
        specialties: ["Butterfly Locs", "Faux Locs", "Goddess Locs"],
        location: "Abuja, Nigeria",
        rating: 4.8,
        reviews: 189,
        image: "assets/stylists/stylist-11.jpg",
        contact: {
            whatsapp: "2349876543210",
            email: "chiamaka@abujabraids.ng",
            preferred: "whatsapp"
        },
        bio: "Loc specialist bringing dreamy goddess energy to every style."
    },
    {
        id: 12,
        name: "Farai Nyathi",
        specialties: ["Crochet Braids", "Marley Twists", "Havana Twists"],
        location: "Bulawayo, Zimbabwe",
        rating: 4.7,
        reviews: 67,
        image: "assets/stylists/stylist-12.jpg",
        contact: {
            whatsapp: "263778899001",
            email: "farai@crochethair.zw",
            preferred: "whatsapp"
        },
        bio: "Crochet queen. Get voluminous styles in half the time."
    },
    {
        id: 13,
        name: "Nandi Phiri",
        specialties: ["Jumbo Braids", "Triangle Braids", "Box Braids"],
        location: "Lusaka, Zambia",
        rating: 4.9,
        reviews: 134,
        image: "assets/stylists/stylist-13.jpg",
        contact: {
            whatsapp: "260971234567",
            email: "nandi@zambiahair.com",
            preferred: "whatsapp"
        },
        bio: "Top-rated braider in Zambia. Clean parts and perfect tension."
    },
    {
        id: 14,
        name: "Tendai Chikwava",
        specialties: ["Kids Braids", "School Styles", "Protective Styles"],
        location: "Harare, Zimbabwe",
        rating: 5.0,
        reviews: 215,
        image: "assets/stylists/stylist-14.jpg",
        contact: {
            whatsapp: "263771122334",
            email: "tendai@kidzbraids.zw",
            preferred: "whatsapp"
        },
        bio: "Gentle hands and patience. Making kids look amazing for school."
    },
    {
        id: 15,
        name: "Lindiwe Mbatha",
        specialties: ["Fulani Braids", "Tribal Styles", "Beaded Braids"],
        location: "Durban, South Africa",
        rating: 4.8,
        reviews: 98,
        image: "assets/stylists/stylist-15.jpg",
        contact: {
            whatsapp: "27601234567",
            email: "lindiwe@tribalhair.za",
            preferred: "whatsapp"
        },
        bio: "Connecting modern beauty to our African heritage through braids."
    },
    {
        id: 16,
        name: "Rudo Makoni",
        specialties: ["Senegalese Twists", "Rope Twists", "Flat Twists"],
        location: "Chitungwiza, Zimbabwe",
        rating: 4.6,
        reviews: 45,
        image: "assets/stylists/stylist-16.jpg",
        contact: {
            whatsapp: "263773344556",
            email: "rudo@twistmaster.zw",
            preferred: "email"
        },
        bio: "Twist specialist. Neat, long-lasting, and always on time."
    },
    {
        id: 17,
        name: "Adaeze Okonkwo",
        specialties: ["Braided Wigs", "Wig Making", "Custom Units"],
        location: "Port Harcourt, Nigeria",
        rating: 4.9,
        reviews: 178,
        image: "assets/stylists/stylist-17.jpg",
        contact: {
            whatsapp: "2348012345678",
            email: "ada@adawigs.ng",
            preferred: "whatsapp"
        },
        bio: "Custom braided wigs that look like your own scalp. Ready in 24hrs."
    },
    {
        id: 18,
        name: "Precious Mokoena",
        specialties: ["Color Braids", "Ombre Styles", "Rainbow Braids"],
        location: "Pretoria, South Africa",
        rating: 4.7,
        reviews: 82,
        image: "assets/stylists/stylist-18.jpg",
        contact: {
            whatsapp: "27712345678",
            email: "precious@colorbraids.za",
            preferred: "whatsapp"
        },
        bio: "Add some color to your life! Specializing in vibrant, bold styles."
    },
    {
        id: 19,
        name: "Chiedza Mutasa",
        specialties: ["Bohemian Locs", "Soft Locs", "Distressed Locs"],
        location: "Norton, Zimbabwe",
        rating: 4.8,
        reviews: 63,
        image: "assets/stylists/stylist-19.jpg",
        contact: {
            whatsapp: "263715566778",
            email: "chiedza@bohobraids.zw",
            preferred: "whatsapp"
        },
        bio: "Boho queen. Giving you that effortlessly chic goddess energy."
    },
    {
        id: 20,
        name: "Yewande Adeyemi",
        specialties: ["Stitch Braids", "Pop Smoke Braids", "Lemonade Braids"],
        location: "Ibadan, Nigeria",
        rating: 4.9,
        reviews: 221,
        image: "assets/stylists/stylist-20.jpg",
        contact: {
            whatsapp: "2348087654321",
            email: "yewande@stitchperfect.ng",
            preferred: "whatsapp"
        },
        bio: "The stitch braid specialist. Perfect parts, perfect finish."
    },
    {
        id: 21,
        name: "Rumbidzai Tome",
        specialties: ["Feed-in Braids", "Ghana Braids", "Lemonade Braids"],
        location: "Masvingo, Zimbabwe",
        rating: 4.7,
        reviews: 54,
        image: "assets/stylists/stylist-21.jpg",
        contact: {
            whatsapp: "263779988776",
            email: "rumbi@feedinqueen.zw",
            preferred: "whatsapp"
        },
        bio: "Feed-in expert creating seamless, natural-looking braids."
    },
    {
        id: 22,
        name: "Thandiwe Ncube",
        specialties: ["Loc Maintenance", "Loc Styling", "Interlocking"],
        location: "Francistown, Botswana",
        rating: 5.0,
        reviews: 167,
        image: "assets/stylists/stylist-22.jpg",
        contact: {
            whatsapp: "26776543210",
            email: "thandi@locsofbots.bw",
            preferred: "whatsapp"
        },
        bio: "Botswana's #1 loctician. Growing healthy, beautiful locs since 2012."
    }
];

// If using ES modules
// export default stylists;
