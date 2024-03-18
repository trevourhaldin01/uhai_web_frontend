import Panel from "./Panel"

export default function PanelList() {

    return (
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <Panel />
            </div>
            <div className="col-md-4 col-sm-12">
                <Panel />
            </div>
            <div className="col-md-4 col-sm-12">
                <Panel />
            </div>

        </div>
    )
}