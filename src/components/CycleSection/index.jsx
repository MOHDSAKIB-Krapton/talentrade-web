import { motion } from 'framer-motion';
import { LogIn, UserPlus, BookOpen, Bell, Video, Coins, GraduationCap } from 'lucide-react';

const elements = [
  {
    title: 'Sign Up',
    description: 'Create your account and join the TalentTrade community.',
    icon: LogIn,
    color: '#8CC63F'
  },
  {
    title: 'Set Up Profile',
    description: 'List your skills to teach and skills you want to learn.',
    icon: UserPlus,
    color: '#29ABE2'
  },
  {
    title: 'Offer to Teach',
    description: 'Share your expertise by offering to teach your skills.',
    icon: BookOpen,
    color: '#39B54A'
  },
  {
    title: 'Accept Requests',
    description: 'Engage with learners by accepting teaching requests.',
    icon: Bell,
    color: '#FBB03B'
  },
  {
    title: 'Teach',
    description: 'Conduct teaching sessions and share your knowledge.',
    icon: Video,
    color: '#FF00FF'
  },
  {
    title: 'Earn Coins',
    description: 'Get rewarded with TalentTrade coins for your teaching.',
    icon: Coins,
    color: '#FF6600'
  },
  {
    title: 'Learn',
    description: 'Use your earned coins to learn new skills from others.',
    icon: GraduationCap,
    color: '#9E005D'
  }
];

export default function TalentTradeCycle() {
  return (
    <>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-20 mt-10 text-center">How TalentTrade Works</h1>
    <div className=" min-h-screen flex flex-col items-center justify-center p-4 mb-20">
    
      <div className="relative w-full max-w-lg aspect-square">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {elements.map((element, index) => {
            const angle = (index / elements.length) * 2 * Math.PI - Math.PI / 2;
            const x = 50 + 35 * Math.cos(angle); // Adjusted radius
            const y = 50 + 35 * Math.sin(angle);
            const startAngle = (index / elements.length) * 360;
            const endAngle = ((index + 1) / elements.length) * 360;

            return (
              <g key={index}>
                <motion.path
                  d={`M50,50 L${50 + 35 * Math.cos(startAngle * Math.PI / 180)},${50 + 35 * Math.sin(startAngle * Math.PI / 180)} 
                  A35,35 0 0,1 ${50 + 35 * Math.cos(endAngle * Math.PI / 180)},${50 + 35 * Math.sin(endAngle * Math.PI / 180)}`}
                  fill="none"
                  stroke={element.color}
                  strokeWidth="6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                <circle cx={x} cy={y} r="8" fill="white" stroke={element.color} strokeWidth="2" />
              </g>
            );
          })}
        </svg>

        {/* Floating Icon Elements */}
        {elements.map((element, index) => {
          const angle = (index / elements.length) * 2 * Math.PI - Math.PI / 2;
          const x = 35 + 60 * Math.cos(angle); // Adjust radius for element positioning
          const y = 33 + 60 * Math.sin(angle);

          return (
            <motion.div
              key={index}
              className="absolute w-40 text-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + 1 }}
            >
              <div className="bg-white rounded-full p-3 shadow-lg mb-2 inline-block">
                <element.icon className="w-6 h-6" style={{ color: element.color }} />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-1">{element.title}</h2>
              <p className="text-xs md:text-sm text-gray-600">{element.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
    </>
  );
}
