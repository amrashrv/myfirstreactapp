import { responseType, ResultCodeEnum } from "../api/api";
import { usersAPI } from "../api/usersAPI";
import { actions, follow, unfollow } from "./usersReducer"
jest.mock("../api/usersAPI");

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    usersAPIMock.follow.mockClear();
    usersAPIMock.unfollow.mockClear();
})

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: responseType = {
    data: {},
    messages: [],
    resultCode: ResultCodeEnum.success
}

usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test("follow thunk success", async () => {
    const thunk = follow(1);

    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3);

    expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1));
    expect(dispatchMock).toHaveBeenCalledWith(2, actions.followSuccess(1));
    expect(dispatchMock).toHaveBeenCalledWith(3, actions.toggleFollowingProgress(false, 1))
});

test("unfollow thunk success", async () => {
    const thunk = unfollow(1);

    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3);

    expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1));
    expect(dispatchMock).toHaveBeenCalledWith(2, actions.unfollowSuccess(1));
    expect(dispatchMock).toHaveBeenCalledWith(3, actions.toggleFollowingProgress(false, 1))
})