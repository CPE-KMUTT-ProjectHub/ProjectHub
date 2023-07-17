'use client'

import axios from 'axios'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const MOCK_UP_IMAGE_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLp4L3veZJOIdsquJBilO9p9MnEf1qO1QBIQ&usqp=CAU'

const Test: React.FC = (): JSX.Element => {
  const { data } = useSession()
  const [apiRes, setApiResponse] = useState<number>(0)
  const [text, setText] = useState<string>('')

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

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <h3>Welcome, {data?.user?.name}</h3>
      <img src={data?.user?.image ?? MOCK_UP_IMAGE_URL} alt="image" className="rounded-full" />
      <p>ID: {apiRes}</p>
      <input type="text" id="text" name="text" onChange={handleChange} />
      <button onClick={apiHandler}>click here</button>
      <div>
        {data ? <button onClick={() => signOut()}>sign out</button> : <button onClick={() => signIn()}>sign in</button>}
      </div>
    </div>
  )
}

export default Test
