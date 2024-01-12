import React from 'react';

const List = ({ details }) => {
    return (
        <>
            {details.map((data) => {
                const { id, name, age, image } = data;
                return (
                    <div className="" key={id}>
                        <img src={image} alt={name} style={{width:'50%',height:'50%'}} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default List;
