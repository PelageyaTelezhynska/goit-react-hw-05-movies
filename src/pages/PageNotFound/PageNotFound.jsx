import Page404 from '../../images/404.jpg';
import {
  Img,
  Wrapper,
  NavItem,
  InfoContainer,
  Styled404,
  StyledText,
} from './PageNotFound.styled';

export const PageNotFound = () => {
  return (
    <main>
      <Wrapper>
        <Img src={Page404} alt="page not found" />
        <InfoContainer>
          <Styled404>404</Styled404>
          <StyledText>
            The page you are looking for was moved, removed, renamed or might
            never existed
          </StyledText>
          <NavItem to="/">go home</NavItem>
        </InfoContainer>
      </Wrapper>
    </main>
  );
};
