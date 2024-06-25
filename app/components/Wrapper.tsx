import type { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
  return <div className="w-96 h-96 bg-white shadow-md">{children}</div>
}

export default Wrapper
