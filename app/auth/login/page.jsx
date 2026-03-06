'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Lottie from "lottie-react";
import loginAnimation from "@/animations/login_animation.json";
import { END_POINT } from "@/config";
import { useUser } from "@/context/UserContext";

import styles from "@/styles/login.module.css";

export default function Login() {
  const router = useRouter();
  const { refreshUser, refreshCart } = useUser();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch(END_POINT.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.successful) {
        // Refresh user and cart state before redirecting
        await refreshUser();
        await refreshCart();

        // Redirect to home page on success
        router.push('/');
        router.refresh();
      } else {
        setErrorMessage(json.msg || 'Login failed. Please check your credentials.');
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-container']}>

        {/* Form Section */}
        <div className={styles['login-form-section']}>
          <h2>Welcome Back</h2>
          <p>Login to access your Threadix account</p>

          <form className={styles['login-form']} onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles['form-group']}>
              <label>Password</label>
              <input
                type="password"
                name="pwd"
                placeholder="Enter your password"
                value={formData.pwd || ''}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles['login-btn']}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles['btn-loading']}>
                  <span className={styles['spinner']}></span>
                  Logging In...
                </span>
              ) : (
                'Login'
              )}
            </button>

            {errorMessage && (
              <div className={styles['error-message']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V7h2v4z" fill="#ef4444" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}
          </form>

          <p className={styles['login-bottom-text']}>
            Don't have an account? <Link href="/auth/signup">Sign Up</Link>
          </p>
        </div>

        {/* Animation Section */}
        <div className={`${styles['login-animation-section']} w-1/2`}>
          <Lottie animationData={loginAnimation} loop={true} />
        </div>

      </div>
    </div>
  );
}
