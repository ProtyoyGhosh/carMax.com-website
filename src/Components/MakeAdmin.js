import React from 'react';
import { useHistory } from 'react-router';


const MakeAdmin = () => {
    const history = useHistory();

    return (
        <div>
            <h3 className='text-center mt-2'>Create an Admin</h3>
            <div className='text-center mt-3'>
                <input className='p-2 m-2' placeholder='enter an email'></input>
                <br />
                <button onClick={() => {
                    alert('Congratulations admin created!!')
                    history.push('/login')
                }} className='btn btn-primary'>Create</button>
            </div>
        </div>
    );
};

export default MakeAdmin;