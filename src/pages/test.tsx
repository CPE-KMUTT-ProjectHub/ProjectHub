import axios from 'axios'
import { useState } from 'react'

const Test: React.FC = (): JSX.Element => {
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
      <p>ID: {apiRes}</p>
      <input type="text" id="text" name="text" onChange={handleChange} />
      <button onClick={apiHandler}>click here</button>
    </div>
  )
}

export default Test
