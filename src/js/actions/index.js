export const selectUser = (user) => {
    console.log("You clicked on user: ", user.title);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};