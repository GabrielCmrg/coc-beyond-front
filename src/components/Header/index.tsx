import HeaderStyle from './HeaderStyle';

import Logo from '../Logo';

import SideBySide from '../styles/SideBySide';

function Header() {
  return (
    <HeaderStyle>
      <Logo color="white" fontSize={26} />
      <SideBySide>
        <div>login</div>
        <div>Join US!</div>
      </SideBySide>
    </HeaderStyle>
  );
}

export default Header;
