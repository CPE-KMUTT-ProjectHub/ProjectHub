import { FORBIDDEN_PAGE } from '@/constants/route'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

type Props = {
  element: JSX.Element
}

const OrgCheck: React.FC<Props> = ({ element }): JSX.Element => {
  const location = useRouter()

  const [username, setUsername] = useState<string>('')
  const { data: userData } = useSession()

  const isAuthenticated = !!userData

  const getGithubUsername = async <T extends string | null | undefined>(email: T): Promise<void> => {
    if (typeof email === 'string') {
      const { data } = await axios.get(`/api/github/user?email=${email}`)
      setUsername(data.username)
    }
  }

  const checkUserPermission = async (username: string): Promise<void> => {
    if (typeof username === 'string' && username) {
      const { data } = await axios.get(`/api/github/permission?username=${username}`)
      if (data === 'Forbidden') location.push(FORBIDDEN_PAGE)
    }
  }

  const checkSessionPermission = <T extends JSX.Element>(element: T): T => {
    getGithubUsername(userData?.user?.email)
    checkUserPermission(username)
    return element
  }

  const bypassPermission = <T extends JSX.Element>(element: T) => {
    return element
  }

  if (isAuthenticated) return checkSessionPermission(element)
  else return bypassPermission(element)
}

export default OrgCheck
