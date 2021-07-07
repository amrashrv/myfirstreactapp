import usersReducer, { actions, initialStateType } from "./usersReducer";

let  state: initialStateType;
beforeEach(() => {
    state = {
        users: [{
            id: 0,
            name: "Amir1",
            followed: false,
            photos: {small: null, large: null},
            status: "status0"
        },
        {
            id: 1,
            name: "Amir2",
            followed: false,
            photos: {small: null, large: null},
            status: "status1"
        },
        {
            id: 2,
            name: "Amir3",
            followed: true,
            photos: {small: null, large: null},
            status: "status2"
        }],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 2,
        isFetching: false,
        followingInProgress: [] ,
    }
    }
);
test("follow success", () => {
    const newState =  usersReducer(state, actions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})
test("unfollow success", () => {
    const newState = usersReducer(state, actions.unfollowSuccess(2))
    expect(newState.users[2].followed).toBeFalsy();
})