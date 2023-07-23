import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ReactNode, useCallback, useEffect, useState } from 'react'

type Props = {
  children?: ReactNode
}

const OrgCheck: React.FC<Props> = ({ children }): JSX.Element => {
  const router = useRouter()

  const [username, setUsername] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(true)
  const { data: userData } = useSession()

  const getGithubUsername = async <T extends string | null | undefined>(email: T): Promise<void> => {
    if (typeof email === 'string') {
      const { data } = await axios.get(`/api/github/user?email=${email}`)
      setUsername(data.username)
    }
  }

  const checkPermission = useCallback(
    async (username: string): Promise<void> => {
      if (typeof username === 'string' && username) {
        const { data } = await axios.get(`/api/github/permission?username=${username}`)
        if (data === 'Forbidden') router.push('/403')
        setLoading(false)
      }
    },
    [router]
  )

  useEffect(() => {
    getGithubUsername(userData?.user?.email)
    checkPermission(username)
  }, [userData?.user?.email, username, checkPermission])

  if (isLoading) return <div>Loading</div>

  return <div>{children}</div>
}

export default OrgCheck
