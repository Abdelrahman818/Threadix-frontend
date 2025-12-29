'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { END_POINT } from '@/config';

import '@/styles/verify.css';

const page = () => {

  const router = useRouter();

  const [isVerified, setIsVerified] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const { token } = useParams();

  const activateUser = async () => {
    try {
      const res = await fetch(END_POINT.ACTIVATE_USER, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: 'include',
      });

      const json = await res.json();

      if (json.successful) {
        // Redirect to home page on success
        setTimeout(() => {
          router.push('/');
          router.refresh();
        }, 1000);
      } else {
        // If activation fails, redirect to signup
        setIsVerified(false);
        setErrMsg(json.msg || 'Verification failed');
        setTimeout(() => {
          router.push('/auth/signup');
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setIsVerified(false);
      setErrMsg('An error occurred during verification');
      setTimeout(() => {
        router.push('/auth/signup');
      }, 2000);
    }
  };

  useEffect(() => {
    if (!token) {
      setIsVerified(false);
      setErrMsg('No verification token provided');
      setTimeout(() => {
        router.push('/auth/signup');
      }, 2000);
      return;
    }

    fetch(END_POINT.VERIFY_USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.msg === "invalid or expired token" || !json.successful) {
          setIsVerified(false);
          setErrMsg(json.msg || 'Invalid or expired token');
          // Redirect to signup page on failure
          setTimeout(() => {
            router.push('/auth/signup');
          }, 2000);
        } else if (json.successful || json.msg === 'verified prev') {
          activateUser();
        }
      })
      .catch((error) => {
        console.error(error);
        setIsVerified(false);
        setErrMsg('An error occurred during verification');
        setTimeout(() => {
          router.push('/auth/signup');
        }, 2000);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
      className="verified w-50 flex justify-center items-center"
    >
      {!isVerified ? (
        <>
          <svg
            style={{
              height: "25rem",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="#D7D5CC"
              d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 384C302.3 384 288 398.3 288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416C352 398.3 337.7 384 320 384zM320 192C301.8 192 287.3 207.5 288.6 225.7L296 329.7C296.9 342.3 307.4 352 319.9 352C332.5 352 342.9 342.3 343.8 329.7L351.2 225.7C352.5 207.5 338.1 192 319.8 192z"
            />
          </svg>
          <h2 className="capitalize">{errMsg}</h2>
        </>
      ):(
        <div className="three-dots-loading">
          <div className="first dot"></div>
          <div className="second dot"></div>
          <div className="third dot"></div>
        </div>
      )}
    </div>
  );
}

export default page