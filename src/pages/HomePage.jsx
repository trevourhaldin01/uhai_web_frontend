import SidebarComponent from "../components/templates/Sidebar"
import Header from "../components/templates/Header"
import PanelList from "../components/panels/PanelList"
import Navbar from "../components/templates/Navbar"
import DataTable from "../components/tables/DataTable"


export default function HomePage() {
    return (
        <div className="row">
            <div className="col-sm-auto mx-0 pe-0">
                <SidebarComponent />
            </div>
            <div className="col ps-0 d-flex flex-column" style={{backgroundColor:"#f3f4f6"}}>
                <Navbar />
                <div className="m-3 d-flex flex-column">
                <PanelList />  
                <DataTable />
                </div>
                
                
                  
                  
                
            </div>
        </div>

    )
}