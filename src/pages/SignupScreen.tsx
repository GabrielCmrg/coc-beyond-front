import PageContainer from '../components/styles/PageContainer';
import SideImage from '../components/styles/SideImage';
import SideForm from '../components/styles/SideForm';
import Logo from '../components/Logo';

import image from '../assets/cthulhu_wants_you.jpeg';

function SignupScreen() {
  return (
    <PageContainer>
      <SideImage src={image} alt="Cthulhu wants YOU" />
      <SideForm>
        <Logo />
      </SideForm>
    </PageContainer>
  );
}

export default SignupScreen;
