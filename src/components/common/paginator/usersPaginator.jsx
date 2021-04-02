import classes from './paginator.module.css';
import React from 'react';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let PagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i);
    }
    return (
            <div>
                {pages.map(page => {
                    return (
                        <span className={currentPage === page && classes.selectedPage}
                            onClick={(e) => { onPageChanged(page) }}>{page}</span>
                    );
                })}
            </div>
        )
}
export default Paginator; 
