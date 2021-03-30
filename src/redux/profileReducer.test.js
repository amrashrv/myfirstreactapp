import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
let state = {//default object
    posts: [
        { id: 1, message: "First Post", likesCount: 5 },
        { id: 2, message: "Second Post", likesCount: 105 },
        { id: 3, message: "Third post", likesCount: 26 }
    ],
    
};
it('length of posts should be 4', () => {
    //1 default data
    let action = addPostActionCreator("it-kamasutra");
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
    expect(newState.posts[3].message).toBe("it-kamasutra")
})

it('last post should be It-Kamasutra', () => {
    //1 default data
    let action = addPostActionCreator("it-kamasutra");
    
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[3].message).toBe("it-kamasutra")
});
it('after deleting length of posts should be decremented', () => {
    //1 default data
    let action = deletePost(1);
    
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(2)
})
it("after deleting length of posts shouldn't be decremented if id is incorrect", () => {
    //1 default data
    let action = deletePost(1000);
    
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3)
})