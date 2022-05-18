import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
        _id: uuid(),
        content:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'adarshbalika',
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
            },
        ],
    },
    {
        _id: uuid(),
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident quo voluptatem quas velit autem esse. Facere non optio quisquam ratione! Iste sint incidunt ab tempore optio cumque laborum temporibus.',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'adarshbalika',
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
            },
        ],
        createdAt: '2022-02-04',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            'Have you seen John?',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'doejane',

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
            },
        ],
        createdAt: '2022-01-02',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            'Hey!',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'doejohn',

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
            },
        ],
        createdAt: '2022-03-03',
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            'This is cool',
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'doejane',

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
            },
        ],
        createdAt: '2022-01-11',
        updatedAt: formatDate(),
    },
];
