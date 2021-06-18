import classes from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from 'react-router-dom';
import { usersType } from '../../types/types';

let User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            {
               <div>
                    <span>
                        <div className={classes.photo}>
                            <NavLink to={'/Profile/' + user.id}>
                                <img alt="userphoto" src={user.photos.small !== null ? user.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} 
                                    onClick={() => {unfollow(user.id)}}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} 
                                    onClick={() => {follow(user.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            }
        </div>
    )
}
export default User; 
//types 
type PropsType = {
    user: usersType,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}