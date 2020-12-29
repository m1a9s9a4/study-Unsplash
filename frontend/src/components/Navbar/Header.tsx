import React from 'react';
import Icon from '../../icon.svg'
import {makeStyles} from '@material-ui/styles'
import AddImageBtn from "./AddImageBtn";
import SearchInput from "./SearchInput";
import {Navbar} from 'react-bootstrap';

type Props = {
  handleSearch: () => void;
  handleKeyup: any;
}

const makeClasses = makeStyles({
  header: {
    height: '50px',
    background: '#fff',
  },
  img: {
    height: '20px',
  }
})

const handleClick = () => {

}

const Header: React.FC<Props> = ({handleSearch, handleKeyup}) => {
  const classes = makeClasses();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        {/*<Icon />*/}
      </Navbar.Brand>
      <SearchInput handleKeyup={handleKeyup} />
      <AddImageBtn text="add Image" handleClick={handleClick}/>
    </Navbar>
  );
}

export default Header;