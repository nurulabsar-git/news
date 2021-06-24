import React from 'react';
import {useHistory} from 'react-router-dom';
const SubHomePage = (props) => {
    const {title, image, _id} = props.datum;  
    const history = useHistory();
    const handleClick = (id) =>{
      history.push(`/blog/${id}`)
    }
    return (
        <div onClick = {() => {handleClick(_id)}} className="grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
            <img className="col-start-2 col-span-5" src={image} alt="" style={{width: '200px', borderRadius: '5px'}} />
            <h1 className="col-start-2 col-span-4"> <strong>{title}</strong> </h1>
            <p>more.....</p>
            </div>
        </div>
    );
};

export default SubHomePage;