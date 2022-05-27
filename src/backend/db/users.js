import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Tanveer",
    lastName: "Hazarika",
    username: "tanveerhazarika",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652917031/ti_social/johndoe_pb37ox.png",
    bio: "Hi!",
    site: "https://tanveerswebsite.netlify.app",
    followers: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Belide",
        username: "belidenikhil",
        avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652913261/ti_social/tjibrgteb7zwgbemjr4v.jpg",
      },
      {
        _id: uuid(),
        firstName: "Himadri",
        lastName: "Shah",
        username: "himadrishah",
        avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652916790/ti_social/janedoe_cwfzti.png",
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Boris",
        lastName: "Johnson",
        username: "bjohnson",
        avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652917031/ti_social/johndoe_pb37ox.png",
      },
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Belide",
        username: "belidenikhil",
        avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652913261/ti_social/tjibrgteb7zwgbemjr4v.jpg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Nikhil",
    lastName: "Belide",
    username: "belidenikhil",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652913261/ti_social/tjibrgteb7zwgbemjr4v.jpg",
    bio: "I am everywhere yet, no one knows who I am.",
    site: "https://doefamily.com",
    followers: [
      {
        _id: uuid(),
        username: "tanveerhazarika",
        firstName: "Tanveer",
        lastName: "Hazarika",
      },
      {
          _id: uuid(),
          username: "himadrishah",
          firstName: "Himadri",
          lastName: "Shah",
      },
    ],
    following: [
      {
        _id: uuid(),
        username: "tanveerhazarika",
        firstName: "Tanveer",
        lastName: "Hazarika",
      },
      {
          _id: uuid(),
          username: "himadrishah",
          firstName: "Himadri",
          lastName: "Shah",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Himadri",
    lastName: "Shah",
    username: "himadrishah",
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
  {
    _id: uuid(),
    firstName: "Soham",
    lastName: "Shah",
    username: "sohamshah",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652956862/ti_social/janedoe3_q49ol8.png",
    bio: "Hey, I'm Soham",
    site: "https://soham.netlify.app",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652956862/ti_social/johndoe2_zx6mvl.png",
    bio: "Hey, I'm Shubham",
    site: "https://shubham.netlify.app",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bojack",
    lastName: "Horseman",
    username: "bojack",
    password: "test123",
    avatarUrl: "https://res.cloudinary.com/ddroedz3j/image/upload/v1652957803/ti_social/bojack_yn896b.png",
    bio: "Yes, it's me and this is totally not a fake profile.",
    site: "https://horseman.network",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
