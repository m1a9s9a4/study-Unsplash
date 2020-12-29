import * as React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  text: string;
  handleClick: () => void;
}

const AddImageBtn: React.FC<Props> = ({text, handleClick}) => {
  return (
    <Button variant="primary" onClick={handleClick}>
      {text}
    </Button>
  );
}

export default AddImageBtn;