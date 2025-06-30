import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

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
  padding: 0 40px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 32px;
  line-height: 32px;
  color: #fff;
  text-align: center;
  padding: 0 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
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

// Компонент для анимированных звёзд
const StarField: React.FC = () => {
  // Одинаковая скорость для всех звёзд
  const duration = 10; // секунда на полный цикл (быстро)
  const rotateDuration = 18; // медленное вращение (секунд)
  const stars = Array.from({ length: 14 }, (_, i) => {
    // Случайные параметры для каждой звезды
    const size = 60 + Math.random() * 80; // размер
    const top = Math.random() * 90; // %
    const left = Math.random() * 90; // %
    const opacity = 0.12 + Math.random() * 0.18;
    // Очень хаотичное движение
    const xMove = (Math.random() - 0.5) * 600; // px (ещё больше амплитуда)
    const yMove = (Math.random() - 0.5) * 600; // px (ещё больше амплитуда)
    // Вращение всегда по часовой или против (рандом)
    const rotateTo = Math.random() > 0.5 ? 360 : -360;
    return (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
          width: size,
          height: size,
          pointerEvents: 'none',
          zIndex: 1,
        }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, xMove, 0], y: [0, yMove, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'loop' as const,
          ease: 'linear',
        }}
      >
        <motion.img
          src="/star.png"
          alt="star"
          style={{ width: '100%', height: '100%', opacity }}
          initial={{ rotate: 0 }}
          animate={{ rotate: rotateTo }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop' as const,
            ease: 'linear',
            duration: rotateDuration,
          }}
        />
      </motion.div>
    );
  });
  return <>{stars}</>;
};

const Banner: React.FC = () => {
  return (
    <>
      <FontStyles />
      <BannerWrapper>
        {/* Звёзды на фоне */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <StarField />
        </div>
        <Title>КУБОК 3-ЕЙ ЛИГИ</Title>
        <SubTitle>СК ТУЛИЦА</SubTitle>
        <TeamsBlock>
          <Team>
            <TeamLogo>
              <motion.img
                src="/team.png"
                alt="logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.18, 1] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  repeatType: 'loop' as const,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              />
            </TeamLogo>
            <TeamName>КОМАНДА</TeamName>
          </Team>
          <CrossWrap>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="20" x2="100" y2="100" stroke="white" strokeWidth="10" strokeLinecap="round"/>
              <line x1="100" y1="20" x2="20" y2="100" stroke="white" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </CrossWrap>
          <Team>
            <TeamLogo>
              <motion.img
                src="/team.png"
                alt="logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.13, 1] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  repeatType: 'loop' as const,
                  ease: 'easeInOut',
                  delay: 1.1,
                }}
              />
            </TeamLogo>
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