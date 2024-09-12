'use client';

import { useSession } from 'next-auth/react';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const { data: session, status } = useSession();
    const [userEmail, setUserEmail] = useState(email);

    useEffect(() => {
        if (status === 'unauthenticated') {
            redirect('/login');
        }
        if (session?.user?.email) {
            setUserEmail(session.user.email);
        }
    }, [status, session]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
            <p className="text-xl">Hi, {userEmail}!</p>
        </div>
    );
}
