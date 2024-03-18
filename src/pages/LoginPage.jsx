import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AdbRoundedIcon from '@mui/icons-material/AdbRounded';
import BugReportIcon from '@mui/icons-material/BugReport';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigateTo = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password==='admin' && email==='admin@portal.com' ) {
            navigateTo('/home')
        } else {
            setError('invalid credentials')
        }
        
      };
    
    return(
        <div className="container m-5 ">
        <div className="row ">
            
            <div className="col-md-4 order-md-2">
            <div className="login-form">
                <div className='d-flex justify-content-center'>
                    
                    <LockOutlinedIcon fontSize='large'/>
                    <h2 className="">Sign In</h2>
                </div>
                
                <form onSubmit={handleSubmit}>
                <div className="form-group input-group-lg pb-4">
                    <label className="pb-2">Email address:</label>
                    <input type="email" className="form-control " placeholder="Enter email" onChange={handleEmailChange}/>
                </div>
                <div className="form-group input-group-lg pb-4">
                    <label className="pb-2">Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={handlePasswordChange} />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <div className="d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
                </form>
            </div>
            </div>
            <div className="col-md-8 order-md-1">
                <div className="content-side pe-5">
                    <h2 className='pb-3'>Sign In!</h2>
                    <p>By signing in you will be authorized to access your services provided by the  Portal. 
                        Use is subject to but not limited to the policies and guidelines listed below in Policies and guidelines.
                    </p>
                    <div className='row'>
                        <div className='col-md-8 col-sm-12 d-flex flex-row align-items-center mb-3'>
                            <div className='me-3 rounded-circle bg-primary p-2 d-flex align-items-center '>
                                <AdbRoundedIcon fontSize='large' className='' />
                            </div>
                            
                            <p className=''>Watch out for sites or emails that pretend 
                                to be legitimate and ask for your Next Media Intranet ID and password.
                            </p>

                        </div>
                        <div className='col-md-8 col-sm-12 d-flex flex-row align-items-center mb-3'>
                            <div className='me-3 rounded-circle bg-primary p-2 d-flex align-items-center '>
                                <BugReportIcon fontSize='large' className=''/>
                            </div>
                            
                            <p className=''>
                                Report suspicious requests for your Next Media Intranet ID and password.
                            </p>
                            
                        </div>
                        <div className='col-md-8 col-sm-12 d-flex flex-row align-items-center mb-3'>
                            <div className='me-3 rounded-circle bg-primary p-2 d-flex align-items-center '>
                                <GppGoodIcon fontSize='large' className=''/>
                            </div>
                            
                            <p className=''>
                                Learn more about how to protect your account and computer.
                            </p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
    )
}