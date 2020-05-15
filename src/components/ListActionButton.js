import React from 'react'
import Icon from '@material-ui/core/Icon';
export default function ListActionButton(props) {
    const {list} = props;

  const renderAddButton =(list)=>{

      const buttonText = list?"add another list":"add another card"

      return(
          <div>
              <Icon>add</Icon>
              <p>{buttonText}</p>
          </div>
      )
  }

    return renderAddButton()
}
