import { signIn, useSession, signOut } from "next-auth/react";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const session = useSession();

  return (
    <div className={styles.container}>
      {session.data ? (
        <div>
          Hello {session.data.user.name}{" "}
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button
          onClick={signIn}
          disabled={session.status !== "unauthenticated"}
        >
          Sign In
        </button>
      )}
    </div>
  );
}
