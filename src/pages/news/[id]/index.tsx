import { useEffect } from 'react'
import { useRouter } from 'next/router'

const id: React.FC = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/')
  }, [])

  return <></>
}

export default id
