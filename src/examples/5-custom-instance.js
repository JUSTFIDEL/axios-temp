import { useEffect } from 'react'
import axios from 'axios'
import authFetch from '../axios/custom'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
	const fetchData = async () => {
		try {
			const res1 = await authFetch('/react-store-products')
			const res2 = await axios(randomUserUrl)
			console.log(res1)
			console.log(res2)
		} catch (error) {
			console.log(error.res1)
			console.log(error.res2)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
