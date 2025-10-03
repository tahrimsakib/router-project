import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='max-w-11/12 mx-auto flex justify-center items-center mt-36'>
            <CircleLoader></CircleLoader>
        </div>
    );
};

export default Loading;