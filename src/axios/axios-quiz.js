import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-5498e.firebaseio.com/'
})