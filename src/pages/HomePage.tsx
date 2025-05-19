
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar';
import StageCard from '@/components/StageCard';
import StageVisualization from '@/components/StageVisualization';
import StageDetail from '@/components/StageDetail';
import ProgressTracker from '@/components/ProgressTracker';
import References from '@/components/References';
import { ArrowRight, Users, Clock, Handshake, Layers, AlertCircle, Zap, Book } from 'lucide-react';

const stages = ['cell', 'coexistence', 'synchronised', 'cooperation', 'collaboration', 'coevolution'];

const HomePage = () => {
  const [currentStage, setCurrentStage] = useState('cell');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="gradient-heading mb-4">
              <span className="text-human-darkGreen">Human</span>-<span className="text-robot-darkBlue">Robot</span> Collaboration in Teams
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-3">
              Explore the evolution of human-robot collaboration from isolated operation to seamless integration.
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto">
              This model illustrates the progression of human-robot interaction, from completely separate workspaces to collaborative environments where humans and robots work together on shared tasks.
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
              <div className="glass-card rounded-xl overflow-hidden h-full interactive-card">
                <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-white/50 relative">
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
            className="mb-8 glass-card p-6 rounded-xl interactive-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 gradient-heading">Understanding the Evolution</h2>
            <p className="text-gray-700 mb-4">
              The progression from isolated robotics to co-evolutionary human-robot teams represents a significant evolution in automation technology. Each stage builds upon the previous one, enabling more sophisticated interactions and greater productivity.
            </p>
            <p className="text-gray-700 mb-4">
              As sensors, artificial intelligence, and robot design continue to advance, we're seeing increasingly seamless integration between humans and machines. The final co-evolution stage enables truly synergistic workflows where robots and humans not only collaborate but also evolve and adapt together over time.
            </p>
            <p className="text-gray-700">
              This model provides a framework for understanding not only the current state of human-robot integration in various industries but also the potential future developments in this rapidly evolving field.
            </p>
          </motion.div>

          <div className="mb-12">
            <References />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
