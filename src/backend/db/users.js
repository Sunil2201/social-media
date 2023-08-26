import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "5a9e29e2-b9ac-4d05-b766-4a34cb0f3279",
    firstName: "Nisha",
    lastName: "Sharma",
    username: "nisha",
    password: "nisha1234",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255323/adarsh-balika_qufkpu.jpg",
    about:
      "Passionate traveler 🌍 | Book lover 📚 | Aspiring photographer 📷 | Living life to the fullest ✨",
    website: "https://book-bazaar-sunil.netlify.app/",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sunil",
    lastName: "Ballani",
    username: "sunil_ballani",
    password: "sunil123",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692952805/golden_grfyhh.jpg",
    about:
      "Life's lessons are scattered across the world, waiting to be embraced from every corner.",
    website: "https://github-finder-react-snowy.vercel.app/",
    followers: [],
    following: [
      {
        _id: "d05165bf-1238-43b9-9258-989469a4a6be",
        fullName: "Smriti Jain",
        username: "smriti_13",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255439/smriti-jain_h6m7gr.jpg",
      },
      {
        _id: "5a9e29e2-b9ac-4d05-b766-4a34cb0f3279",
        fullName: "Nisha Sharma",
        username: "nisha",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255323/adarsh-balika_qufkpu.jpg",
      },
      {
        _id: "d05165cf-1238-43b9-9258-989419a4a6be",
        fullName: "Maya Rodriguez",
        username: "maya",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692854443/maya-rodriguez_owufz2.jpg",
      },
      {
        _id: "e97a8ef3-3db7-4d5c-9c4e-7b3fc7d62c89",
        fullName: "James Thompson",
        username: "james",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692939704/james-thompson_nb3by1.jpg",
      },
      {
        _id: "bdbb4f25-6d8c-489d-9ee3-8a4e2152e012",
        fullName: "Elizabeth Brown",
        username: "elizabeth",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940010/elizabeth-brown_vtpnti.jpg",
      },
      {
        _id: "b1aee7fb-1dd2-41a3-a9b3-9c08d6bea93c",
        fullName: "Jordan Williams",
        username: "jordan",
        avatarUrl:
          "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692941321/jordan-williams_fujfie.jpg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "d05165bf-1238-43b9-9258-989469a4a6be",
    firstName: "Smriti",
    lastName: "Jain",
    username: "smriti_13",
    password: "smriti123",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1691255439/smriti-jain_h6m7gr.jpg",
    about:
      "Dreamer | Explorer | Nature lover 🌿🍃 | Seeking adventures ✨ | Spreading positivity 🌞💕",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "d05165bg-1238-43b9-9258-789469a4a6be",
    firstName: "Aryan",
    lastName: "Desai",
    username: "aryan",
    password: "aryan888",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692853371/aryan-desai_k0egtt.jpg",
    about:
      "Crafting Visual Stories: Weaving Moments into Captivating Pixels and Frames.",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "16/05/2022",
    updatedAt: formatDate(),
  },
  {
    _id: "d05165cf-1238-43b9-9258-989419a4a6be",
    firstName: "Maya",
    lastName: "Rodriguez",
    username: "maya",
    password: "maya0909",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692854443/maya-rodriguez_owufz2.jpg",
    about:
      "Always fluttering online, spreading connections and positivity with every interaction.",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "20/08/2022",
    updatedAt: formatDate(),
  },
  {
    _id: "d05165af-1238-48b9-9258-989419a4a6be",
    firstName: "Olivia",
    lastName: "Sterling",
    username: "olivia",
    password: "olivia@sterling8877",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692854931/olivia-sterling_ag9gwk.jpg",
    about:
      "Elegantly shaping trends, evoking inspiration, and fostering change with influence.",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "17/02/2023",
    updatedAt: formatDate(),
  },
  {
    _id: "e97a8ef3-3db7-4d5c-9c4e-7b3fc7d62c89",
    firstName: "James",
    lastName: "Thompson",
    username: "james",
    password: "james@thompson1212",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692939704/james-thompson_nb3by1.jpg",
    about: "A Brit with a cuppa, sharing life's anecdotes and adventures.",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "21/02/2023",
    updatedAt: formatDate(),
  },
  {
    _id: "bdbb4f25-6d8c-489d-9ee3-8a4e2152e012",
    firstName: "Elizabeth",
    lastName: "Brown",
    username: "elizabeth",
    password: "brownismycolor",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940010/elizabeth-brown_vtpnti.jpg",
    about: "You know I love a london boy!🥰",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "13/03/2023",
    updatedAt: formatDate(),
  },
  {
    _id: "7e57652a-746c-4612-9f49-7c2ec635fb35",
    firstName: "Darnell",
    lastName: "Harris",
    username: "darnell",
    password: "nigga@1212",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692940292/darnell-harris_wkesjn.jpg",
    about:
      "An avid fitness enthusiast, dedicated to health, strength, and well-being.",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "20/03/2023",
    updatedAt: formatDate(),
  },
  {
    _id: "b1aee7fb-1dd2-41a3-a9b3-9c08d6bea93c",
    firstName: "Jordan",
    lastName: "Williams",
    username: "jordan",
    password: "jordan@18",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692941321/jordan-williams_fujfie.jpg",
    about:
      "An ardent basketball enthusiast, finding exhilaration in every dribble and dunk.",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "25/03/2023",
    updatedAt: formatDate(),
  },
  {
    _id: "8dbac06a-184d-44b5-89de-efb592d6826a",
    firstName: "Monica",
    lastName: "Thompson",
    username: "monica",
    password: "itsssssmonicaaaa",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692943037/monica-thompson_pkk7fh.jpg",
    about:
      "Guiding individuals toward balance, strength, and mindfulness through transformative practices.",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "01/04/2023",
    updatedAt: formatDate(),
  },
  {
    _id: "",
    firstName: "Anjali",
    lastName: "Sharma",
    username: "anjali",
    password: "anjali123378",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1692946476/anjali-khanna_n3uc1b.jpg",
    about: "Never settle",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: "13/04/2023",
    updatedAt: formatDate(),
  },
];
