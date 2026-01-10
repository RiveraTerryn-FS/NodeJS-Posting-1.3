// Task: Refactor the following code to use a promise chain instead of nested callbacks.
// The function should fetch a user, then their posts, and finally their comments.
function fetchUserData(userId) {
    if (!userId) {
        return Promise.reject(new Error("User ID not supplied"));
    }
    return Promise.resolve({ id: userId, name: "User " + userId });
}
function fetchUserPosts(userId) {
      if (!userId) {
        return Promise.reject(new Error("User ID not supplied"));
    }
    return Promise.resolve(['Post 1', 'Post 2', 'Post 3']);
}
function fetchPostComments(postId) {
    if (!postId) {
        return Promise.reject(new Error("Post ID not supplied"));
    }
    return Promise.resolve(['Comment 1', 'Comment 2']);
}
// Example usage (to be refactored):
fetchUserData(1)
    .then((user) => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
        return fetchPostComments(posts[0]);
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
