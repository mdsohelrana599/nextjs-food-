import FoodCardSkeleton from '@/components/skeleton/FoodCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {[...Array(16)].map((_, index)=> <FoodCardSkeleton key={index}></FoodCardSkeleton>)}
        </div>
    );
};

export default loading;