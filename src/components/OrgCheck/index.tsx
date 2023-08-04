import { CHECK_USER_PERMISSION, GET_GITHUB_USERNAME } from '@/constants/octokit-request'
import { FORBIDDEN_PAGE } from '@/constants/route'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  element: JSX.Element
}

const OrgCheck: React.FC<Props> = ({ element }): JSX.Element => {
  const location = useRouter()

  const { data: userData } = useSession()

  const [username, setUsername] = useState<string>('')

  const isAuthenticated = !!userData

  const getGithubUsername = async <T extends string | null | undefined>(email: T): Promise<void> => {
    if (typeof email === 'string') {
      const { data } = await axios.get(GET_GITHUB_USERNAME.replace('{email}', email))
      setUsername(data.username)
    }
  }

  const checkUserPermission = useCallback(
    async (username: string): Promise<void> => {
      if (typeof username === 'string' && username) {
        const { data } = await axios.get(CHECK_USER_PERMISSION.replace('{username}', username))
        if (data.status === 403) location.push(FORBIDDEN_PAGE)
      }
    },
    [location]
  )

  useEffect(() => {
    if (isAuthenticated) {
      getGithubUsername(userData.user?.email)
      checkUserPermission(username)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, username])

  return element
}

export default OrgCheck
