import React, { useState } from 'react';
import { useEffect } from 'react';

const ManageBlogs = () => {
    const[manageBlogs, setManageBlogs] = useState();
    useEffect(() => {
        fetch("https://cryptic-cove-92678.herokuapp.com/getBlogs/")
        .then(result => result.json())
        .then(data => {
            setManageBlogs(data)
            console.log(data)
        })
    }, [])

    const handleData = (hello) => {
        // console.log("clicked")
        fetch(`https://cryptic-cove-92678.herokuapp.com/deleteBlog/${hello}`, {
            method : 'DELETE'
        })
        .then(result => result.json())
        .then(data => {
            console.log(data)
            window.location.reload();
        })

        .catch(err => console.log(err))

    }
    return (
        <div>
            <h6>{manageBlogs?.length}</h6>
           {
               manageBlogs?.map(each => 
                   <section key={each?._id}>
                    
                    <p>{each?.title}</p>
                    <button onClick={() => {handleData(each?._id)}}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                   </section>
               )
           }
        </div>
    );
};

export default ManageBlogs;