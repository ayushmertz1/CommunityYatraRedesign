import { asset } from "@/lib/asset";
export interface ItineraryDay {
  day: string;
  title: string;
  body: string;
}

export interface Journey {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  intro: string;
  story: string[];
  image: string;
  imageWide: string;
  duration: string;
  region: string;
  pace: "Gentle" | "Moderate" | "Full days";
  experiences: { title: string; body: string }[];
  included: string[];
  notIncluded: string[];
  itinerary?: ItineraryDay[];
  note?: string;
}

export const journeys: Journey[] = [
  {
    slug: "bandipur-homestay-circuit",
    title: "Bandipur Community Homestay Circuit",
    shortTitle: "Homestay Circuit",
    tagline: "Three nights, four days, three villages — one unbroken thread of welcome.",
    intro:
      "A slow loop from Kathmandu through the hilltop bazaar of Bandipur, the farming village of Dharampani and the riverlands of Chitwan — sleeping in family homes the whole way.",
    story: [
      "The circuit begins where the highway ends. Bandipur's stone-flagged bazaar has barely changed in a century: carved windows lean over the street, and on a clear morning the whole Annapurna range stands at the end of it.",
      "From there the trail drops through orange groves to Dharampani, where your hosts are farmers first and hoteliers never. You eat what the hillside grows. The last leg descends to Chitwan's Tharu country — a different language, a different architecture, the same unhurried welcome.",
      "You travel between homes, not hotels. Every meal, every bed and every guide along the circuit is provided by the villages themselves — which is exactly where your money stays.",
    ],
    image: asset("/images/journeys/circuit.webp"),
    imageWide: asset("/images/journeys/circuit-wide.webp"),
    duration: "4 days · 3 nights",
    region: "Bandipur — Dharampani — Chitwan",
    pace: "Moderate",
    experiences: [
      {
        title: "Hilltop bazaar life",
        body: "Wander Bandipur's pedestrian-only high street, climb to Thani Mai for sunrise, and learn how a Newari trading town keeps its heritage alive.",
      },
      {
        title: "Farm mornings",
        body: "In Dharampani, join your host family's morning routine — milking, picking, planting — before a long Nepali breakfast.",
      },
      {
        title: "Tharu culture",
        body: "In Chitwan, cycle between stilt houses, watch a stick-dance rehearsal and eat dhikri steamed the way it has been for generations.",
      },
      {
        title: "The in-between",
        body: "The journey itself is the point: ridge roads, river crossings and tea stops you would never find alone.",
      },
    ],
    included: [
      "All homestay accommodation (3 nights)",
      "Every meal, cooked by host families",
      "Private transport between villages",
      "Local guides in each community",
      "Cultural programmes and activities",
    ],
    notIncluded: ["International flights", "Nepal entry visa", "Travel insurance", "Personal expenses"],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathmandu to Bandipur",
        body: "Leave the valley after breakfast and climb into the mid-hills. Afternoon walk through the bazaar, evening meal with your host family as the lights come on down the valley.",
      },
      {
        day: "Day 2",
        title: "Bandipur to Dharampani",
        body: "Sunrise from Thani Mai temple, then a downhill trail through orange orchards to Dharampani. Join the evening farm round and help cook dinner on a wood stove.",
      },
      {
        day: "Day 3",
        title: "Dharampani to Chitwan",
        body: "Morning in the fields, then descend to the Tharu villages of Chitwan. Cycle the flatlands, visit a community museum, and end with a stick-dance performance.",
      },
      {
        day: "Day 4",
        title: "Chitwan to Kathmandu",
        body: "A slow river morning — canoes, birdlife, mist — before the drive back to Kathmandu with a different idea of what Nepal is.",
      },
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture Journey",
    shortTitle: "Agriculture",
    tagline: "Plant, harvest, cook, eat — Nepal's oldest story, told by the people living it.",
    intro:
      "Work alongside farming families in the hills and valleys — rice planting, tea gardens, vegetable plots — and follow the harvest from field to table.",
    story: [
      "Most of Nepal still lives by the plough. This journey puts you inside that life instead of driving past it: planting rice in a flooded terrace during ropai season, picking tea in the eastern hills, digging potatoes with a family that has farmed the same slope for six generations.",
      "Nothing here is staged. Grain is still stored the old way, oxen still turn the smaller fields, and the food you help harvest is the food you eat that night — cooked with the family, on their stove, to their grandmother's timing.",
      "It is a working education in organic and subsistence farming, and one of the most honest ways to understand the Himalayan economy. Students and researchers are especially welcome; farmers love an extra pair of hands.",
    ],
    image: asset("/images/journeys/agriculture.webp"),
    imageWide: asset("/images/journeys/agriculture-wide.webp"),
    duration: "Flexible · 2–10 days",
    region: "Nuwakot · Bandipur · Gorkha · Chitwan",
    pace: "Full days",
    experiences: [
      {
        title: "Traditional farming",
        body: "Plant rice, harvest vegetables and tend crops using methods passed down for generations — no machines, no shortcuts.",
      },
      {
        title: "Farm-to-table cooking",
        body: "Carry the harvest home and turn it into dal bhat, gundruk and sel roti with the family that grew it.",
      },
      {
        title: "Seasonal work",
        body: "Ropai rice planting in monsoon, tea plucking in autumn, citrus and millet in winter — the journey changes with the calendar.",
      },
      {
        title: "Village immersion",
        body: "Live with the family, join the festivals that punctuate the farming year, and learn why agriculture is culture here.",
      },
    ],
    included: [
      "Homestay and eco-lodge accommodation",
      "All meals with host families",
      "Farming activities and equipment",
      "Local farm guides",
      "Transport from Kathmandu",
    ],
    notIncluded: ["International flights", "Nepal entry visa", "Travel insurance", "Personal expenses"],
    note: "Fully customisable by season and interest — tell us what you want to grow, pick or learn, and we will find the village doing it.",
  },
  {
    slug: "arts-and-crafts",
    title: "Arts & Script Journey",
    shortTitle: "Arts & Crafts",
    tagline: "Thangka, Mithila, wood, stone, clay — and the scripts that carried a civilisation.",
    intro:
      "Work beside master artisans in their own workshops — painting, carving, throwing pots — and trace Nepal's calligraphic traditions from Ranjana script to living Devanagari.",
    story: [
      "Nepal's art was never made for galleries. Thangka paintings are prayers, Mithila murals are dowries and blessings, and the carved windows of Kathmandu are theology in wood. This journey takes you to the workshops where all of it is still being made.",
      "You will sit with a thangka master as mineral pigments are ground by hand, paint Mithila motifs with women who learned them from their mothers, and try the potter's wheel in Bhaktapur's open squares.",
      "The thread running through it all is script: Ranjana, the sacred calligraphy of the Newars, and the Devanagari that grew alongside it. Learn to write your name the way scribes wrote scripture.",
    ],
    image: asset("/images/journeys/arts-crafts.webp"),
    imageWide: asset("/images/journeys/arts-crafts-wide.webp"),
    duration: "Flexible · 3–7 days",
    region: "Kathmandu Valley · Janakpur",
    pace: "Gentle",
    experiences: [
      {
        title: "Thangka painting",
        body: "Watch — then try — the sacred Buddhist painting tradition: hand-ground pigments, gold line-work and geometry as meditation.",
      },
      {
        title: "Mithila art",
        body: "Paint the bold figurative murals of the Janakpur tradition with the women's cooperatives keeping it alive.",
      },
      {
        title: "Wood & stone carving",
        body: "Visit the carvers restoring Kathmandu's temples, and cut your own small relief under a master's eye.",
      },
      {
        title: "Script & calligraphy",
        body: "Learn the strokes of Ranjana and Devanagari — and why a script can carry a nation's identity.",
      },
    ],
    included: [
      "All workshop fees and materials",
      "Master artisan sessions",
      "Homestay accommodation",
      "All meals",
      "Local transport and guides",
    ],
    notIncluded: ["International flights", "Nepal entry visa", "Travel insurance", "Artwork shipping"],
  },
  {
    slug: "volunteer",
    title: "Volunteer Journey",
    shortTitle: "Volunteer",
    tagline: "Leave something better than a footprint.",
    intro:
      "Teach, build, plant and organise alongside village communities — placements shaped around what the community actually asked for, not what looks good in photos.",
    story: [
      "Every placement starts with the village, not the volunteer. Communities tell us what they need — English conversation practice at the school, hands for a tree-planting season, help digitising a cooperative's records — and we match you to it.",
      "You live in a homestay, eat with your hosts and work to the village's rhythm. The point is exchange, not charity: you will learn at least as much as you teach.",
      "Placements run from a single week to a full season, and we are honest about impact — small, steady and community-owned beats grand gestures every time.",
    ],
    image: asset("/images/journeys/volunteer.webp"),
    imageWide: asset("/images/journeys/volunteer-wide.webp"),
    duration: "1 week — 3 months",
    region: "Placements across Nepal",
    pace: "Full days",
    experiences: [
      {
        title: "Community teaching",
        body: "Support local teachers with English conversation, computer literacy or after-school clubs — always alongside, never instead of.",
      },
      {
        title: "Environment work",
        body: "Tree planting, trail restoration and clean-up campaigns organised by the villages themselves.",
      },
      {
        title: "Skills exchange",
        body: "Bring what you know — accounting, carpentry, design, first aid — and pass it on where it multiplies.",
      },
      {
        title: "Cultural exchange",
        body: "Live as a neighbour, not a guest: festivals, farm days and the daily life of the community around you.",
      },
    ],
    included: [
      "Homestay accommodation",
      "All meals with host family",
      "Placement matching and orientation",
      "Local coordinator support",
      "Certificate of contribution",
    ],
    notIncluded: ["International flights", "Nepal entry visa", "Travel insurance", "Weekend excursions"],
  },
];

export const upcomingJourneys = [
  {
    title: "Cultural Cooking",
    image: asset("/images/journeys/cooking.webp"),
    blurb: "Family kitchens, market mornings and the grammar of dal bhat.",
  },
  {
    title: "Yoga & Meditation",
    image: asset("/images/journeys/yoga.webp"),
    blurb: "Stillness practised where the mountains do it best.",
  },
  {
    title: "Language Immersion",
    image: asset("/images/journeys/language.webp"),
    blurb: "Learn Nepali at the dinner table, not the classroom.",
  },
  {
    title: "Family Journeys",
    image: asset("/images/journeys/family.webp"),
    blurb: "Villages that raise children together, welcoming yours.",
  },
  {
    title: "Festival Journeys",
    image: asset("/images/journeys/festival.webp"),
    blurb: "Time your travel to jatras, harvests and masked dances.",
  },
  {
    title: "Project Journeys",
    image: asset("/images/journeys/project.webp"),
    blurb: "Purpose-built trips around community development work.",
  },
];
