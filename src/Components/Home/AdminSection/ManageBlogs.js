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
            <p className="text-center"><strong>Please delete your post</strong></p>
           {
               manageBlogs?.map(each => 
                   <section key={each?._id} style={{display: 'flex', justifyContent: 'space-around', margin: '10px'}}>
                    
                    <p className="mr-0.5">{each?.title}</p>
                    <button onClick={() => {handleData(each?._id)}}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                   </section>
               )
           }
        </div>
    );
};

export default ManageBlogs;