import React from 'react';
import  './CheckBox.css'

const CheckBox = () => {

    const Data = [
        {
            moduleName: "Configuration",
            activityName: "Item Category",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Configuration",
            activityName: "Item",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Configuration",
            activityName: "Party",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Configuration",
            activityName: "Profile",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Configuration",
            activityName: "Bank Account",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Configuration",
            activityName: "Change Password",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Purchase",
            activityName: "Purchase",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Purchase",
            activityName: "Due Payment",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Sales",
            activityName: "Sales",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Sales",
            activityName: "Due Receive",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Accounts",
            activityName: "Voucher",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        }
        
        
    
    ]


    // handleCheckChieldElement = (event) => {
    //     let Data = this.state.Data
    //     Data.forEach(Data => {
    //       if (Data.value === event.target.value)
    //         Data.isChecked =  event.target.checked
    //       })
    //     this.setState({Data: Data})
    //  }


  
    return (
        <div>
            
            <table id='Checkbox' className="mt-5">
        <thead>
        <tr>
            <th>Module Name</th>
            <th>Activity Name</th>
            <th>Create</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>approve</th>
            
        </tr>
        </thead>
        <tbody>
            {
                Data.map((item) => (
                       <tr key={item._id}>
                        <td>{item.moduleName}</td>
                        <td>{item.activityName}</td>
                        <td>{<input type="checkbox"
                   
                            className="form-check-input"
                              />}</td>

                        <td>{<input type="checkbox"

                            className="form-check-input"
                              />}</td>

                        <td>{<input type="checkbox"

                            className="form-check-input"
                              />}</td>

                        <td>{<input type="checkbox"

                            className="form-check-input"
                              />}</td>

                        <td>{<input type="checkbox"

                            className="form-check-input"
                              />}</td>
    
                    </tr>
                ))
            }
        </tbody>
    </table>
        </div>
    );
   };
        



export default CheckBox;