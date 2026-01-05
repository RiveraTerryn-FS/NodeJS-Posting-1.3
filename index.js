// Task: Refactor the following code to use a promise chain instead of nested callbacks.
// The function should fetch a user, then their posts, and finally their comments.
function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = { id: userId, name: 'User ' + userId };
            resolve(user);
        }, 1000);
    });
}
function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            resolve(posts);
        }, 1000);
    });
}
function fetchPostComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const comments = ['Comment 1', 'Comment 2'];
            resolve(comments);
        }, 1000);
     });   
}
// Example usage (to be refactored):
fetchUserData(1)
    .then((user) => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
        return fetchPostComments(posts[0].id);
    })
    .then((comments) => {
        console.log("Comments:", comments);
    })
    .catch((e) => {
        console.log("Error:", e);
    })
    .finally(() => {
        console.log("Finished");
    });
// Your task: Rewrite the above code using Promises and .then() chain.
// Bonus: Implement error handling in your promise chain.
