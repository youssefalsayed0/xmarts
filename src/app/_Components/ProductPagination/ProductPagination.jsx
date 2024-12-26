import React from 'react'

export default function ProductPagination() {
  return (
<>

<section className='pagg '>
                    <div className="container">
                    <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn pb-5">
                            <li className="active">
                                <a className="pagination-link">1</a>
                            </li>
                            <li className>
                                <a className="pagination-link animate-hover-btn">2</a>
                            </li>
                            <li className>
                                <a className="pagination-link animate-hover-btn">3</a>
                            </li>
                            <li className>
                                <a className="pagination-link animate-hover-btn">4</a>
                            </li>
                            <li>
                                <a className="pagination-link animate-hover-btn">
                                    <span className="icon icon-arrow-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                   </section>
</>
  )
}
