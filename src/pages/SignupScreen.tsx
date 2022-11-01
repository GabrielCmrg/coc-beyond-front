import PageContainer from '../components/styles/PageContainer';
import SideImage from '../components/styles/SideImage';

import image from '../assets/cthulhu_wants_you.jpeg';

function SignupScreen() {
  return (
    <PageContainer>
      <SideImage src={image} alt="Cthulhu wants YOU" />
    </PageContainer>
  );
}

export default SignupScreen;
