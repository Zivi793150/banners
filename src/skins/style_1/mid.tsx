import React, { useRef, useEffect, useState } from 'react';
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
  background: #202B48f2;
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
  margin-top: 48px;
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
  top: 260px;
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
  width: 340px;
  height: 380px;
  background: none;
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
  min-width: 129px;
  height: 52px;
  top: 670px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #014069 0%, #027ECF 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  white-space: nowrap;
  padding: 0 24px;
`;

const DateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  height: 32px;
  top: 735px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 32px;
  line-height: 32px;
  gap: 16px;
`;

const DateText = styled.div`
  display: flex;
  align-items: flex-end;
  height: 24px;
`;

// SVG-компонент звезды
const StarSVG = ({ size = 120, color = '#fff', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon
      points="60,10 73,45 110,45 80,68 90,105 60,83 30,105 40,68 10,45 47,45"
      fill={color}
      fillOpacity="0.15"
    />
  </svg>
);

// Одинаковые параметры для всех звезд
const STAR_SIZE = (80 + 60) * 1.8;
const STAR_SPEED = 70; // скорость движения увеличена
const STAR_ROTATE_SPEED = 4; // скорость вращения увеличена
const STAR_COUNT = 16;
const MAX_STAR_SIZE = STAR_SIZE;

function getRandomStarDirection() {
  return Math.random() * 2 * Math.PI;
}

// Генерация массива звезд с минимальным перекрытием
function generateNonOverlappingStars(count: number) {
  const stars = [];
  let attempts = 0;
  while (stars.length < count && attempts < count * 20) {
    attempts++;
    const direction = getRandomStarDirection();
    const size = STAR_SIZE;
    const x = -MAX_STAR_SIZE + Math.random() * (CANVAS_WIDTH + 2 * MAX_STAR_SIZE);
    const y = -MAX_STAR_SIZE + Math.random() * (CANVAS_HEIGHT + 2 * MAX_STAR_SIZE);
    // Проверяем, чтобы не было близко к другим звездам
    let tooClose = false;
    for (const s of stars) {
      const dx = s.x - x;
      const dy = s.y - y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < size * 1.1) { // 1.1 — небольшой запас
        tooClose = true;
        break;
      }
    }
    if (!tooClose) {
      stars.push({
        size,
        speed: STAR_SPEED,
        rotateSpeed: STAR_ROTATE_SPEED,
        direction,
        angle: Math.random() * 360,
        x,
        y
      });
    }
  }
  // Если не удалось — просто добиваем случайными
  while (stars.length < count) {
    stars.push({
      size: STAR_SIZE,
      speed: STAR_SPEED,
      rotateSpeed: STAR_ROTATE_SPEED,
      direction: getRandomStarDirection(),
      angle: Math.random() * 360,
      x: -MAX_STAR_SIZE + Math.random() * (CANVAS_WIDTH + 2 * MAX_STAR_SIZE),
      y: -MAX_STAR_SIZE + Math.random() * (CANVAS_HEIGHT + 2 * MAX_STAR_SIZE)
    });
  }
  return stars;
}

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 800;

const StarsLayer = styled.div`
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
  z-index: 0;
  pointer-events: none;
`;

// Функция для отрисовки звезды на canvas
function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, angle: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle * Math.PI / 180);
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 5 * i;
    const rad = i % 2 === 0 ? r : r * 0.4;
    ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
  }
  ctx.closePath();
  ctx.globalAlpha = 0.15;
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.restore();
}

const CanvasStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const STAR_COUNT = 12;
  const STAR_SIZE = (80 + 60) * 1.8;
  const STAR_SPEED = 70;
  const STAR_ROTATE_SPEED = 4;
  const CANVAS_WIDTH = 1400;
  const CANVAS_HEIGHT = 800;
  const MAX_STAR_SIZE = STAR_SIZE;
  // Генерация начальных позиций без наложений
  function generateStars() {
    const stars: any[] = [];
    let attempts = 0;
    while (stars.length < STAR_COUNT && attempts < STAR_COUNT * 30) {
      attempts++;
      const angle = Math.random() * 360;
      const direction = Math.random() * 2 * Math.PI;
      const speed = 60 + Math.random() * 20; // 60-80
      const rotateSpeed = 3 + Math.random() * 2; // 3-5
      const x = -MAX_STAR_SIZE + Math.random() * (CANVAS_WIDTH + 2 * MAX_STAR_SIZE);
      const y = -MAX_STAR_SIZE + Math.random() * (CANVAS_HEIGHT + 2 * MAX_STAR_SIZE);
      let tooClose = false;
      for (const s of stars) {
        const dx = s.x - x;
        const dy = s.y - y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < STAR_SIZE * 1.1) {
          tooClose = true;
          break;
        }
      }
      if (!tooClose) {
        stars.push({ x, y, angle, direction, speed, rotateSpeed });
      }
    }
    // Если не удалось — добиваем случайными
    while (stars.length < STAR_COUNT) {
      stars.push({
        x: -MAX_STAR_SIZE + Math.random() * (CANVAS_WIDTH + 2 * MAX_STAR_SIZE),
        y: -MAX_STAR_SIZE + Math.random() * (CANVAS_HEIGHT + 2 * MAX_STAR_SIZE),
        angle: Math.random() * 360,
        direction: Math.random() * 2 * Math.PI,
        speed: 60 + Math.random() * 20,
        rotateSpeed: 3 + Math.random() * 2
      });
    }
    return stars;
  }
  // Состояние звезд (позиции, углы, направления)
  const starsRef = useRef<any[]>(generateStars());
  useEffect(() => {
    let running = true;
    const stars = starsRef.current;
    const ctx = canvasRef.current?.getContext('2d');
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      // Движение и вращение
      for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        // Избегание наложений
        for (let j = 0; j < stars.length; j++) {
          if (i === j) continue;
          const s2 = stars[j];
          let dx = s2.x - s.x;
          let dy = s2.y - s.y;
          let dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < STAR_SIZE * 1.05) {
            // Немного корректируем направление, чтобы разъехались
            const avoidAngle = Math.atan2(dy, dx) + Math.PI;
            s.direction += (avoidAngle - s.direction) * 0.01;
          }
        }
        s.x += Math.cos(s.direction) * s.speed / 60;
        s.y += Math.sin(s.direction) * s.speed / 60;
        s.angle += s.rotateSpeed / 60;
        // wrap-around
        const dx = Math.cos(s.direction);
        const dy = Math.sin(s.direction);
        if (dx > 0 && s.x - STAR_SIZE / 2 > CANVAS_WIDTH + MAX_STAR_SIZE) s.x = -MAX_STAR_SIZE;
        if (dx < 0 && s.x + STAR_SIZE / 2 < -MAX_STAR_SIZE) s.x = CANVAS_WIDTH + MAX_STAR_SIZE;
        if (dy > 0 && s.y - STAR_SIZE / 2 > CANVAS_HEIGHT + MAX_STAR_SIZE) s.y = -MAX_STAR_SIZE;
        if (dy < 0 && s.y + STAR_SIZE / 2 < -MAX_STAR_SIZE) s.y = CANVAS_HEIGHT + MAX_STAR_SIZE;
        drawStar(ctx, s.x, s.y, STAR_SIZE / 2, s.angle);
      }
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, []);
  return <canvas ref={canvasRef} width={1400} height={800} style={{position:'absolute', left:0, top:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none'}} />;
};

// Анимация логотипов (масштабирование в рассинхроне)
type AnimatedLogoProps = {
  src: string;
  alt: string;
  phase?: number;
};
const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ src, alt, phase = 0 }) => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    let frame = 0;
    function animate() {
      const t = performance.now() / 1000;
      setScale(1 + 0.08 * Math.sin(t * 1.2 + phase));
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [phase]);
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: `scale(${scale})`,
        transition: 'transform 0.1s linear'
      }}
    />
  );
};

const Mid: React.FC = () => {
  return (
    <>
      <FontStyles />
      <BannerWrapper>
        <CanvasStars />
        <Title>КУБОК 3-ЕЙ ЛИГИ</Title>
        <SubTitle>СК ТУЛИЦА</SubTitle>
        <TeamsBlock>
          <Team>
            <TeamLogo>
              <AnimatedLogo src="/team.png" alt="logo" phase={0} />
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
              <AnimatedLogo src="/team.png" alt="logo" phase={Math.PI} />
            </TeamLogo>
            <TeamName>КОМАНДА</TeamName>
          </Team>
        </TeamsBlock>
        <TourBlock>ТУР</TourBlock>
        <DateBlock>
          <span>ДАТА</span>
          <span style={{ color: '#0094FF', fontSize: 32, lineHeight: '32px', padding: '0 8px', display: 'inline-block' }}>|</span>
          <span>ВРЕМЯ</span>
        </DateBlock>
      </BannerWrapper>
    </>
  );
};

export default Mid; 