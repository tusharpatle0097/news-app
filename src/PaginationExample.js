import React, { useState } from 'react';

const dataArray = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
    // Add more items as needed
];

const PaginationExample = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataArray.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(dataArray.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <h1>Pagination Example</h1>
            {currentItems.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))}
            <div className="pagination">
                <button onClick={prevPage}>Previous</button>
                {Array.from({ length: Math.ceil(dataArray.length / itemsPerPage) }).map((_, index) => (
                    <button key={index} className={currentPage === index + 1 ? 'active' : ''} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export default PaginationExample;
