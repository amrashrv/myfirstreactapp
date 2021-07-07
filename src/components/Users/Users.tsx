import React from 'react';
import { FilterType } from '../../redux/usersReducer';
import { usersType } from '../../types/types';
import Paginator from '../common/paginator/usersPaginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';


type UsersType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<usersType>,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    onFilterChanged: (filter: FilterType) => void
}

let Users: React.FC<UsersType> = ({onFilterChanged, currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div>
            <UsersSearchForm  onFilterChanged={onFilterChanged}/>
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
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />)

                }
            </div>


        </div>
    )
}

export default Users;
