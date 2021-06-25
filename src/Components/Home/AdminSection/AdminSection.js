import axios from 'axios';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './AdminSection.css'
const AdminSection = () => {
  const[addImage, setAddImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) =>{
    e.target.reset();
    const eventData = {
        title: data.title,
        content: data.content,
        image: addImage
    };
   

    const url = `https://cryptic-cove-92678.herokuapp.com/addBlogs`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })
    .then(res => console.log("My server response"))

  }

  const handleDataUpload = event => {
    const imgData = new FormData();
    imgData.set('key','6c7f482a15154fb8dcecca03f4f610dd');
    imgData.append('image', event.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imgData)
    .then(function(response){
        console.log(response.data.data.display_url);
        setAddImage(response.data.data.display_url);
    })
    .catch(function(error){
        console.log(error)
    });
}

    return (
        <div>
            <h4 className="text-center"> <strong>Please Post Your Blogs</strong> </h4>
            <form onSubmit={handleSubmit(onSubmit)} className="admin-section">
                <textarea className="resize border rounded border-double border-4 rounded-md" type="text" name="title" {...register("title", {required: true})} placeholder="Title*"/> <br/>
                <textarea className="resize border rounded border-double border-4 border-light-blue-500" type="text" name="content" {...register("content", {required: true})} placeholder="Blog Content*"/><br/>
               <input type="file" onChange={handleDataUpload}/>
               <input type="submit" />
            </form>
        </div>
    );
};

export default AdminSection;