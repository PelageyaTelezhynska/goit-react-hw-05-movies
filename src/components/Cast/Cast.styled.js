import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const Photo = styled.img`
  width: 160px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Actor = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 160px;
  height: 340px;
  gap: 10px;
`;

export const ActorInfo = styled.p`
  font-weight: 500;
  font-size: 12px;
`;
