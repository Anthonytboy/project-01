import RingLoader from 'react-spinners/RingLoader'

const override = {
  display: 'block',
  margin: '100px auto'

}

const Spinner = ({loading}) => {
  return (
   <RingLoader
      color='#3327ca'
      loading={loading}
      cssOverride={override}
      size={100}
   
   />
  )
}

export default Spinner