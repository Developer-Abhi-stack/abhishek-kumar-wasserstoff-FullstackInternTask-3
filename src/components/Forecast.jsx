import Cloud_Sun_Icon from '../assets/cloud-sun-icon.png'

const Forecast = () => {
    const data = [1, 2, 3, 4, 5]
  return (
    <div>
      <div className="flex justify-start items-center mt-6">
        <p className="font-medium uppercase"> 3 hour step forecast</p>
        
      </div>
      <hr  className="my-1"/>
      <div className="flex items-center justify-between">
        {
            data.map((data, index)=> (
                <div key={index} className="flex items-center flex-col justify-center"> 
                <p  className='font-light text-sm'>Mon</p>
                <img src={Cloud_Sun_Icon} alt="Cloud_Sun_Icon" className='size-5' />
                <p className='font-medium'>12°C</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Forecast
