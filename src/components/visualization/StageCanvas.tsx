import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Bot, User, Brain, RefreshCw, ArrowLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Coord = { x: number; y: number };

export type EdgeColor = 'blue' | 'green' | 'purple' | 'orange';

export type NodeKind = 'robot' | 'human' | 'brain' | 'sync' | 'arrow-lr';

export type StageNode = Coord & {
  id: string;
  kind: NodeKind;
  label?: string;
  caption?: string;
  pulse?: boolean;
};

export type StageEdge = {
  from: Coord;
  to: Coord;
  curve?: 'over' | 'under' | 'straight';
  color?: EdgeColor;
  dashed?: boolean;
  delay?: number;
  animated?: 'forward' | 'reverse' | false;
};

export type StagePill = {
  text: string;
  position: 'top' | 'bottom';
};

export type BackdropSpec =
  | { kind: 'split' }
  | { kind: 'shared'; tone?: 'peach' | 'evolutionary' }
  | { kind: 'shared-with-zone'; zoneLabel?: string };

export type StageCanvasProps = {
  backdrop: BackdropSpec;
  nodes: StageNode[];
  edges?: StageEdge[];
  pills?: StagePill[];
  particles?: boolean;
};

const COLOR_MAP: Record<EdgeColor, string> = {
  blue: '#3b82f6',
  green: '#22c55e',
  purple: '#a55eea',
  orange: '#fd9644',
};

const buildPath = (
  from: Coord,
  to: Coord,
  curve: 'over' | 'under' | 'straight'
) => {
  if (curve === 'straight') return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  const dx = to.x - from.x;
  const arch = curve === 'over' ? -8 : 8;
  return `M ${from.x} ${from.y} C ${from.x + dx * 0.3} ${from.y + arch}, ${to.x - dx * 0.3} ${to.y + arch}, ${to.x} ${to.y}`;
};

const NodeIcon: React.FC<{ kind: NodeKind; pulse?: boolean }> = ({
  kind,
  pulse,
}) => {
  if (kind === 'robot') {
    return (
      <motion.div
        className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center"
        animate={
          pulse
            ? {
                boxShadow: [
                  '0 10px 15px -3px rgba(59,130,246,0.3)',
                  '0 10px 24px -3px rgba(59,130,246,0.55)',
                  '0 10px 15px -3px rgba(59,130,246,0.3)',
                ],
              }
            : undefined
        }
        transition={pulse ? { duration: 3, repeat: Infinity } : undefined}
      >
        <Bot className="w-7 h-7 text-white" aria-hidden="true" />
      </motion.div>
    );
  }
  if (kind === 'human') {
    return (
      <motion.div
        className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center"
        animate={
          pulse
            ? {
                boxShadow: [
                  '0 10px 15px -3px rgba(38,222,129,0.3)',
                  '0 10px 24px -3px rgba(38,222,129,0.55)',
                  '0 10px 15px -3px rgba(38,222,129,0.3)',
                ],
              }
            : undefined
        }
        transition={pulse ? { duration: 3, repeat: Infinity } : undefined}
      >
        <User className="w-7 h-7 text-white" aria-hidden="true" />
      </motion.div>
    );
  }
  if (kind === 'brain') {
    return (
      <motion.div
        className="bg-purple-100/80 backdrop-blur-sm p-3 rounded-full border border-purple-200"
        animate={{
          boxShadow: [
            '0 0 0px rgba(147,51,234,0)',
            '0 0 18px rgba(147,51,234,0.5)',
            '0 0 0px rgba(147,51,234,0)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Brain className="w-6 h-6 text-purple-600" aria-hidden="true" />
      </motion.div>
    );
  }
  if (kind === 'sync') {
    return (
      <motion.div
        className="bg-white/70 backdrop-blur-sm p-2 rounded-full border border-blue-200"
        animate={{
          boxShadow: [
            '0 0 0px rgba(59,130,246,0)',
            '0 0 14px rgba(59,130,246,0.5)',
            '0 0 0px rgba(59,130,246,0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <RefreshCw className="w-5 h-5 text-blue-500" aria-hidden="true" />
      </motion.div>
    );
  }
  // arrow-lr
  return (
    <motion.div
      className="bg-white/70 backdrop-blur-sm p-2 rounded-full border border-gray-200"
      animate={{ x: [-2, 2, -2] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <ArrowLeftRight className="w-5 h-5 text-gray-500" aria-hidden="true" />
    </motion.div>
  );
};

const Backdrop: React.FC<{ spec: BackdropSpec }> = ({ spec }) => {
  if (spec.kind === 'split') {
    return (
      <g>
        <motion.rect
          x={3}
          y={6}
          width={43}
          height={48}
          rx={3}
          fill="rgba(96, 165, 250, 0.10)"
          stroke="rgba(96, 165, 250, 0.30)"
          strokeWidth={0.3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.rect
          x={54}
          y={6}
          width={43}
          height={48}
          rx={3}
          fill="rgba(74, 222, 128, 0.10)"
          stroke="rgba(74, 222, 128, 0.30)"
          strokeWidth={0.3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </g>
    );
  }
  if (spec.kind === 'shared') {
    const tone = spec.tone ?? 'peach';
    return (
      <>
        {tone === 'evolutionary' && (
          <defs>
            <linearGradient id="evoGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255, 207, 171, 0.45)" />
              <stop offset="100%" stopColor="rgba(196, 181, 253, 0.5)" />
            </linearGradient>
          </defs>
        )}
        <motion.rect
          x={4}
          y={6}
          width={92}
          height={48}
          rx={4}
          fill={tone === 'evolutionary' ? 'url(#evoGradient)' : 'rgba(255, 207, 171, 0.45)'}
          stroke="rgba(255, 207, 171, 0.65)"
          strokeWidth={0.3}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: '50px 30px', transformBox: 'fill-box' }}
        />
      </>
    );
  }
  return (
    <>
      <motion.rect
        x={4}
        y={6}
        width={92}
        height={48}
        rx={4}
        fill="rgba(255, 207, 171, 0.45)"
        stroke="rgba(255, 207, 171, 0.65)"
        strokeWidth={0.3}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: '50px 30px', transformBox: 'fill-box' }}
      />
      <motion.rect
        x={22}
        y={14}
        width={56}
        height={32}
        rx={3}
        fill="rgba(191, 219, 254, 0.45)"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth={0.3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      {spec.zoneLabel && (
        <motion.text
          x={50}
          y={19}
          textAnchor="middle"
          fontSize={3}
          fill="#475569"
          fontWeight={600}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {spec.zoneLabel}
        </motion.text>
      )}
    </>
  );
};

const StageCanvas: React.FC<StageCanvasProps> = ({
  backdrop,
  nodes,
  edges = [],
  pills = [],
  particles = false,
}) => {
  const reduceMotion = useReducedMotion();

  const particleSeeds = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        return {
          x: 50 + Math.cos(angle) * (18 + (i % 4) * 3),
          y: 30 + Math.sin(angle) * (10 + (i % 3) * 2),
          dx: Math.cos(angle) * 4,
          dy: Math.sin(angle) * 3,
          delay: (i * 0.35) % 4,
          duration: 3 + (i % 3),
          size: 0.9 + (i % 3) * 0.3,
          hue: i % 2 === 0 ? '#a78bfa' : '#60a5fa',
        };
      }),
    []
  );

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div
        className="relative h-full max-w-full"
        style={{ aspectRatio: '5 / 3' }}
      >
        <svg
          viewBox="0 0 100 60"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <Backdrop spec={backdrop} />

          {edges.map((edge, i) => {
            const path = buildPath(edge.from, edge.to, edge.curve ?? 'straight');
            const stroke = COLOR_MAP[edge.color ?? 'blue'];
            return (
              <motion.path
                key={`edge-${i}`}
                d={path}
                fill="none"
                stroke={stroke}
                strokeWidth={edge.dashed ? 0.45 : 0.6}
                strokeDasharray={edge.dashed ? '1.4 1' : undefined}
                strokeLinecap="round"
                opacity={0.85}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{
                  duration: 0.9,
                  delay: edge.delay ?? 0.4 + i * 0.15,
                }}
              />
            );
          })}

          {!reduceMotion &&
            edges
              .filter((e) => e.animated)
              .map((edge, i) => {
                const stroke = COLOR_MAP[edge.color ?? 'blue'];
                const fwd = edge.animated === 'forward';
                return (
                  <motion.circle
                    key={`particle-${i}`}
                    r={0.9}
                    fill={stroke}
                    animate={{
                      cx: fwd
                        ? [edge.from.x, edge.to.x]
                        : [edge.to.x, edge.from.x],
                      cy: fwd
                        ? [edge.from.y, edge.to.y]
                        : [edge.to.y, edge.from.y],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 0.7 + i * 0.25,
                    }}
                  />
                );
              })}

          {!reduceMotion &&
            particles &&
            particleSeeds.map((s, i) => (
              <motion.circle
                key={`sparkle-${i}`}
                cx={s.x}
                cy={s.y}
                r={s.size}
                fill={s.hue}
                opacity={0.55}
                animate={{
                  cx: [s.x, s.x + s.dx, s.x],
                  cy: [s.y, s.y + s.dy, s.y],
                  opacity: [0, 0.85, 0],
                  scale: [0.5, 1.1, 0.5],
                }}
                transition={{
                  duration: s.duration,
                  repeat: Infinity,
                  delay: s.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
        </svg>

        <div className="absolute inset-0 pointer-events-none">
          {pills.map((pill, i) => (
            <motion.div
              key={`pill-${pill.position}-${i}`}
              className={cn(
                'absolute pointer-events-auto whitespace-nowrap text-[10px] sm:text-xs font-medium text-gray-700 bg-white/95 px-3 py-1.5 rounded-full shadow-sm border border-gray-100'
              )}
              style={{
                left: '50%',
                ...(pill.position === 'top'
                  ? { top: '6px' }
                  : { bottom: '6px' }),
                transform: 'translateX(-50%)',
              }}
              initial={{ opacity: 0, y: pill.position === 'top' ? -6 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              {pill.text}
            </motion.div>
          ))}

          {nodes.map((node, i) => (
            <motion.div
              key={`node-${node.id}`}
              className="absolute flex flex-col items-center"
              style={{
                left: `${node.x}%`,
                top: `${(node.y / 60) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
            >
              <NodeIcon kind={node.kind} pulse={node.pulse} />
              {node.label && (
                <div className="mt-2 px-2 py-0.5 bg-white/95 text-[10px] sm:text-xs font-medium text-gray-700 rounded-full shadow-sm border border-gray-100 whitespace-nowrap">
                  {node.label}
                </div>
              )}
              {node.caption && (
                <motion.div
                  className="mt-1 px-1.5 py-0.5 bg-blue-100/80 text-[10px] text-gray-700 rounded shadow-sm whitespace-nowrap"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                >
                  {node.caption}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StageCanvas;
