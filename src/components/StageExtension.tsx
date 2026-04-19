import React from 'react';
import { motion } from 'framer-motion';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Lightbulb, HelpCircle, ListChecks, CheckSquare } from 'lucide-react';

export type EthicsQuestion = {
  theme: 'Trust' | 'Communication' | 'Responsibility' | 'Autonomy';
  question: string;
};

export type StageExtensionData = {
  analogy: {
    summary: string;
    feels: string;
  };
  ethics: EthicsQuestion[];
  checklist: string[];
};

type Props = StageExtensionData & {
  stage: string;
};

const themeColor: Record<EthicsQuestion['theme'], string> = {
  Trust: 'bg-blue-100 text-blue-700 border-blue-200',
  Communication: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Responsibility: 'bg-amber-100 text-amber-700 border-amber-200',
  Autonomy: 'bg-purple-100 text-purple-700 border-purple-200',
};

const StageExtension: React.FC<Props> = ({
  stage,
  analogy,
  ethics,
  checklist,
}) => {
  return (
    <motion.section
      className="mt-6 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      aria-label="Manager and ethics lens for this stage"
    >
      <Tabs defaultValue="analogy" key={stage}>
        <TabsList className="w-full grid grid-cols-3 h-auto bg-gray-100/80 p-1 rounded-lg">
          <TabsTrigger
            value="analogy"
            className="flex items-center gap-1.5 text-xs sm:text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-gray-900"
          >
            <Lightbulb className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">In plain language</span>
            <span className="sm:hidden">Plain</span>
          </TabsTrigger>
          <TabsTrigger
            value="ethics"
            className="flex items-center gap-1.5 text-xs sm:text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-gray-900"
          >
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Ethics &amp; questions</span>
            <span className="sm:hidden">Ethics</span>
          </TabsTrigger>
          <TabsTrigger
            value="checklist"
            className="flex items-center gap-1.5 text-xs sm:text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-gray-900"
          >
            <ListChecks className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Manager checklist</span>
            <span className="sm:hidden">Checklist</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analogy" className="mt-4 focus-visible:outline-none">
          <motion.div
            key={`${stage}-analogy`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              {analogy.summary}
            </p>
            <div className="flex items-start gap-2 bg-blue-50/70 border border-blue-100 rounded-lg p-3">
              <Lightbulb
                className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm text-gray-700 italic">
                <span className="font-semibold not-italic text-blue-700">
                  What it feels like for the worker:{' '}
                </span>
                {analogy.feels}
              </p>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="ethics" className="mt-4 focus-visible:outline-none">
          <motion.ul
            key={`${stage}-ethics`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2.5"
          >
            {ethics.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-gray-50/80 rounded-lg p-3 border border-gray-100"
              >
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded border flex-shrink-0 ${themeColor[item.theme]}`}
                >
                  {item.theme}
                </span>
                <p className="text-sm text-gray-700 leading-snug">
                  {item.question}
                </p>
              </li>
            ))}
          </motion.ul>
        </TabsContent>

        <TabsContent
          value="checklist"
          className="mt-4 focus-visible:outline-none"
        >
          <motion.ul
            key={`${stage}-checklist`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {checklist.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-700"
              >
                <CheckSquare
                  className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </TabsContent>
      </Tabs>
    </motion.section>
  );
};

export default StageExtension;
