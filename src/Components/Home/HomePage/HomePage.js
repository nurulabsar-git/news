import React, { useEffect, useState } from 'react';
import SubHomePage from './SubHomePage';

const HomePage = () => {
  
 const [homeComponent, setHomeComponent] = useState([]);
useEffect(() => {
   fetch("https://cryptic-cove-92678.herokuapp.com/getBlogs")
   .then(result => result.json())
   .then(data => setHomeComponent(data))
}, [])

    return (
        <div className="mx-6 mt-1">
            
            {
                homeComponent?.map(datum => <SubHomePage key={datum._id} datum= {datum}></SubHomePage>)
            }
           
        </div>
    );
};

export default HomePage;