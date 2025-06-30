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
  position: relative;
  width: 1000px;
  height: 800px;
  background: #001134cc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RosterBadge = styled.div`
  position: absolute;
  width: 174px;
  height: 52px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #014069 0%, #027ECF 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: #fff;
  letter-spacing: -2%;
`;

const TeamName = styled.div`
  position: absolute;
  width: 389px;
  height: 28px;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: #fff;
  letter-spacing: -2%;
`;

const Logo = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 40px;
  right: 40px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const PlayersContainer = styled.div`
  position: absolute;
  width: 920px;
  height: 464px;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PlayerRow = styled.div`
  width: 920px;
  height: 64px;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const Player = styled.div`
  width: 280px;
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 20px;
  color: #222;
  overflow: hidden;
`;

const PlayerNumber = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-size: 18px;
  color: #222;
`;

const PlayerName = styled.div`
  flex: 1;
  padding-left: 8px;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 18px;
  color: #222;
`;

const PlayerPhoto = styled.div`
  width: 64px;
  height: 64px;
  background: #b3d1e7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #222;
  overflow: hidden;
`;

const BottomRow = styled.div`
  position: absolute;
  width: 920px;
  height: 64px;
  top: 706px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const StaffBlock = styled.div`
  width: 440px;
  height: 64px;
  background: linear-gradient(97.14deg, #014069 1.29%, #027ECF 118.37%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  padding: 0 24px;
`;

const StaffLabel = styled.span`
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
`;

const StaffName = styled.span`
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
`;

const Roster: React.FC = () => {
  return (
    <>
      <FontStyles />
      <Wrapper>
        <RosterBadge>СОСТАВ</RosterBadge>
        <TeamName>КОМАНДА</TeamName>
        <Logo><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'contain'}} /></Logo>
        <PlayersContainer>
          {[0,1,2,3,4,5].map((row) => (
            <PlayerRow key={row}>
              {[0,1,2].map((col) => (
                <Player key={col}>
                  <PlayerNumber>№</PlayerNumber>
                  <PlayerName>ИГРОК</PlayerName>
                  <PlayerPhoto><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></PlayerPhoto>
                </Player>
              ))}
            </PlayerRow>
          ))}
        </PlayersContainer>
        <BottomRow>
          <StaffBlock><StaffLabel>ПРЕДСТАВИТЕЛЬ:</StaffLabel> <StaffName>ИМЯ</StaffName></StaffBlock>
          <StaffBlock><StaffLabel>ТРЕНЕР:</StaffLabel> <StaffName>ИМЯ</StaffName></StaffBlock>
        </BottomRow>
      </Wrapper>
    </>
  );
};

export default Roster; 