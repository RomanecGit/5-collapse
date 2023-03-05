import {useState} from 'react';

function Collapse(props) {
    const [collapsed, setCollapsed] = useState(true); //по-умолчанию свернуто
    return (
        <>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? props.collapsedLabel : props.expandedLabel}
            </button>
            <div className={(collapsed ? "" : "show") + " card"}>
                {props.children}

            </div>
        </>

    );
}

Collapse.defaultProps = {
    collapsedLabel: "Развернуть",
    expandedLabel: "Свернуть"
}


export default Collapse;