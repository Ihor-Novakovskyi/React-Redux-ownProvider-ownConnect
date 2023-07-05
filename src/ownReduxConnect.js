import { useContext } from "react"
import bindActionCreators from "./ownBindActionCreators";
function connect(mapStateProps, mapDispatchProps) {
    return (Component) => (props) => { 
        const newProps = { ...props };
        delete newProps.context;
        const store = useContext(props.context);
        const { getState, dispatch } = store;
        const actions = mapDispatchProps === 'function' ?
            mapDispatchProps(dispatch)
            :
            bindActionCreators(mapDispatchProps, dispatch);
        return (
            <Component { ...actions } { ...mapStateProps(getState())} {...newProps} />
        )
    }
}
export default connect;