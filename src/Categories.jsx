// Categories.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CategoriesWrapper = styled.div`
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Category = styled.div`
    position: relative;
    padding: 10px;
    cursor: pointer;

    &:hover {
        color: #2874f0;
        border-bottom: 2px solid #2874f0;
    }
`;

const SubcategoriesDropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.display ? 'block' : 'none')};
    z-index: 1;
`;

const Subcategory = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;

const Categories = () => {
    const [showSubcategories, setShowSubcategories] = useState(null);

    const categories = [
        {
            name: 'All',
            subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
        },
        {
            name: 'Electronics',
            subcategories: ['Mobiles', 'Laptops', 'Headphones'],
        },
        {
            name: 'Men',
            subcategories: ['Clothing', 'Footwear', 'Accessories'],
        },
        {
            name: 'Women',
            subcategories: ['Clothing', 'Footwear', 'Accessories'],
        },
        {
            name: 'Home',
            subcategories: ['Furniture', 'Decor', 'Kitchen'],
        },
    ];

    const handleMouseEnter = (index) => {
        setShowSubcategories(index);
    };

    const handleMouseLeave = () => {
        setShowSubcategories(null);
    };

    return (
        <CategoriesWrapper>
            {categories.map((category, index) => (
                <Category
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    {category.name}
                    <SubcategoriesDropdown display={showSubcategories === index}>
                        {category.subcategories.map((subcategory, subIndex) => (
                            <Subcategory key={subIndex}>{subcategory}</Subcategory>
                        ))}
                    </SubcategoriesDropdown>
                </Category>
            ))}
        </CategoriesWrapper>
    );
};

export default Categories;
