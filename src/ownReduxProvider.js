import { createContext } from "react";
import { useState, useMemo } from "react";
const context = createContext();
const { Provider } = context;

function ProvideR(props) { 
    console.log(props)
    const { getState, subscribe} = props.store;
    const [data, setData] = useState(getState())
    const Component = props.children;
    useMemo(() => subscribe(() => setData(getState())), []);
    const Components = Array.isArray(props.children) ? 
        props.children.map((El) => {
            return <El.type context={ context } {...El.props} />
        }) 
        :
        <Component.type context={ context } {...props.children.props} />
    return (
        <Provider value={props.store}>
            {Components}
        </Provider>
    )
}
export default ProvideR;