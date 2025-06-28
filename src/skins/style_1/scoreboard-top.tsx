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
  @font-face {
    font-family: 'Supermolot-ExtraBold';
    src: url('/fonts/TT Supermolot Neue Trial ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Supermolot-DemiBold';
    src: url('/fonts/TT Supermolot Neue Trial DemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
`;

const Wrapper = styled.div`
  width: 900px;
  height: 72px;
  background: #F7F7F7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  gap: 32px;
`;

const SideBar = styled.div<{ color: string }>`
  width: 12px;
  height: 64px;
  background: ${({ color }) => color};
`;

const TeamBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 140px;
  height: 72px;
`;

const TeamLogo = styled.div`
  width: 56px;
  height: 56px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 16px;
  color: #222;
  overflow: hidden;
`;

const TeamName = styled.div`
  font-family: 'Supermolot-ExtraBold', Arial, sans-serif;
  font-size: 48px;
  color: #001134;
  letter-spacing: 0.5px;
`;

const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  min-width: 120px;
  gap: 4px;
`;

const Fouls = styled.div`
  width: 120px;
  height: 24px;
  background: #001134;
  color: #fff;
  font-family: 'Supermolot-DemiBold', Arial, sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  letter-spacing: 0.2px;
`;

const Score = styled.div`
  width: 120px;
  height: 56px;
  background: linear-gradient(97.14deg, #014069 1.29%, #027ECF 118.37%);
  font-family: 'Supermolot-ExtraBold', Arial, sans-serif;
  font-size: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
`;

const BottomBlock = styled.div`
  width: 120px;
  height: 24px;
  background: #001134;
  color: #fff;
  font-family: 'Supermolot-DemiBold', Arial, sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Divider = styled.div`
  width: 2px;
  height: 16px;
  background: #fff;
  border-radius: 1px;
  opacity: 0.8;
`;

const BottomText = styled.span`
  margin: 0 8px;
`;

const ScoreboardTop: React.FC = () => {
  return (
    <>
      <FontStyles />
      <Wrapper>
        <SideBar color="#E53935" />
        <TeamBlock style={{ justifyContent: 'flex-start' }}>
          <TeamLogo><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'contain'}} /></TeamLogo>
          <TeamName>КОМ</TeamName>
        </TeamBlock>
        <CenterBlock>
          <Fouls>
            <span>2</span>
            <span>ФОЛЫ</span>
            <span>8</span>
          </Fouls>
          <Score>2 - 0</Score>
          <BottomBlock>
            <span>2-Т</span>
            <Divider />
            <span>64:35</span>
          </BottomBlock>
        </CenterBlock>
        <TeamBlock style={{ justifyContent: 'flex-end' }}>
          <TeamName>ФЕЛ</TeamName>
          <TeamLogo><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'contain'}} /></TeamLogo>
        </TeamBlock>
        <SideBar color="#1976D2" />
      </Wrapper>
    </>
  );
};

export default ScoreboardTop; 