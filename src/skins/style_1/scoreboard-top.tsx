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
  width: 600px;
  height: 56px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
  gap: 20px;
`;

const SideBar = styled.div<{ color: string }>`
  width: 8px;
  height: 44px;
  background: ${({ color }) => color};
`;

const TeamBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 90px;
  height: 56px;
  background: none;
`;

const TeamLogo = styled.div`
  width: 36px;
  height: 36px;
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
  font-size: 28px;
  color: #001134;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
  text-align: center;
`;

const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-width: 80px;
  gap: 2px;
`;

const Fouls = styled.div`
  width: 80px;
  height: 16px;
  background: #001134;
  color: #fff;
  font-family: 'Supermolot-DemiBold', Arial, sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Score = styled.div`
  width: 80px;
  height: 32px;
  background: linear-gradient(97.14deg, #025288 1.29%, #0369A8 118.37%);
  font-family: 'Supermolot-ExtraBold', Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  white-space: nowrap;
`;

const BottomBlock = styled.div`
  width: 80px;
  height: 16px;
  background: #001134;
  color: #fff;
  font-family: 'Supermolot-DemiBold', Arial, sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Divider = styled.div`
  width: 1px;
  height: 10px;
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