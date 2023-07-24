'use client'

import axios from 'axios'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Test: React.FC = (): JSX.Element => {
  const { data: userData, status } = useSession()
  const [apiRes, setApiResponse] = useState<number>(0)
  const [text, setText] = useState<string>('')

  const isAuthenticated = status === 'authenticated'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const apiHandler = async () => {
    const { data } = await axios.post('/api/test', {
      text,
    })

    setApiResponse(data.id)
  }

  if (status === 'loading') return <div></div>

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h3>Welcome, {userData?.user?.name}</h3>
          {userData?.user?.image && (
            <Image src={userData.user.image} width={250} height={250} alt="image" className="rounded-full" />
          )}
          <p>ID: {apiRes}</p>
          <input type="text" id="text" name="text" onChange={handleChange} />
          <button onClick={apiHandler}>click here</button>
          <div>
            {userData ? (
              <button onClick={() => signOut()}>sign out</button>
            ) : (
              <button onClick={() => signIn()}>sign in</button>
            )}
          </div>
        </>
      ) : (
        <div>User is not sign in</div>
      )}
    </div>
  )
}

export default Test
