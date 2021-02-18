import classes from './Users.module.css';
import React from 'react';

let Users = (props) => {
    if (props.users.length === 0){
        props.setUsers([
            { id: 1, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', followed: true, fullName: 'Amir Ashirov', status: 'I am a boss', location: { city: 'Krasnodar', country: 'Russia' } },
            { id: 2, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', followed: false, fullName: 'Ivan Ivanov', status: 'I am a boss 2', location: { city: 'Maykop', country: 'Russia' } },
            { id: 3, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', followed: true, fullName: 'Petr Petrov', status: 'I am a boss 3', location: { city: 'Moscow', country: 'Russia' } },
            { id: 4, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', followed: false, fullName: 'Alexadndr Alexandrov', status: 'I am a boss 4', location: { city: 'Saint-Petersburg', country: 'Russia' }}]
        );
    }
    
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={classes.photo}>
                            <img src={user.photoUrl} />
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;