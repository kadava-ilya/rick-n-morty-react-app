import React from 'react'

const Pagination = ({ prev, next, onPrev, onNext, counter, pages }) => {

    const handlePrev = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className='pagination'>
                {/* {prev
                    ?
                    <li className='pagination-item'>
                        <button
                            className='pagination-link'
                            onClick={handlePrev}>Prev</button>
                    </li>
                    :
                    null} */}


                <li className={`${prev} ? pagination-item : not_active`}>
                    <button
                        className='pagination-link'
                        onClick={handlePrev}>Prev</button>
                </li>

                {`${counter} / ${pages}`}

                {/* {next
                    ? <li className='pagination-item'>
                        <button
                            className='pagination-link'
                            onClick={handleNext}>Next</button>
                    </li>
                    :
                    null} */}

                <li className={`${next} ? pagination-item : not_active`}>
                    <button
                        className='pagination-link'
                        onClick={handleNext}>Next</button>
                </li>

            </ul>
        </nav>
    )
}

export default Pagination
