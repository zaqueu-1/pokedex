import React from 'react'
import "./pagination.css";


const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    
    const scrollUp = () => {
        const windowSize = window.matchMedia("(max-width: 1129px");
        
        if (windowSize.matches) {
        window.scrollTo(0, 0);
        }
    }

    let pages = [];

    for (let i = 1 ; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
    <div className='pagination'>
        {pages.map((page, index) => {
            return <button 
                        key={index} 
                        onClick={() => {setCurrentPage(page);scrollUp()}}
                        className={page === currentPage ? "active" : ""}>{page}</button>
        })}
    </div>
  )
}

export default Pagination;