'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { PersonKind, TableKind, person_kinds } from '@/models';
import Mid from '../skins/style_1/mid';
import HomeRoster from '../skins/style_1/home-roster';
import AwayRoster from '../skins/style_1/away-roster';
import Big from '../skins/style_1/big';
import Little from '../skins/style_1/little';

const styles = ['style_1', 'style_2'];

interface Skin {
  Mid: React.ComponentType<{ show: boolean }>;
  Person: React.ComponentType<{ kind: PersonKind, show: boolean }>;
  Replace: React.ComponentType<{ show: boolean }>;
}

const tableKinds = ['mid', 'roster', 'person', 'replace', 'off', 'big', 'little'];

export default function App() {
  const [style, set_style] = useState<string>('style_1');
  const [skin, set_skin] = useState<Skin | null>(null);
  const [table_kind, set_table_kind] = useState<TableKind>('mid');
  const [person_kind, set_person_kind] = useState<PersonKind>('goal');
  
  useEffect(() => {
    if (!style) return;
    (async () => {
      const Mid = (await import(`@/skins/${style}/mid`)).Mid;
      const Person = (await import(`@/skins/${style}/person`)).Person;
      const Replace = (await import(`@/skins/${style}/replace`)).Replace;
      set_skin({
        Mid,
        Person,
        Replace
      });
    })();
  }, [style]);

  if (!skin) {
    return <div>Loading...</div>;
  }

  return (
    <Back>
      <AnimatePresence>
        {table_kind === 'mid' && (
          <motion.div
            key={table_kind}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              <Mid />
            </div>
          </motion.div>
        )}
        {(table_kind === 'home-roster') && (
          <motion.div
            key={table_kind}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              <HomeRoster />
            </div>
          </motion.div>
        )}
        {(table_kind === 'away-roster') && (
          <motion.div
            key={table_kind}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              <AwayRoster />
            </div>
          </motion.div>
        )}
        {table_kind === 'big' && (
          <motion.div
            key={table_kind}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              left: 0,
              bottom: 32,
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              <Big />
            </div>
          </motion.div>
        )}
        {table_kind === 'little' && (
          <motion.div
            key={table_kind}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              left: 0,
              top: 32,
              width: 'auto',
              display: 'block',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              <Little />
            </div>
          </motion.div>
        )}
        {table_kind === 'person' && (
          <motion.div
            key={table_kind}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              right: 60,
              bottom: 80,
              zIndex: 20,
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
      <skin.Person kind={person_kind} show={table_kind === 'person'} /> 
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <skin.Replace show={table_kind === 'replace'} />
      <Tools>
        <Select value={style} onChange={(e) => set_style(e.target.value)}>
          {styles.map((style) => (
            <option key={style} value={style}>{style}</option>
          ))}
        </Select>
        <Button onClick={() => set_table_kind('mid')}>Mid</Button>
        <Button onClick={() => set_table_kind('home-roster')}>Home roster</Button>
        <Button onClick={() => set_table_kind('away-roster')}>Away Roster</Button>
        <Button onClick={() => set_table_kind('big')}>big</Button>
        <Button onClick={() => set_table_kind('little')}>little</Button>
        <Select value={person_kind} onChange={(e) => set_person_kind(e.target.value as PersonKind)}>
          {person_kinds.map((kind) => (
            <option key={kind} value={kind}>{kind}</option>
          ))}
        </Select>
        <Button onClick={() => set_table_kind('person')}>Person</Button>
        <Button onClick={() => set_table_kind('replace')}>Replace</Button>
        <Button onClick={() => set_table_kind('off')}>Off</Button>
      </Tools>
    </Back>
  );
}

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  min-width: 1400px;
  min-height: 800px;
  z-index: 1000;
  overflow: hidden;
  box-sizing: border-box;
  background-color: transparent;
`;

const Tools = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  width: 240px;
  gap: 12px;
  align-items: stretch;
`;

const Select = styled.select`
  flex: 1;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
  width: 100%;
`;