import classes from './paginator.module.css';
import React, { useState } from 'react';
import classNames from 'classnames';

type propsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage?: number,
    onPageChanged?: (pageNumber: number) => void,
    portionSize?: number
}

let Paginator: React.FC<propsType> = ({totalItemsCount, pageSize, currentPage = 1, onPageChanged = x => x, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    //divide into portions
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber + portionSize;

    
    return (
            <div className={classNames(classes.paginator)}>
                {portionNumber > 1 && 
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
                {pages
                    //filter items to the  page size
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                    return (
                        <span className={classNames({[classes.selectedPage] : currentPage === page}, classes.pageNumber)} 
                            key={page}
                            onClick={(e) => { onPageChanged(page)}}>{page}</span>
                    );
                })}
                {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}

            </div>
        )
}
export default Paginator; 
