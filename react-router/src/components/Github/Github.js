
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Akhtar432')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-white rounded-lg text-gray-500 p-4 text-3xl'>Github followers: {data.followers}
    <div className='flex justify-center'>
    <img className='rounded-lg mt-1' src={data.avatar_url} alt="Git userImg" width={300} />
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Akhtar432')
    return response.json()
}