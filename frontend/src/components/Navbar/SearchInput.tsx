import React from 'react';
import {Form, FormControl} from "react-bootstrap";

type Props = {
  handleKeyup: any;
}

const SearchInput: React.FC<Props> = ({handleKeyup}) => {
  return (
    <Form>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyUp={handleKeyup} />
    </Form>
  )
}

export default SearchInput;