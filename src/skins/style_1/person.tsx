'use client';

import {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  useRef,
  useLayoutEffect
} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { PersonKind, person_kinds } from '@/models';

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

export const Person = ({ kind, show }: { kind: string, show: boolean }) => {
  const infoRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <FontStyles />
      <PlayerWrapper>
        <InfoBox ref={infoRef}>
          <TopRow>
            <PlayerName>Иванов Олег 37'</PlayerName>
            <CardIcon color="#FFD600" />
          </TopRow>
          <TeamName>Атлетико</TeamName>
        </InfoBox>
        <LogoBox ref={logoRef}>
          <img src="/team.png" alt="logo" />
        </LogoBox>
        <SideBar color="#1976D2" />
      </PlayerWrapper>
    </>
  );
};

const PlayerWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 72px;
  min-width: 300px;
  background: none;
  z-index: 1000;
  overflow: visible;
`;

const SideBar = styled.div<{ color: string }>`
  width: 6px;
  background: ${({ color }) => color};
  border-radius: 0 2px 2px 0;
  z-index: 2;
  height: 72px;
`;

const LogoBox = styled.div`
  width: 56px;
  height: 72px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  img {
    height: 72px;
    width: auto;
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
  }
`;

const InfoBox = styled.div`
  background: #001134;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  min-width: 200px;
  height: 100%;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PlayerName = styled.div`
  font-family: 'Supermolot-Bold', Arial, sans-serif;
  font-size: 24px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

const CardIcon = styled.div<{ color: string }>`
  width: 24px;
  height: 32px;
  background: ${({ color }) => color};
  border-radius: 4px;
  margin-left: 8px;
`;

const TeamName = styled.div`
  font-family: 'Supermolot-Regular', Arial, sans-serif;
  font-size: 16px;
  color: #BFC9D9;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;