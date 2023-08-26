import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Cruising through tranquil waters, finding serenity in the gentle waves💙🌊",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
        {
          _id: "d05165bf-1238-43b9-9258-989469a4a6be",
          firstName: "Smriti",
          lastName: "Jain",
          username: "smriti_13",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255439/smriti-jain_h6m7gr.jpg",
          text: "Looking good!",
          createdAt: new Date("May 02 2023 09:09:09"),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Ballani",
        username: "sunil_ballani",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        text: "Nice pic!",
        createdAt: new Date("January 02 2023 09:09:09"),
      },
      {
        _id: "d05165bf-1238-43b9-9258-989469a4a6be",
        firstName: "Smriti",
        lastName: "Jain",
        username: "smriti_13",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255439/smriti-jain_h6m7gr.jpg",
        text: "Looking good!",
        createdAt: new Date("May 02 2023 09:09:09"),
      },
    ],
    fullName: "Nisha Sharma",
    username: "nisha",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692954296/pexels-te-lensfix-1371360_gz7pnn.jpg",
    type: "image",
    createdAt: new Date("2023-06-05"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Cause we were in paris!💃🏻✨",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Ballani",
        username: "sunil_ballani",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        text: "Oh my god, what a view!😭",
        createdAt: new Date("January 02 2023 09:09:09"),
      },
    ],
    fullName: "Nisha Sharma",
    username: "nisha",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/video/upload/v1693038626/post-3_zatvd7.mp4",
    type: "video",
    createdAt: new Date("2022-12-25"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "On my way to steal your girl!😂",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
        {
          _id: "d05165cf-1238-43b9-9258-989419a4a6be",
          firstName: "Maya",
          lastName: "Rodriguez",
          username: "maya",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692854443/maya-rodriguez_owufz2.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "d05165cf-1238-43b9-9258-989419a4a6be",
        firstName: "Maya",
        lastName: "Rodriguez",
        username: "maya",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692854443/maya-rodriguez_owufz2.jpg",
        text: "He is such a cutie!🥹",
        createdAt: new Date("February 19 2023 12:24:26"),
      },
    ],
    fullName: "Sunil Ballani",
    username: "sunil_ballani",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/video/upload/v1693045585/post-5_jvecmp.mp4",
    type: "video",
    createdAt: new Date("2023-02-18"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "A sight to behold!🌄",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
        {
          _id: "e97a8ef3-3db7-4d5c-9c4e-7b3fc7d62c89",
          firstName: "James",
          lastName: "Thompson",
          username: "james",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692939704/james-thompson_nb3by1.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "e97a8ef3-3db7-4d5c-9c4e-7b3fc7d62c89",
        firstName: "James",
        lastName: "Thompson",
        username: "james",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692939704/james-thompson_nb3by1.jpg",
        text: "Where to man?",
        createdAt: new Date("October 25 2022 22:10:15"),
      },
    ],
    fullName: "Sunil Ballani",
    username: "sunil_ballani",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693046332/post-6_xm5kd1.jpg",
    type: "image",
    createdAt: new Date("2022-10-25"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "🥹🥹",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
        {
          _id: "e97a8ef3-3db7-4d5c-9c4e-7b3fc7d62c89",
          firstName: "James",
          lastName: "Thompson",
          username: "james",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692939704/james-thompson_nb3by1.jpg",
        },
        {
          _id: "bdbb4f25-6d8c-489d-9ee3-8a4e2152e012",
          firstName: "Elizabeth",
          lastName: "Brown",
          username: "elizabeth",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940010/elizabeth-brown_vtpnti.jpg",
        },
        {
          _id: "d05165cf-1238-43b9-9258-989419a4a6be",
          firstName: "Maya",
          lastName: "Rodriguez",
          username: "maya",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692854443/maya-rodriguez_owufz2.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Sunil Ballani",
    username: "sunil_ballani",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693047191/post-8_m9isf8.jpg",
    type: "image",
    createdAt: new Date("2022-11-10"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Had the best time of my life!☮️",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
        {
          _id: "5a9e29e2-b9ac-4d05-b766-4a34cb0f3279",
          firstName: "Nisha",
          lastName: "Sharma",
          username: "nisha",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255323/adarsh-balika_qufkpu.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "5a9e29e2-b9ac-4d05-b766-4a34cb0f3279",
        firstName: "Nisha",
        lastName: "Sharma",
        username: "nisha",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255323/adarsh-balika_qufkpu.jpg",
        text: "Enjoy your time off!",
        createdAt: new Date("June 07 2023 09:09:09"),
      },
    ],
    fullName: "Smriti Jain",
    username: "smriti_13",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693047552/post-9_vilg0l.jpg",
    type: "image",
    createdAt: new Date("2023-06-17"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "The best corner of the house!🤌🏻",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
        {
          _id: "5a9e29e2-b9ac-4d05-b766-4a34cb0f3279",
          firstName: "Nisha",
          lastName: "Sharma",
          username: "nisha",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255323/adarsh-balika_qufkpu.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "5a9e29e2-b9ac-4d05-b766-4a34cb0f3279",
        firstName: "Nisha",
        lastName: "Sharma",
        username: "nisha",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255323/adarsh-balika_qufkpu.jpg",
        text: "So aesthetic!😍",
        createdAt: new Date("March 03 2023 15:09:09"),
      },
    ],
    fullName: "Smriti Jain",
    username: "smriti_13",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693047776/post-10_mtgufp.jpg",
    type: "image",
    createdAt: new Date("2023-03-16"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life in the fast lane with my two-wheeled beauty. 🚀🛵 #SuperbikeLove",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Aryan Desai",
    username: "aryan",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693048039/post-11_t2bn9f.jpg",
    type: "image",
    createdAt: new Date("2023-03-06"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "No pain, no gain!🏋🏻",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Aryan Desai",
    username: "aryan",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693048265/post-12_ebs9a5.jpg",
    type: "image",
    createdAt: new Date("2023-01-12"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Good vibes only!🪩",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Ballani",
        username: "sunil_ballani",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        text: "You look stunning!❤️",
        createdAt: new Date("April 13 2023 15:09:09"),
      },
      {
        _id: "bdbb4f25-6d8c-489d-9ee3-8a4e2152e012",
        firstName: "Elizabeth",
        lastName: "Brown",
        username: "elizabeth",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940010/elizabeth-brown_vtpnti.jpg",
        text: "You are glowing!❤️✨",
        createdAt: new Date("April 13 2023 17:50:09"),
      },
    ],
    fullName: "Maya Rodriguez",
    username: "maya",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/video/upload/v1693048645/post-13_jqdnoo.mp4",
    type: "video",
    createdAt: new Date("2023-04-12"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Bending, breathing, being. 🧘‍♀️🌞 #YogaEveryday",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "bdbb4f25-6d8c-489d-9ee3-8a4e2152e012",
          firstName: "Elizabeth",
          lastName: "Brown",
          username: "elizabeth",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940010/elizabeth-brown_vtpnti.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Maya Rodriguez",
    username: "maya",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/video/upload/v1693048776/post-14_buwx2t.mp4",
    type: "video",
    createdAt: new Date("2023-02-10"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Preserving today for a cleaner, greener tomorrow. 🌍♻️ #SustainableLiving",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "bdbb4f25-6d8c-489d-9ee3-8a4e2152e012",
          firstName: "Elizabeth",
          lastName: "Brown",
          username: "elizabeth",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940010/elizabeth-brown_vtpnti.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Olivia Sterling",
    username: "olivia",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693059903/post-15_pf6mvd.jpg",
    type: "image",
    createdAt: new Date("2023-06-30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "New video just dropped! Check it out on YouTube now! 🎥👀 #NewVideoAlert",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "bdbb4f25-6d8c-489d-9ee3-8a4e2152e012",
          firstName: "Elizabeth",
          lastName: "Brown",
          username: "elizabeth",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940010/elizabeth-brown_vtpnti.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Olivia Sterling",
    username: "olivia",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693060163/post-16_tkjcs6.jpg",
    type: "image",
    createdAt: new Date("2023-05-15"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "A typical sunday morning!☀️🍳",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Sunil",
        lastName: "Ballani",
        username: "sunil_ballani",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        text: "Looks yummy!😋",
        createdAt: new Date("April 13 2023 19:09:09"),
      },
    ],
    fullName: "James Thompson",
    username: "james",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693060457/post-17_lpmfjt.jpg",
    type: "image",
    createdAt: new Date("2023-04-13"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Wandering through the enchanting streets of Edinburgh, where history meets charm at every corner. 🏰🌆 #EdinburghExploration",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sunil",
          lastName: "Ballani",
          username: "sunil_ballani",
          avatarUrl:
            "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    fullName: "James Thompson",
    username: "james",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693060867/post-18_ezl1qe.jpg",
    type: "image",
    createdAt: new Date("2023-01-20"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Merry Christmas from london!🎄❄️",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Elizabeth Brown",
    username: "elizabeth",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693061264/post-19_frf7vf.jpg",
    type: "image",
    createdAt: new Date("2022-12-25"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Sweat, smile, repeat. Living for the burn and the gains. 💪😅 #FitnessLifestyle",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Darnell Harris",
    username: "darnell",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693061737/post-20_k6yayd.jpg",
    type: "image",
    createdAt: new Date("2023-01-01"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Guiding, motivating, and achieving gains together. That's the power of a dedicated fitness journey. 💪👊 #FitnessTraining",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Darnell Harris",
    username: "darnell",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/video/upload/v1693062575/post-21_ey6v0z.mp4",
    type: "video",
    createdAt: new Date("2023-01-31"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Dribbling through challenges, shooting for success. 🏀🔥 Check out my basketball highlights! #BallinOnCourt",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Jordan Williams",
    username: "jordan",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/video/upload/v1693062922/post-22_e6ggta.mp4",
    type: "video",
    createdAt: new Date("2023-07-07"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Finding stillness in the chaos, one breath at a time. 🧘‍♀️🌼 #MeditationMoments",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Monica Thompson",
    username: "monica",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693063143/post-23_bgq7ni.jpg",
    type: "image",
    createdAt: new Date("2023-05-22"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Connected through calmness, breathing as one. Sharing a meditative moment. 🧘‍♀️🧘‍♂️🌼 #HarmonyInMeditation",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Monica Thompson",
    username: "monica",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/video/upload/v1693063300/post-24_rakcsv.mp4",
    type: "video",
    createdAt: new Date("2023-01-10"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Lost in the timeless elegance of this place.🕌💫",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Anjali Sharma",
    username: "anjali",
    mediaUrl:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1693066189/post-25_boqplh.jpg",
    type: "image",
    createdAt: new Date("2022-09-26"),
    updatedAt: formatDate(),
  },
];
