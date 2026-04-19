import React from 'react';
import { motion } from 'framer-motion';
import StageCanvas, {
  type StageCanvasProps,
} from '@/components/visualization/StageCanvas';

type StageVisualizationProps = {
  stage: string;
  isActive: boolean;
};

const VIZ: Record<string, StageCanvasProps> = {
  cell: {
    backdrop: { kind: 'split' },
    nodes: [
      { id: 'robot', kind: 'robot', x: 24, y: 30, label: 'Robot Zone' },
      { id: 'human', kind: 'human', x: 76, y: 30, label: 'Human Zone' },
    ],
    pills: [
      { text: 'Separate spaces', position: 'top' },
      { text: 'Completely separated operation', position: 'bottom' },
    ],
  },
  coexistence: {
    backdrop: { kind: 'shared' },
    nodes: [
      { id: 'robot', kind: 'robot', x: 28, y: 30, label: 'Independent work' },
      { id: 'human', kind: 'human', x: 72, y: 30, label: 'Independent work' },
    ],
    pills: [
      { text: 'Shared Workspace', position: 'top' },
      { text: 'Same space, independent tasks', position: 'bottom' },
    ],
  },
  synchronised: {
    backdrop: { kind: 'shared' },
    nodes: [
      { id: 'robot', kind: 'robot', x: 26, y: 28, caption: 'Time slot 1' },
      { id: 'arrow', kind: 'arrow-lr', x: 50, y: 28 },
      { id: 'human', kind: 'human', x: 74, y: 28, caption: 'Time slot 2' },
    ],
    pills: [
      { text: 'Time-Shared Workspace', position: 'top' },
      { text: 'Coordinated timing, shared resources', position: 'bottom' },
    ],
  },
  cooperation: {
    backdrop: { kind: 'shared' },
    nodes: [
      { id: 'robot', kind: 'robot', x: 28, y: 30, caption: 'Task A' },
      { id: 'human', kind: 'human', x: 72, y: 30, caption: 'Task B' },
    ],
    edges: [
      {
        from: { x: 33, y: 28 },
        to: { x: 67, y: 28 },
        curve: 'over',
        color: 'blue',
        dashed: true,
      },
      {
        from: { x: 67, y: 32 },
        to: { x: 33, y: 32 },
        curve: 'under',
        color: 'green',
        dashed: true,
      },
    ],
    pills: [
      { text: 'Simultaneous Operation', position: 'top' },
      { text: 'Different tasks, mutual feedback', position: 'bottom' },
    ],
  },
  collaboration: {
    backdrop: { kind: 'shared-with-zone', zoneLabel: 'Shared Task' },
    nodes: [
      { id: 'robot', kind: 'robot', x: 26, y: 30, caption: 'Co-worker' },
      { id: 'sync', kind: 'sync', x: 50, y: 30 },
      { id: 'human', kind: 'human', x: 74, y: 30, caption: 'Co-worker' },
    ],
    edges: [
      {
        from: { x: 31, y: 28 },
        to: { x: 45, y: 28 },
        curve: 'straight',
        color: 'blue',
        animated: 'forward',
      },
      {
        from: { x: 55, y: 28 },
        to: { x: 69, y: 28 },
        curve: 'straight',
        color: 'blue',
        animated: 'forward',
      },
      {
        from: { x: 69, y: 32 },
        to: { x: 55, y: 32 },
        curve: 'straight',
        color: 'green',
        animated: 'forward',
      },
      {
        from: { x: 45, y: 32 },
        to: { x: 31, y: 32 },
        curve: 'straight',
        color: 'green',
        animated: 'forward',
      },
    ],
    pills: [
      { text: 'Collaborative Workspace', position: 'top' },
      { text: 'Same task, active communication', position: 'bottom' },
    ],
  },
  coevolution: {
    backdrop: { kind: 'shared', tone: 'evolutionary' },
    nodes: [
      {
        id: 'robot',
        kind: 'robot',
        x: 22,
        y: 30,
        label: 'Adaptive System',
        pulse: true,
      },
      { id: 'brain', kind: 'brain', x: 50, y: 30 },
      {
        id: 'human',
        kind: 'human',
        x: 78,
        y: 30,
        label: 'Human Partner',
        pulse: true,
      },
    ],
    edges: [
      {
        from: { x: 27, y: 27 },
        to: { x: 73, y: 27 },
        curve: 'over',
        color: 'blue',
        dashed: true,
      },
      {
        from: { x: 73, y: 33 },
        to: { x: 27, y: 33 },
        curve: 'under',
        color: 'green',
        dashed: true,
      },
      {
        from: { x: 27, y: 30 },
        to: { x: 45, y: 30 },
        curve: 'straight',
        color: 'purple',
        dashed: true,
        animated: 'forward',
      },
      {
        from: { x: 55, y: 30 },
        to: { x: 73, y: 30 },
        curve: 'straight',
        color: 'purple',
        dashed: true,
        animated: 'forward',
      },
      {
        from: { x: 30, y: 22 },
        to: { x: 70, y: 22 },
        curve: 'over',
        color: 'orange',
        dashed: true,
      },
      {
        from: { x: 70, y: 38 },
        to: { x: 30, y: 38 },
        curve: 'under',
        color: 'orange',
        dashed: true,
      },
    ],
    particles: true,
    pills: [
      { text: 'Co-Evolutionary Environment', position: 'top' },
      { text: 'Mutual evolution and adaptation', position: 'bottom' },
    ],
  },
};

const StageVisualization: React.FC<StageVisualizationProps> = ({
  stage,
  isActive,
}) => {
  if (!isActive) return null;
  const spec = VIZ[stage];
  if (!spec) return null;

  return (
    <motion.div
      key={stage}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <StageCanvas {...spec} />
    </motion.div>
  );
};

export default StageVisualization;
