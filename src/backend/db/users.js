import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profileAvatar:
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1687607558/cld-sample.jpg",
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
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1690958588/sexy-pic_tpdz49.jpg",
    about:
      "Tech enthusiast 📱💻 | Gaming aficionado 🎮🕹️ | Coffee lover ☕ | Aspiring coder 👨‍💻🌟 | Always learning 📚🌐",
    website: "https://github-finder-react-snowy.vercel.app/",
    followers: [],
    following: [
      {
        _id: "d05165bf-1238-43b9-9258-989469a4a6be",
        fullName: "Smriti Jain",
        username: "smriti_13",
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
      "https://res.cloudinary.com/dp6uypw0c/image/upload/v1687607534/samples/animals/cat.jpg",
    about:
      "Dreamer | Explorer | Nature lover 🌿🍃 | Seeking adventures ✨ | Spreading positivity 🌞💕",
    website: "https://house-marketplace-sunil.vercel.app/",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
