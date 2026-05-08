# Firebase Social Auth Setup

## Frontend

Create `D:\VSCode\Web-dev\Front-end\Projects\Threadix\.env.local` with values from Firebase Console:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Backend

Add these values to `D:\VSCode\Web-dev\Back-end\nodeJS\threadix\.env` from a Firebase service account:

```env
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Enable Google and Facebook sign-in providers in Firebase Authentication. For Facebook, create a Meta developer app and paste its App ID and App Secret into the Firebase provider settings.
