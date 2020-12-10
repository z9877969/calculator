import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {changeDisplay} from '../../redux/display/actionDisplay';

const Screen = ({handlerValue, value, dispValue, btnDigit, changeDisplay}) => {

    useEffect(() => {
        btnDigit !== null && changeDisplay(btnDigit)
    }, [btnDigit])


    return (
        <form>
            <input type="number" value={dispValue} onChange={handlerValue}/>
        </form>
    )
}

const mapStateToProps = state => ({
    dispValue: state.display,
    btnDigit: state.btns.value
});

const mapDispatchToProps = dispatch => ({
    changeDisplay: (value) => dispatch(changeDisplay(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen);


// const Connect = function (mapStateToProps, mapDispatchToProps) {

//     const {...mapStateToProps} = mapStateToProps;
//     const {changeDisplay} = mapDispatchToProps;

//     return function (WrappedComponent) {
//         return <WrappedComponent {...mapStateToProps} {...mapDispatchToProps, changeDisplay}/>
//     }
// }