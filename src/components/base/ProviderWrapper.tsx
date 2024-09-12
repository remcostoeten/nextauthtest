'use client'

import { TooltipProvider } from '@/components/ui'
import { Toaster } from 'react-hot-toast'

type ProviderWrapperProps = {
    children: React.ReactNode
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
    return (
        <TooltipProvider>
            {children}
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                    success: {
                        iconTheme: {
                            primary: '#10B981',
                            secondary: '#333',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#EF4444',
                            secondary: '#333',
                        },
                    },
                    loading: {
                        iconTheme: {
                            primary: '#3B82F6',
                            secondary: '#333',
                        },
                    },
                }}
            />
        </TooltipProvider>
    )
}

