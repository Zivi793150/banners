'use client';

import {
  ChangeEvent,
  useCallback,
  useEffect,
  useState
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
  if (!show) return null;
  return (
    <>
      <FontStyles />
      <PlayerWrapper>
        <SideBar color="#E53935" />
        <LogoBox>
          <img src="/team.png" alt="logo" />
        </LogoBox>
        <InfoBox>
          <TopRow>
            <PlayerName>Иванов Олег 37'</PlayerName>
            <CardIcon color="#FFD600" />
          </TopRow>
          <TeamName>Атлетико</TeamName>
        </InfoBox>
      </PlayerWrapper>
    </>
  );
};

const PlayerWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 72px;
  min-width: 340px;
  background: none;
`;

const SideBar = styled.div<{ color: string }>`
  width: 6px;
  height: 100%;
  background: ${({ color }) => color};
  border-radius: 2px 0 0 2px;
`;

const LogoBox = styled.div`
  width: 56px;
  height: 72px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 44px;
    height: 44px;
    object-fit: contain;
  }
`;

const InfoBox = styled.div`
  background: #001134;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 20px 8px 20px;
  min-width: 200px;
  height: 100%;
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
`;