import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { News } from '../../../components'

const news: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { query: { id, title } } = useRouter()

  return <News id={id as string} title={title as string} />
}

export default news
