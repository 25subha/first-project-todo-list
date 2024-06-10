import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const FormController = () => {
    let [fromData, setFromData] = useState({
        uname:"",
        uemail:"",
        upassword:"",
        unumber:"",
        umessage:"",
        index:""
    });

    let [userData, setUserData] = useState([]);


    let getValue = (event) => {
        let oldData = {...fromData}
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldData[inputName] = inputValue;
        setFromData(oldData);
      
    } 

    let hendelSubmit = (event) => {
        let currentUserFromData = {
            uname:fromData.uname,
            uemail: fromData.uemail,
            upassword: fromData.upassword,
            unumber: fromData.unumber,
            umessage:fromData.umessage,
        }
        if(fromData.index === "") {

        let checkFilterUser = userData.filter((v) => v.uemail == fromData.uemail || v.unumber == fromData.unumber)
        if (checkFilterUser.length == 1) {
            toast.error("Email or Phone already Exists...")
        } else {
            let olduserData = [...userData,currentUserFromData]
        console.log(olduserData)
        
        setUserData(olduserData)
        setFromData({
            uname:"",
            uemail:"",
            upassword:"",
            unumber:"",
            umessage:"",
            index:"",
        })

        } 
        } else {
            let editindex = fromData.index;
            let oldData = userData;

            let checkFilterUser = userData.filter((v,i) => (v.uemail == fromData.uemail || v.unumber == fromData.unumber)&& i != editindex);

            if (checkFilterUser.length == 0) {
            oldData[editindex]['uname'] = fromData.uname
            oldData[editindex]['uemail'] = fromData.uemail
            oldData[editindex]['upassword'] = fromData.upassword
            oldData[editindex]['unumber'] = fromData.unumber
            oldData[editindex]['umessage'] = fromData.umessage
            setUserData(oldData);
            setFromData({
                uname:"",
                uemail:"",
                upassword:"",
                unumber:"",
                umessage:"",
                index:"",
            })
        } else {
            toast.error("Email or Phone already Exists...")
        }
    }

        
        event.preventDefault()   
     }
     
     let deleteRow = (indexName) => {
        let filterafterDelet = userData.filter((v,i) => i != indexName);
        setUserData(filterafterDelet)
        console.log(filterafterDelet)
     }

     let editRow = (indexName) => {
        let editData = userData.filter((v,i) => i == indexName)[0];
        editData['index']= indexName;
        // console.log(editData)
        setFromData(editData);
     }


  return (
    <div className='bg-violet-100 w-[full] p-12'>
            <ToastContainer />

        <div className='flex justify-between items-center'>
            <div className=' '>
                <div className='bg-gray-200 w-[360px] p-8 rounded shadow-md'>
                    
                    <form onSubmit={hendelSubmit} className='flex flex-col gap-5' >
                        <div  className='flex flex-col gap-2 '> 
                            <label >userName:</label>
                            <input type="text" name='uname' value={fromData.uname} onChange={getValue}/>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label >email:</label>
                            <input type="email" name='uemail' value={fromData.uemail} onChange={getValue}/>
                        </div>
                        <div  className='flex flex-col gap-2'>
                            <label >password:</label>
                            <input type="password" name='upassword' value={fromData.upassword} onChange={getValue}/>
                        </div>
                        <div  className='flex flex-col gap-2'>
                            <label >Phone Number:</label>
                            <input type="number" name='unumber' value={fromData.unumber} onChange={getValue}/>
                        </div>
                        <div  className='flex flex-col gap-2'>
                            <label >Message:</label>
                            <textarea name="umessage" id="" rows="3" className='p-2 border-[1px] border-black rounded-sm' value={fromData.umessage} onChange={getValue}/>
                        </div>
                        <div>
                            <button className='bg-blue-600 text-white px-2 rounded' type="submit" >
                                {
                                fromData.index !== "" ? "Update" : "Save"
                            }
                            </button>
                        </div>
                       
                    </form>
                   
                </div>
            </div>
                     <table className='w-[60%] border-[2px] border-black p-[1px] h-[16px]'>
                       <thead className='bg-[#7893b8]'>
                       <tr >
                            <th className='border-[1px] border-black'>Id</th>
                            <th className='border-[1px] border-black'>Name</th>
                            <th className='border-[1px] border-black'>Email</th>
                            <th className='border-[1px] border-black'>Phone</th>
                            <th className='border-[1px] border-black'>Message</th>
                            <th className='border-[1px] border-black'>Action</th>
                        </tr>
                       </thead>
                       <tbody className='bg-gray-300'>
                        {userData.length >= 1 ?
                        userData.map((obj,ind) => {
                            return(
                                <tr key={ind}>
                                <td className='border-[1px] border-black p-[8px] '>{ind + 1}</td>
                                <td className='border-[1px] border-black p-2'>{obj.uname}</td>
                                <td className='border-[1px] border-black p-2'>{obj.uemail}</td>
                                <td className='border-[1px] border-black p-2'>{obj.unumber}</td>
                                <td className='border-[1px] border-black p-2'>{obj.umessage}</td>
                                <td className='border-[1px] border-black p-2'>
                                    <button className='border-[2px] border-black rounded-md mx-4 bg-gray-600 text-white' onClick={()=> deleteRow(ind)}>Delete</button>
                                    <button className='border-[2px] border-black rounded-md mx-4 bg-gray-600 text-white' onClick={() => editRow(ind)}>Update</button>
                                </td>
                            </tr>
                            )
                        })
                      
                        :
                        <tr>
                            <td colSpan={6} className='px-4'> No record found</td>
                        </tr>
                        }
                       </tbody>
                    </table>               
        </div>
    </div>
  )
}

export default FormController;