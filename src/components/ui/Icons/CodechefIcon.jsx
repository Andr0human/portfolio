import Avatar from '../Avatar';

const CodechefIcon = () => {
  return (
    <Avatar
      src='/codechef.webp'
      alt='CodeChef'
      sx={{ width: 40, height: 40, '&:hover': { opacity: 0.8 } }}
    />
  );
};

export default CodechefIcon;
