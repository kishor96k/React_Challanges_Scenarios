import React from 'react';

const List = ({ items, removeItem, editItem }) => {
    return (
        <>
            <div>
                {items.map((item) => {
                    const { id, title } = item;
                    return (
                        <div key={id}>
                            <p>{title}</p>
                            <div>
                                {/* Fix: Change onEdit to editItem */}
                                <button className='btn btn-warning p-4 m-4' onClick={() => editItem(id)}>Edit</button>
                                {/* Fix: Change onDelete to removeItem */}
                                <button className='btn btn-danger p-4  m-4' onClick={() => removeItem(id)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default List;
