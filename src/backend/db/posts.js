import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
        _id: uuid(),
        content: 'Hey! This seems really exciting!',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'tanveerhazarika',
        createdAt: '2022-01-01',
        updatedAt: formatDate(),
        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-01',
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-02',
            },
        ],
    },
    {
        _id: uuid(),
        content:
            'This seems new.',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'tanveerhazarika',
        createdAt: '2022-01-03',
        updatedAt: formatDate(),
        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-03',
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-03',
            },
            {
                _id: uuid(),
                firstName: 'Bojack',
                lastName: 'Horseman',
                username: 'bojack',
                text: 'Whatever!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-03',
            },
        ],
    },
    {
        _id: uuid(),
        content: 'Come visit the UK',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'bjohnson',
        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-02-04',
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-02-06',
            },
            {
                _id: uuid(),
                firstName: 'Bojack',
                lastName: 'Horseman',
                username: 'bojack',
                text: 'Whatever!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-02-05',
            },
        ],
        createdAt: '2022-02-04',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: 'Have you seen John?',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'himadrishah',

        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-02'
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-02'
            },
        ],
        createdAt: '2022-01-02',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: 'Hey!',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'tanveerhazarika',

        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-03-03',
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-03-03',
            },
        ],
        createdAt: '2022-03-03',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: 'Hey! How are you doing?',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'belidenikhil',

        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-03-05'
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-03-04'
            },
        ],
        createdAt: '2022-03-03',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            'You would not believe what I just saw!',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'belidenikhil',

        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-03-06',
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-03-03',
            },
        ],
        createdAt: '2022-03-03',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: 'This is cool',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'himadrishah',

        comments: [
            {
                _id: uuid(),
                firstName: 'Shubham',
                lastName: 'Soni',
                username: 'shubhamsoni',
                text: 'Interesting',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-11',
            },
            {
                _id: uuid(),
                firstName: 'Soham',
                lastName: 'Shah',
                username: 'sohamshah',
                text: 'Wow!',
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: '2022-01-11',
            },
        ],
        createdAt: '2022-01-11',
        updatedAt: formatDate(),
    },
];
