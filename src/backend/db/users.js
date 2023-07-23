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
    profileAvatar: "https://res.cloudinary.com/dp6uypw0c/image/upload/v1687607556/samples/smile.jpg",
    followers: [],
    following: [
      { _id: uuid(), fullName: "Smriti Jain", username: "smriti_13" },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Smriti",
    lastName: "Jain",
    username: "smriti_13",
    password: "smriti123",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
