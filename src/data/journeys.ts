export interface ItineraryDay {
  day: string
  title: string
  detail: string
}

export interface Journey {
  id: string
  name: string
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
  palette: {
    sky: string
    accent: string
  }
}

export const journeys: Journey[] = [
  {
    id: 'bandipur',
    name: 'Bandipur Homestay Circuit',
    place: 'Bandipur',
    region: 'Tanahun · mid-hills',
    duration: '4 days',
    nights: '3 nights',
    priceFrom: 185,
    pace: 'Gentle',
    tagline: 'A hilltop bazaar where time slowed down and stayed.',
    description:
      'Bandipur is a living Newar trading town strung along a saddle ridge, its 18th-century facades looking straight out at the Annapurna and Manaslu ranges. You will sleep above a family kitchen, walk the old salt route to Ramkot, and learn why the town banned cars from its flagstone bazaar.',
    moments: [
      'Dawn over Marsyangdi valley from Thani Mai shrine',
      'Newari khaja set on a bazaar verandah',
      'Silk-farm walk & Ramkot round-house village',
      'Evening bhajan songs with your host family',
    ],
    itinerary: [
      {
        day: '01',
        title: 'Kathmandu → the ridge',
        detail:
          'Morning drive west along the Trisuli river. Climb the winding road to Bandipur, settle into your homestay, and wander the traffic-free bazaar as lamps come on.',
      },
      {
        day: '02',
        title: 'The old salt route',
        detail:
          'Walk the trade path to Ramkot village — round stone houses, millet terraces, a shared lunch with a farming family. Return for sunset at Tundikhel viewpoint.',
      },
      {
        day: '03',
        title: 'Caves, silk & kitchens',
        detail:
          'Descend to Siddha Gufa, one of Nepal’s largest caves, visit the community silk farm, then take over the kitchen: tonight you cook the dal bhat.',
      },
      {
        day: '04',
        title: 'Slow morning, slow goodbye',
        detail:
          'Tea on the verandah, a last turn through the bazaar, and the drive back to Kathmandu — with standing invitations to return.',
      },
    ],
    palette: { sky: '#f0b27a', accent: '#c2543a' },
  },
  {
    id: 'ghalegaun',
    name: 'Ghalegaun & Ghanpokhara',
    place: 'Ghale Gaun',
    region: 'Lamjung · Annapurna foothills',
    duration: '6 days',
    nights: '5 nights',
    priceFrom: 340,
    pace: 'Moderate',
    tagline: 'Gurung villages in the amphitheatre of the Annapurnas.',
    description:
      'At 2,100 metres, Ghalegaun faces a 180-degree wall of snow — Machhapuchhre, Annapurna II, Lamjung Himal. This is Nepal’s model community-tourism village: every household takes turns hosting, and every rupee is pooled and shared. Expect honey-coloured light, woollen looms, and the warmest welcome in the hills.',
    moments: [
      'Sunrise panorama of Annapurna II & Machhapuchhre',
      'Traditional Ghatu dance performed by your hosts',
      'A day with the sheep-wool weavers',
      'Millet-harvest lunch high above the Midim khola',
    ],
    itinerary: [
      {
        day: '01–02',
        title: 'Into Lamjung',
        detail:
          'Drive to Besisahar, then climb by jeep and on foot through rhododendron forest to Ghalegaun. Two nights with a Gurung household on the upper terraces.',
      },
      {
        day: '03',
        title: 'Loom, hive & pasture',
        detail:
          'Morning with the weavers’ cooperative, afternoon at the cliff-hive apiary, evening Ghatu dance in the village square — hosted in turn by the community.',
      },
      {
        day: '04–05',
        title: 'Ridge walk to Ghanpokhara',
        detail:
          'A high traverse to the sister village of Ghanpokhara. Homestay with a veteran Gurkha family; day hike to the Uttarkanya shrine ridge.',
      },
      {
        day: '06',
        title: 'Descent & return',
        detail: 'Walk down through terraced farmland to the road head and return to Kathmandu or Pokhara.',
      },
    ],
    palette: { sky: '#9db8cf', accent: '#47614f' },
  },
  {
    id: 'panauti',
    name: 'Panauti Living Heritage',
    place: 'Panauti',
    region: 'Kavre · Kathmandu valley rim',
    duration: '2 days',
    nights: '1 night',
    priceFrom: 95,
    pace: 'Gentle',
    tagline: 'A Newar temple town at the meeting of sacred rivers.',
    description:
      'An hour from Kathmandu, Panauti sits where two rivers — and a mythical third — converge. Its Indreshwar temple has stood since 1294. The town’s women pioneered Nepal’s community homestay movement; staying here is a masterclass in Newar cooking, courtyard life, and unhurried mornings.',
    moments: [
      'Aarati lamps on the river ghats at dusk',
      'Hands-on Newari cooking with your host aama',
      'The 13th-century Indreshwar Mahadev temple',
      'Cycle ride through mustard fields to Namobuddha',
    ],
    itinerary: [
      {
        day: '01',
        title: 'Courtyards & kitchens',
        detail:
          'Arrive mid-morning. Old-town walk through tiered temples and hidden courtyards, then an afternoon cooking class — yomari, chatamari, and the family’s own dal recipe. Evening aarati by the confluence.',
      },
      {
        day: '02',
        title: 'To the golden stupa',
        detail:
          'Early cycle or drive up to Namobuddha monastery for morning prayers, tea with a view of the Himalaya, and an easy return to Kathmandu by mid-afternoon.',
      },
    ],
    palette: { sky: '#e5a25c', accent: '#a03d28' },
  },
  {
    id: 'chitwan',
    name: 'Tharu Lands of Chitwan',
    place: 'Barauli',
    region: 'Chitwan · Terai grasslands',
    duration: '5 days',
    nights: '4 nights',
    priceFrom: 275,
    pace: 'Spirited',
    tagline: 'Grasslands, river dawns and the culture of the Tharu.',
    description:
      'On the western edge of Chitwan National Park, the village of Barauli runs its own community lodge and homestays. Days move between wildlife — rhinos at the river, hornbills overhead — and the rhythms of Tharu life: stick dances, fish traps, and houses painted with rice-flour murals.',
    moments: [
      'Canoe drift past basking gharial crocodiles',
      'Tharu stick dance under the mango trees',
      'Ox-cart ride through the village commons',
      'Dawn mist on the Narayani river floodplain',
    ],
    itinerary: [
      {
        day: '01',
        title: 'Down to the Terai',
        detail:
          'Fly or drive south to Chitwan. Settle into Barauli community homestay; evening walk through the village as the herds come home.',
      },
      {
        day: '02–03',
        title: 'Into the grasslands',
        detail:
          'Jeep and canoe safaris in the national park’s quiet western sector with community naturalists — rhino, deer, gharial, and 300 bird species.',
      },
      {
        day: '04',
        title: 'A Tharu day',
        detail:
          'Learn mural painting and net fishing, cook a Tharu feast, and join the evening stick-dance — everyone dances, no exceptions.',
      },
      {
        day: '05',
        title: 'River morning & return',
        detail: 'Last canoe drift at dawn, brunch with your hosts, and the journey back to Kathmandu.',
      },
    ],
    palette: { sky: '#c9d8b5', accent: '#5c7350' },
  },
]
