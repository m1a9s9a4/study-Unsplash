import React from 'react';
import {makeStyles} from '@material-ui/styles';

type Props = {
  index: number;
  imageSrc: string;
  title: string;
}

const makeClasses = makeStyles({

})

const Item: React.FC<Props> = ({index, imageSrc, title}) => {
  const classes = makeClasses();
  return (
    <div className="item" key={index}>
      <img src={imageSrc} />
      <p className="title">{title}</p>
    </div>
  )
}

export default Item;