import classes from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let PagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i=1; i <= PagesCount; i++){
            pages.push(i);
        }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return (
                        <span className={props.currentPage === page && classes.selectedPage}
                            onClick={(e) => {props.onPageChanged(page) }}>{page}</span>
                    );
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={classes.photo}>
                            <NavLink to={'/Profile/' + user.id}>
                            <img alt="userphoto" src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => {props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => {props.follow(user.id) }}>Follow</button>}
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
                </div>)
            }
        </div>
    )
}
export default Users; 
