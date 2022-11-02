import LogoStyle from './LogoStyle';

type LogoProps = {
  color: string;
};

function Logo({ color }: LogoProps) {
  return (
    <LogoStyle color={color}>
      <div>CoC</div>
      <div>Beyond</div>
    </LogoStyle>
  );
}

Logo.defaultProps = {
  color: 'black',
};

export default Logo;
