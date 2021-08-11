import React, { useContext } from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

const Header: React.FC = () => { 
//adding logic inside component so changing implicit return brackets to curly brackets & explicit return
  const [user] = useContext(Context);
  console.log(user);
  
  return (
    <Wrapper >
      <Content >
        <Link to='/' >
          <LogoImg src={RMDBLogo} alt='rmbd-logo' />
        </Link>
        {user ? (
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to='/login'><span>Log In</span></Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
      </Content >
    </Wrapper >
  );
};

export default Header;
