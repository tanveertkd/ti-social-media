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
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652916870/ti_social/janedoe2_fv22e8.png",
    bio: "Every balika should aspire to be me!",
    site: "https://adarshbalika.netlify.app",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "doejohn",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652913261/ti_social/tjibrgteb7zwgbemjr4v.jpg",
    bio: "I am everywhere yet, no one knows who I am.",
    site: "https://doefamily.com",
    followers: [
      {
        _id: uuid(),
        username: "adarshbalika",
        firstName: "Adarsh",
        lastName: "Balika",
      },
      {
          _id: uuid(),
          username: "doejane",
          firstName: "Jane",
          lastName: "Doe",
      },
    ],
    following: [
      {
        _id: uuid(),
        username: "adarshbalika",
        firstName: "Adarsh",
        lastName: "Balika",
      },
      {
          _id: uuid(),
          username: "doejane",
          firstName: "Jane",
          lastName: "Doe",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Doe",
    username: "doejane",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652916790/ti_social/janedoe_cwfzti.png",
    bio: "I am John Doe's sister.",
    site: "https://doefamily.com",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Boris",
    lastName: "Johnson",
    username: "bjohnson",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652917031/ti_social/johndoe_pb37ox.png",
    bio: "Yes, it's me and this is totally not a fake profile.",
    site: "https://theuk.uk",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
