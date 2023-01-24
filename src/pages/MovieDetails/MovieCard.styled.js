import styled from 'styled-components';

export const MovieWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  font-size: 20px;
  line-height: 14px;
  margin: 28px 0;
`;

export const Poster = styled.img`
  width: 375px;
  margin-right: 40px;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 28px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
`;

export const MovieInfo = styled.p`
  font-size: 24px;
  line-height: 16px;
  color: #8c8c8c;

  width: 160px;
  margin-right: 40px;
`;

export const VoteWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VoteAverage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  border-radius: 5px;
  width: 44px;
  height: 28px;
  background-color: rgb(81, 124, 232);
`;

export const VoteCount = styled.span`
  margin: 0 4px;
  line-height: 16px;
  color: #8c8c8c;
`;

export const About = styled.h3`
  font-weight: 500;
  font-size: 32px;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const AboutText = styled.p`
  margin: 8px 0 20px;
  font-size: 28px;
  line-height: 1.17;
`;
