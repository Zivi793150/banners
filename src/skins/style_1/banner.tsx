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

const BannerWrapper = styled.div`
  position: relative;
  width: 1400px;
  height: 800px;
  background: #001134cc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
`;

const Title = styled.div`
  width: 100%;
  margin-top: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-weight: bold;
  font-size: 72px;
  color: #fff;
  letter-spacing: -2%;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-weight: normal;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -2%;
  color: #fff;
  text-align: center;
`;

const TeamsBlock = styled.div`
  position: absolute;
  width: 1000px;
  height: 300px;
  top: 220px;
  left: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
`;

const TeamLogo = styled.div`
  width: 170px;
  height: 190px;
  background: #fff2;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TeamName = styled.div`
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-weight: bold;
  font-size: 36px;
  color: #fff;
  margin-top: 8px;
`;

const CrossWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
`;

const TourBlock = styled.div`
  position: absolute;
  width: 129px;
  height: 52px;
  top: 570px;
  left: 636px;
  background: linear-gradient(90deg, #014069 0%, #027ECF 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`;

const DateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 190px;
  height: 32px;
  top: 635px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 20px;
`;

const Banner: React.FC = () => {
  return (
    <>
      <FontStyles />
      <BannerWrapper>
        <Title>КУБОК 3-ЕЙ ЛИГИ</Title>
        <SubTitle>СК ТУЛИЦА</SubTitle>
        <TeamsBlock>
          <Team>
            <TeamLogo><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></TeamLogo>
            <TeamName>КОМАНДА</TeamName>
          </Team>
          <CrossWrap>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="20" x2="100" y2="100" stroke="white" strokeWidth="10" strokeLinecap="round"/>
              <line x1="100" y1="20" x2="20" y2="100" stroke="white" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </CrossWrap>
          <Team>
            <TeamLogo><img src="/team.png" alt="logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></TeamLogo>
            <TeamName>КОМАНДА</TeamName>
          </Team>
        </TeamsBlock>
        <TourBlock>ТУР</TourBlock>
        <DateBlock>
          <span>ДАТА</span>
          <span>|</span>
          <span>ВРЕМЯ</span>
        </DateBlock>
      </BannerWrapper>
    </>
  );
};

export default Banner; 