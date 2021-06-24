import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
    const {blogId} = useParams();
    const [blogDetails, setBlogDetails] = useState();

    useEffect(()=> {
        fetch(`https://cryptic-cove-92678.herokuapp.com/getCertainBlog/${blogId}`)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            setBlogDetails(data)
        })
        .catch(err => console.log(err))
        
}, [blogId])

    return (
        <div className="mx-3 p-6">
            
            <div>
                <img src={blogDetails?.image} alt="" style={{width: '50%', borderRadius: '5px'}}/>
                <p>{blogDetails?.title}</p>
                <p className="text-justify">{blogDetails?.content}</p>
            </div>

        </div>
    );
};

export default ShowDetails;