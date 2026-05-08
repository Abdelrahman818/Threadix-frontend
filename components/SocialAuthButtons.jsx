'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '@/lib/socialAuth';
import { useUser } from '@/context/UserContext';
import styles from '@/styles/social-auth.module.css';

const providerHandlers = {
  google: signInWithGoogle,
};

export default function SocialAuthButtons({ mode = 'signup', onError }) {
  const router = useRouter();
  const { refreshUser, refreshCart } = useUser();
  const [activeProvider, setActiveProvider] = useState('');

  const handleSocialAuth = async (provider) => {
    setActiveProvider(provider);
    onError?.('');

    try {
      await providerHandlers[provider]();
      await refreshUser();
      await refreshCart();
      router.push('/');
      router.refresh();
    } catch (error) {
      onError?.(error.message || 'Social sign in failed. Please try again.');
    } finally {
      setActiveProvider('');
    }
  };

  const actionText = mode === 'login' ? 'Continue with' : 'Sign up with';
  const isBusy = Boolean(activeProvider);

  return (
    <div className={styles.socialAuth}>
      <div className={styles.socialButtons}>
        <button
          type="button"
          className={styles.socialButton}
          onClick={() => handleSocialAuth('google')}
          disabled={isBusy}
        >
          <span className={styles.googleMark}>G</span>
          {activeProvider === 'google' ? 'Connecting...' : `${actionText} Google`}
        </button>
      </div>

      <div className={styles.divider}>
        <span>or</span>
      </div>
    </div>
  );
}
