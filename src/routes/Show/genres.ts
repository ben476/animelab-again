interface Genre {
  description: string;
  name: string;
  slug: string;
  image: string;
}

type Genres = Record<string, Genre>;

export const genres: Genres = {
  "action": {
    "description": "No time for story!* This is adrenaline fueled, in-your-face kaboom candy. *Well, actually there are stories... explosion stories.",
    "name": "Action",
    "slug": "action",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_1_widescreen-key-art-clean-small_54395.jpeg"
  },
  "adventure": {
    "description": "Epic and exciting tales of risk, danger and reward. There will be many miles on foot. Is it treasure you seek?",
    "name": "Adventure",
    "slug": "adventure",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_2_widescreen-key-art-clean-small_54397.jpeg"
  },
  "bishonen": {
    "description": "A Japanese term literally meaning \"beautiful boy\"... of which there are no shortage here. DREAMY!",
    "name": "Bishonen",
    "slug": "bishonen",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_3_widescreen-key-art-clean-small_54398.jpeg"
  },
  "bishoujo": {
    "description": "A Japanese term literally meaning \"beautiful girl\". If that sounds like your thing, you'll find lots of them here!",
    "name": "Bishoujo",
    "slug": "bishoujo",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_4_widescreen-key-art-clean-small_54399.jpeg"
  },
  "comedy": {
    "description": "If we need to explain comedy to you, then it sounds like you DEFINITELY need to watch something in this category.",
    "name": "Comedy",
    "slug": "comedy",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_5_widescreen-key-art-clean-small_54400.jpeg"
  },
  "documentary": {
    "description": "See the people behind your favourite anime! Some of them are just as quirky as the characters they create.",
    "name": "Documentary",
    "slug": "documentary",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_37_widescreen-key-art-clean-small_85352.jpeg"
  },
  "drama": {
    "description": "Not to be sensationalist, but this situation is pretty serious and we think you need to take a moment to think about the ramifications... Now THAT'S Drama!",
    "name": "Drama",
    "slug": "drama",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_7_widescreen-key-art-clean-small_54402.jpeg"
  },
  "fan-service": {
    "description": "A harmless bit of titilation that can also be a heck of a lot of fun, and especially rewarding for dedicated viewers. Hard to watch with glasses (i.e. fogging).",
    "name": "Fan Service",
    "slug": "fan-service",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_8_widescreen-key-art-clean-small_54403.jpeg"
  },
  "fantasy": {
    "description": "Dare you enter a world of swords, magic and monsters? Accept the quest and become a hero!",
    "name": "Fantasy",
    "slug": "fantasy",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_9_widescreen-key-art-clean-small_54404.jpeg"
  },
  "gaming": {
    "description": "+5 attack to all series under this category",
    "name": "Gaming",
    "slug": "gaming",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_33_widescreen-key-art-clean-small_54405.jpeg"
  },
  "harem": {
    "description": "One guy. A bevy of girls. Drawn together by circumstance. Romantic fumblings and/or hijinks ensue.",
    "name": "Harem",
    "slug": "harem",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_10_widescreen-key-art-clean-small_54406.jpeg"
  },
  "historical": {
    "description": "They told you you'd never learn anything from anime. They were wrong (sort of). ",
    "name": "Historical",
    "slug": "historical",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_11_widescreen-key-art-clean-small_54407.jpeg"
  },
  "horror": {
    "description": "Behind you!",
    "name": "Horror",
    "slug": "horror",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_12_widescreen-key-art-clean-small_54408.jpeg"
  },
  "idol": {
    "description": "Reach for your dreams! Everyone can become an idol if they believe!",
    "name": "Idol",
    "slug": "idol",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_35_widescreen-key-art-clean-small_65689.jpeg"
  },
  "isekai": {
    "description": "Meaning \"another world\". Getting transported, trapped or reborn into another world, usually by way of a truck.",
    "name": "Isekai",
    "slug": "isekai",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_36_widescreen-key-art-clean-small_65700.jpeg"
  },
  "kids": {
    "description": "The best family and kids shows ready to stream on AnimeLab",
    "name": "Kids",
    "slug": "kids",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_34_widescreen-key-art-clean-small_55955.jpeg"
  },
  "magical-girl": {
    "description": "The life of a magical girl is never as whimscial as the word 'magical' suggests. Should be called 'Introspective Girl', really.",
    "name": "Magical Girl",
    "slug": "magical-girl",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_13_widescreen-key-art-clean-small_54409.jpeg"
  },
  "martial-arts": {
    "description": "Kung-fu, Karate, Grappling, Wrestling - if it's even vaguely a martial-art, you can guarantee there's a show dedicated to it.",
    "name": "Martial Arts",
    "slug": "martial-arts",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_14_widescreen-key-art-clean-small_54410.jpeg"
  },
  "mecha": {
    "description": "Two words: Giant Robots. If you require more incentive... welp... \u00c2\u00af\\_(\u00e3\u0192\u201e)_/\u00c2\u00af",
    "name": "Mecha",
    "slug": "mecha",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_15_widescreen-key-art-clean-small_54411.jpeg"
  },
  "moe": {
    "description": "Moe is slang for 'strong affection'... or, if you like 'feels'. So. Yes. These are stories about feels.",
    "name": "Moe",
    "slug": "moe",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_16_widescreen-key-art-clean-small_54412.jpeg"
  },
  "mystery": {
    "description": "What was that? Who was she? What year is it? Who's the president??",
    "name": "Mystery",
    "slug": "mystery",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_17_widescreen-key-art-clean-small_54414.jpeg"
  },
  "offbeat": {
    "description": "Looking for something different? Here's some off the wall anime that sometimes defy description.",
    "name": "Offbeat",
    "slug": "offbeat",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_32_widescreen-key-art-clean-small_54415.jpeg"
  },
  "reverse-harem": {
    "description": "One girl. A bevy of guys. Drawn together by circumstance. Romantic fumblings and/or hijinks ensue. Probably less panty shots than in your normal harem.",
    "name": "Reverse Harem",
    "slug": "reverse-harem",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_18_widescreen-key-art-clean-small_54416.jpeg"
  },
  "romance": {
    "description": "(\u00ef\u00bd\u00a1\u00e2\u2122\u00a5\u00e2\u20ac\u00bf\u00e2\u2122\u00a5\u00ef\u00bd\u00a1)",
    "name": "Romance",
    "slug": "romance",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_19_widescreen-key-art-clean-small_54417.jpeg"
  },
  "school": {
    "description": "School yourself with these textbook on-campus shows.",
    "name": "School",
    "slug": "school",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_20_widescreen-key-art-clean-small_54418.jpeg"
  },
  "sci-fi": {
    "description": "Need an introduction to this genre? Three words. Watch. Astro. Boy.",
    "name": "Sci Fi",
    "slug": "sci-fi",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_21_widescreen-key-art-clean-small_54419.jpeg"
  },
  "shonen": {
    "description": "On paper, these are shows for boys. But in reality, Shonen will be in the wheelhouse of anyone (Boy, Girl, Gramps, Goldfish) who likes charismatic characters getting into scrapes and adventures across a more than reasonable amount of episodes.",
    "name": "Shonen",
    "slug": "shonen",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_22_widescreen-key-art-clean-small_54420.jpeg"
  },
  "slice-of-life": {
    "description": "Today I bought milk, oranges and taco mix. Then I bumped into Beryl, who was returning a set of plates. End scene.",
    "name": "Slice of Life",
    "slug": "slice-of-life",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_23_widescreen-key-art-clean-small_54421.jpeg"
  },
  "space": {
    "description": "\"So, let me get this right. It's exactly the same as a battleship, but it flies in space?\" *applause*  ",
    "name": "Space",
    "slug": "space",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_24_widescreen-key-art-clean-small_54422.jpeg"
  },
  "sports": {
    "description": "Step up your game with these competitive shows. Sweat. Sweat. Sweat. ",
    "name": "Sports",
    "slug": "sports",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_25_widescreen-key-art-clean-small_54423.jpeg"
  },
  "super-power": {
    "description": "Wish you had the power to fell a foe with one punch? There's a show about that!",
    "name": "Super Power",
    "slug": "super-power",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_26_widescreen-key-art-clean-small_54424.jpeg"
  },
  "supernatural": {
    "description": "We've all had a long-haired hippy crawl backwards out of our TVs, right?",
    "name": "Supernatural",
    "slug": "supernatural",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_27_widescreen-key-art-clean-small_54425.jpeg"
  },
  "yaoi": {
    "description": "The history of Yaoi is long and may appear hard to get a hold of, but if you go deep enough, you will come to understand it.",
    "name": "Yaoi",
    "slug": "yaoi",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_29_widescreen-key-art-clean-small_54426.jpeg"
  },
  "yuri": {
    "description": "In the years to come, historians will say these girls were just \"very good friends\", but we know the truth.",
    "name": "Yuri",
    "slug": "yuri",
    "image": "//0c86e2d1-madman-com-au.akamaized.net/genres/genre_28_widescreen-key-art-clean-small_54427.jpeg"
  }
}
