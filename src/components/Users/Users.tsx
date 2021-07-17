import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { FilterType, requestUsers } from '../../redux/usersReducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/usersSelectors';
import Paginator from '../common/paginator/usersPaginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';
import * as queryString from 'querystring'
type PropsType = {

}
type QueryParamsType = {
    term?: string;
    page?: string;
    friend?: string;
};

export const Users: React.FC<PropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const users = useSelector(getUsers);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();
    const history = useHistory();

   

    useEffect(() => {
        
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType;
        let actualPage = currentPage 
        let actualFilter = filter
        if (!!parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        switch(parsed.friend){
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break;
            case 'true': 
                actualFilter = {...actualFilter, friend: true}
                break;
            case 'false': 
                actualFilter = {...actualFilter, friend: false}
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    },[])

    useEffect(() => {
        const query: QueryParamsType = {}
        if(!!filter.term) query.term = filter.term;
        if(filter.friend !== null) query.friend = String(filter.friend);
        if(currentPage !== 1) query.page = String(currentPage);

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    },[history, filter, currentPage]);

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
