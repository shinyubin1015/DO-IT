import '../css/Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='project-header'>
      <div className='header-inner'>
        <div className='logo'>
          <Link to={'/'}>
            <img src='./images/logo.png' alt='로고'/>
          </Link>
        </div>
        <nav>
          <ul>
            <li>멘토/멘티</li>
            <Link to={'/community'}><li>커뮤니티</li></Link>
            <li>캘린더</li>
            <li>마이페이지</li>
          </ul>
        </nav>
        <div className='user'>
          <Link to={"/Login"}><a href='#' className='login'>로그인</a></Link>/
          <Link to={"/memberinput"}><a href='#' className='new-user'>회원가입</a></Link>
        </div>
        </div>
    </header>
    );
}

export default Header;