const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
        id   : 1,
        title: 'title middleware 1',
        body : 'body middleware 1'
    },
    {
        id   : 2,
        title: 'title middleware 2',
        body : 'body middleware 2'
    },
    {
        id   : 3,
        title: 'title middleware 3',
        body : 'body middleware 3'
    }
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id);
};
