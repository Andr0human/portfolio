import { Avatar } from '../Avatar';

const HackerRankIcon = () => {
  return (
    <Avatar
      src='/hackerrank.webp'
      alt='Hackerrank'
      sx={{ width: 40, height: 40, '&:hover': { opacity: 0.8 } }}
    />
  );
};

export default HackerRankIcon;
