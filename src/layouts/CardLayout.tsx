import type { FC, ReactNode } from 'react'

interface CardLayoutProps {
  children: ReactNode
}

export const CardLayout: FC<CardLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg ring-1 ring-gray-200 shadow-md overflow-hidden">
      {children}
    </div>
  )
}
