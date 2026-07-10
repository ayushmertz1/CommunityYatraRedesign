export interface ItineraryDay {
  day: string
  title: string
  detail: string
}

export interface Journey {
  id: string
  name: string
  short: string
  place: string
  region: string
  duration: string
  nights: string
  priceFrom: number
  pace: 'Gentle' | 'Moderate' | 'Spirited'
  tagline: string
  description: string
  moments: string[]
  itinerary: ItineraryDay[]
  included: string[]
  palette: {
    sky: string
    accent: string
  }
}

export const journeys: Journey[] = [
  {
    id: 'homestay-circuit',
    name: 'Bandipur Community Homestay Circuit',
    short: 'Homestay Circuit',
    place: 'Bandipur',
    region: 'Kathmandu → Bandipur → Chitwan',
    duration: '4 days',
    nights: '3 nights',
    priceFrom: 250,
    pace: 'Moderate',
    tagline: 'Three community homestays, one unforgettable overland circuit.',
    description:
      'Our founding circuit: a 3-night, 4-day loop from Kathmandu through the ridge-top bazaar of Bandipur to the grasslands of Chitwan, sleeping in a different community homestay each night. Every stop is chosen and run by the village itself — Ramkot, Dharampani, and Sauraha — so your stay pays the people who host it, directly.',
    moments: [
      'Hike from Chhirkar to Ramkot Community Homestay',
      'Trek over Bahun Banjyang to Dharampani',
      'Evening cultural program in Sauraha, Chitwan',
      'Jeep safari through Chitwan National Park',
    ],
    itinerary: [
      {
        day: '01',
        title: 'Kathmandu to Bandipur',
        detail:
          'Depart Kathmandu early, breakfast on the highway, lunch at the Marsyangdi River View Hotel. Hike from Chhirkar to Ramkot Community Homestay, meet the village, and enjoy light snacks before continuing to Bandipur Bazar for dinner and an overnight stay.',
      },
      {
        day: '02',
        title: 'Bandipur to Dharampani',
        detail:
          'After breakfast, trek to Dharampani via Bahun Banjyang, with lunch at Dandachhap Community Homestay along the way. Reach Dharampani Community Homestay by evening, explore the area, and settle in for dinner and the night.',
      },
      {
        day: '03',
        title: 'Dharampani to Chitwan',
        detail:
          'After breakfast, head south to Chitwan with a lunch stop at Lavdi Dovan. Arrive at Ghumaune Ghat, then drive on to Sauraha. Relax, join the evening cultural program, and enjoy dinner overnight.',
      },
      {
        day: '04',
        title: 'Chitwan to Kathmandu',
        detail:
          'After breakfast, take a jeep safari through Chitwan National Park. Depart for Kathmandu with a lunch stop on the highway, arriving back by evening around 6:00 pm.',
      },
    ],
    included: [
      'Accommodation in community homestays (shared basis)',
      'One breakfast and two lunches along the highway',
      'Transportation for the full circuit',
      'Jeep safari and cultural program in Chitwan',
    ],
    palette: { sky: '#f0b27a', accent: '#c2543a' },
  },
  {
    id: 'agriculture-tour',
    name: 'Agriculture Tour',
    short: 'Agriculture',
    place: 'Kathmandu · Nuwakot · Bandipur · Chitwan · Gorkha',
    region: 'Farms across five districts',
    duration: '5 days',
    nights: 'customizable',
    priceFrom: 250,
    pace: 'Gentle',
    tagline: 'Plant, harvest and cook your way through Nepal’s farming traditions.',
    description:
      'A hands-on tour of Nepal’s agrarian heartland — working farms in Kathmandu, Nuwakot, Bandipur, Chitwan and Gorkha where crops are still grown and stored the way they were decades ago, with no machines involved. You’ll plant, harvest, and then cook what you’ve picked: a full farm-to-table day is the centrepiece of every visit. Fully customisable to the season and the kind of farming you want to try.',
    moments: [
      'Rice transplanting or millet harvest, depending on season',
      'Farm-to-table cooking session with fresh-picked produce',
      'Traditional grain and vegetable storage methods explained by farmers',
      'Visits to organic farms across five different districts',
    ],
    itinerary: [
      {
        day: '01',
        title: 'Kathmandu valley farms',
        detail:
          'Begin among the valley’s vegetable and flower farms — marigold, cauliflower, tomato — learning how Kathmandu’s produce reaches its markets.',
      },
      {
        day: '02',
        title: 'Nuwakot terraces',
        detail:
          'Move to Nuwakot for hillside terrace farming: maize, millet and seasonal vegetables, with a homestay lunch cooked from the morning’s harvest.',
      },
      {
        day: '03',
        title: 'Bandipur & Gorkha orchards',
        detail:
          'Visit organic farms and fruit orchards around Bandipur and Gorkha — apples, citrus, and the region’s barley and millet fields.',
      },
      {
        day: '04',
        title: 'Chitwan lowlands',
        detail:
          'Descend to the Terai for rice-growing country. Join a ropai (rice planting) session if the season is right, or a harvest if it isn’t.',
      },
      {
        day: '05',
        title: 'Farm-to-table & return',
        detail:
          'A final cooking session turning the week’s harvest into a Nepali table, then the return journey to Kathmandu.',
      },
    ],
    included: [
      'Accommodation in local homestays and eco-lodges',
      'Daily vegetarian meals — breakfast, lunch and dinner',
      'Private-vehicle transportation for the full trip',
      'Guided farming and cooking sessions',
      'Visits to organic farms in Kathmandu, Nuwakot, Bandipur, Chitwan and Gorkha',
    ],
    palette: { sky: '#c9d8b5', accent: '#5c7350' },
  },
  {
    id: 'arts-crafts-tour',
    name: 'Arts & Crafts Tour',
    short: 'Arts & Crafts',
    place: 'Madhesh · Kathmandu Valley',
    region: 'Mithila art, Thangka, pottery & stone',
    duration: '4 days',
    nights: 'customizable',
    priceFrom: 250,
    pace: 'Gentle',
    tagline: 'Mithila walls, Thangka brushes and a potter’s wheel.',
    description:
      'Nepal’s artistic traditions, taught by the artisans who keep them alive: intricate Mithila wall art from the Madhesh province, sacred Thangka painting, temple wood carving, stone sculpture, and pottery thrown the traditional way. Each craft comes with a workshop — you leave with your own handmade piece, not just a photograph of someone else’s.',
    moments: [
      'Mithila art workshop with Madhesh-province artists',
      'Thangka painting session with a working monastery artist',
      'Traditional pottery thrown on a foot-powered wheel',
      'Temple wood-carving and stone-sculpture workshops',
    ],
    itinerary: [
      {
        day: '01',
        title: 'Mithila art, Madhesh',
        detail:
          'Learn the natural pigments and symbolism of Mithila wall art directly from the women artists of the Madhesh province.',
      },
      {
        day: '02',
        title: 'Thangka painting',
        detail:
          'A guided Thangka session — the mineral colours, the mandala geometry, and the meditation built into every brushstroke.',
      },
      {
        day: '03',
        title: 'Wood, stone & clay',
        detail:
          'Try your hand at temple wood carving and stone sculpture in a Kathmandu Valley workshop, then move to the potter’s wheel for traditional pottery.',
      },
      {
        day: '04',
        title: 'Finish & carry home',
        detail:
          'A final studio morning to finish your pieces, with time to pack your handmade souvenirs before the journey back.',
      },
    ],
    included: [
      'All workshop materials and artisan instruction',
      'Accommodation for the duration of the tour',
      'Transportation between workshop locations',
      'Your finished Mithila, Thangka, pottery and carving pieces to take home',
    ],
    palette: { sky: '#e5a25c', accent: '#a03d28' },
  },
  {
    id: 'volunteer-tour',
    name: 'Volunteer Tour',
    short: 'Volunteer',
    place: 'Villages across Nepal',
    region: 'Education · healthcare · community',
    duration: '2+ weeks',
    nights: 'flexible',
    priceFrom: 250,
    pace: 'Spirited',
    tagline: 'Give a hand, not a handout — placements chosen by the village.',
    description:
      'A placement-based tour for travellers who want to contribute, not just observe: education, healthcare support, women’s empowerment or community development, working on projects the village committee has actually asked for. You’ll pair meaningful work with real cultural exchange, and the personal growth that comes from a few weeks of teamwork, empathy and cross-cultural communication in an unfamiliar place.',
    moments: [
      'Morning placements in local schools, clinics or committees',
      'Evenings immersed in the host community’s daily life',
      'Projects chosen and led by the village, never by us',
      'Lasting friendships with fellow volunteers and hosts',
    ],
    itinerary: [
      {
        day: 'Week 1',
        title: 'Arrival & placement',
        detail:
          'Settle into your host village and placement — a school, a health post, or a community development project — and meet the people you’ll be working alongside.',
      },
      {
        day: 'Week 2',
        title: 'Into the work',
        detail:
          'Full days on your project, evenings woven into community life: shared meals, festivals, and the everyday rhythms of your host family.',
      },
      {
        day: 'Onward',
        title: 'Extend or move on',
        detail:
          'Most volunteers extend beyond two weeks once they’re settled in. Stay longer, pair your placement with a homestay circuit, or head home with an open invitation to return.',
      },
    ],
    included: [
      'Homestay accommodation with a host family',
      'Placement matched to your skills and the village’s actual needs',
      'Local orientation and language basics',
      'Ongoing support from the Community Yatra team throughout',
    ],
    palette: { sky: '#9db8cf', accent: '#47614f' },
  },
]
