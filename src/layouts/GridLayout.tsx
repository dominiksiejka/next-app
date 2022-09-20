import type { FC, ReactNode } from 'react'

interface GridLayoutProps {
  children: ReactNode
}

export const GridLayout: FC<GridLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 text-center max-w-7xl mx-auto">
      {children}
    </div>
  )
}
