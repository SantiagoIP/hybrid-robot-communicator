import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import StageCard from '@/components/StageCard';
import StageVisualization from '@/components/StageVisualization';
import StageDetail from '@/components/StageDetail';
import ProgressTracker from '@/components/ProgressTracker';
import References from '@/components/References';
import { ArrowRight, Users, Clock, Handshake, Layers, AlertCircle, Zap } from 'lucide-react';

const stages = ['cell', 'coexistence', 'synchronised', 'cooperation', 'collaboration', 'coevolution'];

const HomePage = () => {
  const [currentStage, setCurrentStage] = useState('cell');
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        return;
      }
      const index = stages.indexOf(currentStage);
      if (event.key === 'ArrowRight' && index < stages.length - 1) {
        event.preventDefault();
        setCurrentStage(stages[index + 1]);
      } else if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        setCurrentStage(stages[index - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStage]);

  const handleStageClick = (stage: string) => {
    setCurrentStage(stage);
  };

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'cell':
        return <Layers className="w-5 h-5" />;
      case 'coexistence':
        return <Users className="w-5 h-5" />;
      case 'synchronised':
        return <Clock className="w-5 h-5" />;
      case 'cooperation':
        return <ArrowRight className="w-5 h-5" />;
      case 'collaboration':
        return <Handshake className="w-5 h-5" />;
      case 'coevolution':
        return <Zap className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 20% 0%, rgba(147,197,253,0.45), transparent 60%), radial-gradient(ellipse 50% 50% at 85% 10%, rgba(167,243,208,0.45), transparent 65%), radial-gradient(ellipse 50% 50% at 50% 30%, rgba(196,181,253,0.35), transparent 70%)',
          backgroundSize: '200% 200%',
        }}
        animate={
          reduceMotion
            ? undefined
            : { backgroundPosition: ['0% 0%', '100% 50%', '0% 0%'] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 22, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      <motion.div
        className="relative pt-24 pb-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-human-darkGreen">Human</span>-<span className="text-robot-darkBlue">Robot</span> Collaboration in Teams
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-3">
              From isolated cells to co-evolving teams &mdash; the six stages of human&ndash;robot integration, read through a managerial lens.
            </p>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
              Pick a stage on the left to see what changes for the robot, the worker and the manager &mdash; in plain language, with the ethical questions that come with it.
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Tip: use the <kbd className="px-1.5 py-0.5 border border-gray-300 rounded text-[10px] font-mono">←</kbd> and <kbd className="px-1.5 py-0.5 border border-gray-300 rounded text-[10px] font-mono">→</kbd> keys to walk through the stages.
            </p>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProgressTracker 
              stages={stages} 
              currentStage={currentStage} 
              onStageClick={handleStageClick} 
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 gap-4">
                {stages.map((stage, index) => (
                  <StageCard
                    key={stage}
                    title={
                      stage === 'cell' 
                        ? 'Cell (Isolation)' 
                        : stage === 'coevolution'
                        ? 'Co-evolution'
                        : stage.charAt(0).toUpperCase() + stage.slice(1)
                    }
                    description={
                      stage === 'cell'
                        ? 'Robots and humans operate in completely separate spaces.'
                        : stage === 'coexistence'
                        ? 'Humans and robots share the same environment but work independently.'
                        : stage === 'synchronised'
                        ? 'Humans and robots share workspace but work at different times.'
                        : stage === 'cooperation'
                        ? 'Humans and robots work simultaneously on separate tasks.'
                        : stage === 'collaboration'
                        ? 'Humans and robots work together on the same task simultaneously.'
                        : 'Advanced integration where humans and robots evolve together, learning and adapting to each other.'
                    }
                    icon={getStageIcon(stage)}
                    isActive={currentStage === stage}
                    onClick={() => handleStageClick(stage)}
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl overflow-hidden h-full">
                <div
                  className="h-64 md:h-80 lg:h-96 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-white/50 relative"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait">
                    <StageVisualization
                      key={currentStage}
                      stage={currentStage}
                      isActive={true}
                    />
                  </AnimatePresence>
                </div>
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <StageDetail
                      key={currentStage}
                      stage={currentStage}
                      isActive={true}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="mb-8 glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding the Evolution</h2>
            <p className="text-gray-700 mb-4">
              The progression from isolated robotic cells to co-evolutionary human-robot teams reframes automation as an organisational question, not just a technical one. Each stage builds on the previous one — adding shared space, shared time, shared task, shared goal and finally shared learning between the human and the machine.
            </p>
            <p className="text-gray-700 mb-4">
              The first five stages follow the widely cited classification by Müller, Vette &amp; Mailahn (Procedia CIRP, 2016), refined by Benos, Bechar &amp; Bochtis (2020) and Bdiwi et al. (2017). The sixth stage — <em>co-evolution</em> — is the author's own contribution, originally introduced in Pavon (2023, KEDGE BS) as a managerial approach for hybrid human-machine teams in agribusiness, and visualised on this site as the natural extension of the Müller taxonomy inside the Industry 5.0 paradigm.
            </p>
            <p className="text-gray-700">
              Since the thesis was defended, the surrounding literature has converged on similar ideas — symbiotic HRC (Wang, 2020), human–AI coevolution (Pedreschi et al., 2024) and shared embodied cognition (Frontiers in AI, 2025) — which this site uses to triangulate the co-evolution stage. The lens stays managerial throughout: trust, communication and shared responsibility as the defining variables of the human-machine team, especially in sectors like agribusiness where the next generation of cobots will land first.
            </p>
          </motion.div>

          <div className="mb-12">
            <References />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
