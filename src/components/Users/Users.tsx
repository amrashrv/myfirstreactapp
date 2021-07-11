import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType, requestUsers } from '../../redux/usersReducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/usersSelectors';
import Paginator from '../common/paginator/usersPaginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';
type PropsType = {

}
export const Users: React.FC<PropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const users = useSelector(getUsers);
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    })
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId));
    }

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />)
                }
            </div>
        </div>
    )
}
