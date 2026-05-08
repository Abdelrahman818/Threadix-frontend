import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { END_POINT } from '@/config';
import { getFirebaseAuth } from '@/lib/firebase';

function getFriendlyFirebaseError(error) {
  switch (error?.code) {
    case 'auth/email-already-in-use':
      return 'An account already exists with this email. Try logging in instead.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Email or password is incorrect.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/popup-closed-by-user':
      return 'Sign in was cancelled before it finished.';
    case 'auth/account-exists-with-different-credential':
      return 'This email already uses another sign-in method.';
    default:
      return error?.message || 'Authentication failed. Please try again.';
  }
}

async function createBackendSession({ idToken, name }) {
  const res = await fetch(END_POINT.SOCIAL_AUTH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ idToken, name }),
  });

  const json = await res.json();

  if (!res.ok || !json.successful) {
    throw new Error(json.msg || 'Authentication failed');
  }

  return json;
}

async function signInWithProvider(provider) {
  try {
    const auth = getFirebaseAuth();
    const credential = await signInWithPopup(auth, provider);
    const idToken = await credential.user.getIdToken();

    return createBackendSession({ idToken });
  } catch (error) {
    throw new Error(getFriendlyFirebaseError(error));
  }
}

export function signInWithGoogle() {
  return signInWithProvider(new GoogleAuthProvider());
}

export async function signUpWithEmail({ name, email, password }) {
  try {
    const auth = getFirebaseAuth();
    const credential = await createUserWithEmailAndPassword(auth, email, password);

    if (name) {
      await updateProfile(credential.user, { displayName: name });
    }

    const idToken = await credential.user.getIdToken(true);
    return createBackendSession({ idToken, name });
  } catch (error) {
    throw new Error(getFriendlyFirebaseError(error));
  }
}

export async function loginWithEmail({ email, password }) {
  try {
    const auth = getFirebaseAuth();
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await credential.user.getIdToken();

    return createBackendSession({ idToken });
  } catch (error) {
    throw new Error(getFriendlyFirebaseError(error));
  }
}
