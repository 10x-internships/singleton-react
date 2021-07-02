import { Lock, Flame, Puzzle, Team, User, Mail } from '../../../components/Icon';
import { palette } from '../../../styles/GlobalStyle';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'lock':
      return <Lock color={palette.secondary.main} />;
    case 'flame':
      return <Flame color={palette.accent.orangeLight} />;
    case 'puzzle':
      return <Puzzle color={palette.primary.main} />;
    case 'team':
      return <Team color={palette.accent.blue} />;
    case 'user':
      return <User color={palette.accent.yellow} />;
    case 'email':
      return <Mail color={palette.accent.orange} />;
    default:
      break;
  }
};

export default getIcon;
