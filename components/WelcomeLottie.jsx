'use client';

import welcomAnimation from '@/animations/welcome.json';
import Lottie from 'lottie-react';

const WelcomeLottie = () => {
  return (
    <Lottie animationData={welcomAnimation} loop={true} />
  )
}

export default WelcomeLottie