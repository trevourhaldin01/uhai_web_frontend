import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import '../../styles/panel.css'

export default function Panel() {
    return (
        <div className="card border border-0 box-shadow mb-3" >
            <div className="card-body d-flex flex-row align-items-center ">
                <div className='rounded-circle bg-primary d-flex align-items-center justify-content-center p-4 me-3'>
                    <BusinessCenterIcon fontSize='large' />
                </div>
                <div className='d-flex flex-column'> 
                    <h3>99.9%</h3>
                    <p>Projects Done</p>
                </div>

            </div>

        </div>
    )
}