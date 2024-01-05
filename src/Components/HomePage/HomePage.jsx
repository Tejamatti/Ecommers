import React,{useState} from 'react'
import Category from '../Category/Category';


const HomePage = () => {
    const [openCategory, setOpenCategory] = useState(null);


    const categories = {
        "Electronics": ["Mobiles", "Laptops", "Cameras"],
        "Fashion": ["Men", "Women", "Kids"],
        "Home & Kitchen": ["Furniture", "Decor", "Kitchen Appliances"]
    };
  return (
    <div className='header'>
        {Object.entries(categories).map(([name, subcategories]) => (
            <Category key={name} name={name} subcategories={subcategories} openCategory={openCategory} setOpenCategory={setOpenCategory} />
        ))}
    </div>
  )
}

export default HomePage