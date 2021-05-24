import React from 'react';
import { useForm } from 'react-hook-form';

const DataInput = () => {
    const { register, handleSubmit, reset} = useForm();


    
     const onSubmit = data => {
        console.log(data)

        fetch (`http://localhost:5000/addData`, {
            method:'POST',
            headers: {
                       'Content-Type': 'application/json'
                     },
            body: JSON.stringify(data)         

        })
        .then(res=> res.json())
        .then(success=>{
            if (success) {
                reset({ something: '' });
                alert('s')
              }
        })

  
  };

    return (
        <div className="App row justify-content-center ">
      <div className="col col-md-8 ">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
      
      <div className="row">
      <p className="col-md-1 justify-content-start">Name</p>
      <p className=" col-md-10 justify-content-start">Email</p>
      </div>
  <div className="form-group d-flex">
       
    <input type="name" className="form-control m-1" name="name" {...register('name', { required: true })}  placeholder="name"/>
    
    
    <input type="email" className="form-control m-1" name="email"  {...register('email', { required: true })} placeholder="sumon@gmail.com"/>
    
    <button type="submit"  className="btn btn-primary m-1">Add</button>
    </div>
    
</form>
      </div>
    </div>
    );
};

export default DataInput;