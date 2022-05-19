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
    bio: "I am everywhere yet, no one knows who I am.",
    site: "https://doefamily.com",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Doe",
    username: "doejane",
    password: "test123",
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
    bio: "Yes, it's me and this is totally not a fake profile.",
    site: "https://theuk.uk",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
