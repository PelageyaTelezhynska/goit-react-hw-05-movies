import { StyledAppBar, NavItem, StyledHeader } from './AppBar.styled';

const links = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <StyledHeader>
      <StyledAppBar>
        {links.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </StyledAppBar>
    </StyledHeader>
  );
};
