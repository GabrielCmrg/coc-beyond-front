import LogoStyle from './LogoStyle';

type LogoProps = {
  color: string;
  fontSize: number;
};

function Logo({ color, fontSize }: LogoProps) {
  return (
    <LogoStyle color={color} fontSize={fontSize}>
      <div>CoC</div>
      <div>Beyond</div>
    </LogoStyle>
  );
}

Logo.defaultProps = {
  color: 'black',
  fontSize: 76,
};

export default Logo;
