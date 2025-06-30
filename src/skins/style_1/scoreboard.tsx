import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Supermolot-Bold';
    src: url('/fonts/TT Supermolot Neue Trial Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Supermolot-Regular';
    src: url('/fonts/TT Supermolot Neue Trial Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Wrapper = styled.div`
  width: 1440px;
  height: 144px;
  background: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  gap: 32px;
`;

const TeamBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 500px;
  height: 100px;
`;

const TeamLogo = styled.div`
  width: 160px;
  height: 160px;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 16px;
  color: #222;
  overflow: hidden;
`;

const TeamName = styled.div`
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-size: 48px;
  color: #001134;
  display: flex;
  align-items: center;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 20px;
`;

const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
`;

const ScoreContainer = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
`;

const Score = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(97.14deg, #014069 1.29%, #027ECF 118.37%);
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-size: 48px;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

const SubText = styled.div`
  width: 100%;
  height: 44px;
  background: #001134;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Scoreboard: React.FC = () => {
  return (
    <>
      <FontStyles />
      <Wrapper>
        <TeamBlock>
          <TeamLogo><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'contain'}} /></TeamLogo>
          <TeamName>КОМАНДА</TeamName>
        </TeamBlock>
        <CenterBlock>
          <ScoreContainer>
            <Score>2 - 0</Score>
            <SubText>ТЕКСТ</SubText>
          </ScoreContainer>
        </CenterBlock>
        <TeamBlock style={{ justifyContent: 'flex-end' }}>
          <TeamName>КОМАНДА</TeamName>
          <TeamLogo><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'contain'}} /></TeamLogo>
        </TeamBlock>
      </Wrapper>
    </>
  );
};

export default Scoreboard; 