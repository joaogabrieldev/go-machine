const fetcher = (...args) => fetch(...args).then(res => res.json())

const baseUrl = process.env.REACT_APP_API

export default fetcher

export {
  baseUrl
}