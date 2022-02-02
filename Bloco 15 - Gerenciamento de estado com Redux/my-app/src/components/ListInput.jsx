import React from 'react';
import { connect } from 'react-redux'
import { InputList, ChangeInputList } from '../action/action';

function ListInput(props) {

   const listInput = () => {
       const list = props.list
       return list.map((item) => (
           <div>
               <h3>{item}</h3>
           </div>
       ))
   }

  return (
    <div>

        <input type="text"  onChange={props.inputList}></input>
        <button type="button" onClick={props.inputClick}>AddList</button>

        <div>
            {listInput()}
        </div>

      </div>
  )
}


const mapStateToProps = (state) => ({
    list: state.input.list
})

const mapDispatchToProps = (dispatch) => ({
    inputClick: () => {
        const action = InputList()
        dispatch(action)
    },
    inputList: (e) => {
        const action = ChangeInputList(e)
        dispatch(action)
    }
    
})


export default connect(mapStateToProps, mapDispatchToProps)(ListInput)



