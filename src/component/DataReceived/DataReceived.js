import React, { useEffect, useState } from 'react';
import  './DataReceived.css'

const DataReceived = () => {
    const [data, setData]=useState([]);
    const [deleteData,setDeleteData]=useState([])
     console.log(deleteData);
    useEffect(() => {
        fetch(`http://localhost:5000/redData`)
        .then(res=> res.json())
        .then(result => {setData(result)});
    },[data])
    
    
                
    const deleteDatas = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => setDeleteData(result))

        }



    return (
       
        <div className="container mt-5">
        <table id='data' className="">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => (
                           <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => deleteDatas(item._id)} className="btn btn-primary">Delate</button></td>
                            <td/>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    
    );
};

export default DataReceived;