import { Avatar } from '../Avatar';

const LeetcodeIcon = () => {
  return (
    <Avatar
      src='/leetcode.webp'
      alt='LeetCode'
      sx={{ width: 40, height: 40, '&:hover': { opacity: 0.8 } }}
    />
  );
};

export default LeetcodeIcon;
