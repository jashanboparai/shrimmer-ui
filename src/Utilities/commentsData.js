const commentsData = [
  {
    id: 1,
    username: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    comment: "This is a great demo!",
    replies: [
      {
        id: 2,
        username: "Bob",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        comment: "I agree with Alice!",
        replies: [
          {
            id: 3,
            username: "Charlie",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            comment: "Me too!",
            replies: [
              {
                id: 4,
                username: "Diana",
                avatar: "https://randomuser.me/api/portraits/women/4.jpg",
                comment: "Let's build more features!",
                replies: [
                  {
                    id: 5,
                    username: "Ethan",
                    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
                    comment: "What features do you suggest?",
                    replies: [
                      {
                        id: 6,
                        username: "Fiona",
                        avatar:
                          "https://randomuser.me/api/portraits/women/6.jpg",
                        comment: "Maybe add notifications?",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    username: "George",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    comment: "How did you implement the shimmer effect?",
    replies: [
      {
        id: 8,
        username: "Helen",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        comment: "It's done using Tailwind CSS and React.",
        replies: [
          {
            id: 9,
            username: "Ian",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            comment: "Can you share the code?",
            replies: [
              {
                id: 10,
                username: "Jane",
                avatar: "https://randomuser.me/api/portraits/women/10.jpg",
                comment: "The code is available on GitHub.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    username: "Kevin",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    comment: "Is this project open source?",
    replies: [
      {
        id: 12,
        username: "Laura",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        comment: "Yes, you can contribute!",
        replies: [
          {
            id: 13,
            username: "Mike",
            avatar: "https://randomuser.me/api/portraits/men/13.jpg",
            comment: "Where can I find the repository?",
            replies: [
              {
                id: 14,
                username: "Nina",
                avatar: "https://randomuser.me/api/portraits/women/14.jpg",
                comment: "Check the project README for the link.",
                replies: [
                  {
                    id: 15,
                    username: "Oscar",
                    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
                    comment: "Thanks for the info!",
                    replies: [],
                  },
                  {
                    id: 16,
                    username: "wide",
                    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
                    comment: "Thanks!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default commentsData;
