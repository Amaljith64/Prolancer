import React from 'react'
import { Link } from "react-router-dom";


function Paginate({ pages, page, keyword = '', isAdmin = false }) {



    var sectionStyle = {
       
        backgroundColor:"red"
      };
      








    console.log(pages,'keyy')
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

    return (pages > 1 && (
        <div className="pagination-container margin-top-20 margin-bottom-20">
            <nav className="pagination">
                <ul>
                    {[...Array(pages).keys()].map((x) => (
                        <li >
                        <Link className={x+1==page ? 'ripple-effect current-page' :'ripple-effect' }
                        
                            key={x + 1}
                            to={!isAdmin ?
                                `?keyword=${keyword}&page=${x + 1}`
                                : `admin/productlist/?keyword=${keyword}&page=${x + 1}`
                            }
                        >
                            <span >{x + 1}</span>
                        </Link>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        </div>
    )
    )
}

export default Paginate
