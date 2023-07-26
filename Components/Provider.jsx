'use client';
/**
 * Provider Component:
 *
 * This component serves as a wrapper for providing the session data obtained from the NextAuth `useSession` hook
 * to its child components. It utilizes the `SessionProvider` component from `next-auth/react` to pass the session
 * data as a prop to the children. By using this `Provider` component, child components can access the session data
 * and authentication state throughout the application without the need to call `useSession` separately in each child.
 *
 * Props:
 * - children (ReactNode): The child components that will receive the session data from the `Provider`.
 * - session (object): The session object containing user authentication data obtained from the NextAuth `useSession` hook.
 */

import { SessionProvider } from 'next-auth/react';

const Provider = ({ children, session }) => {
    return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
