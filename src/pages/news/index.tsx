import { useRouter } from 'next/router'
import { useEffect } from 'react'

const news: React.FC = () => {
  const { push } = useRouter()

  useEffect(() => {
    console.log('entrou')
    push('/')
  }, [])

  return <></>
}

export default news
