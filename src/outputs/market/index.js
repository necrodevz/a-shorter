import React from 'react';

export default function Market() {
    return(
    <div>
        <CategoryFilter />
        <ProductFilter>
            {(products, errors)=>{
                if(!errors){
                    <ProductList products={products} />
                }
            }}
        </ProductFilter>
    </div>
    )
}