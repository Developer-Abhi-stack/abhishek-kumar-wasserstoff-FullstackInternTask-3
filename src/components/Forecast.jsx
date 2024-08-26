import Cloud_Sun_Icon from '../assets/cloud-sun-icon.png'

const Forecast = ({title, data}) => {
    
  return (
    <div>
      <div className="flex justify-start items-center mt-6">
        <p className="font-medium uppercase">{title}</p>
        
      </div>
      <hr  className="my-1"/>
      <div className="flex items-center justify-between">
        {
            data.map((d, index)=> (
                <div key={index} className="flex items-center flex-col justify-center"> 
                <p  className='font-light text-sm'>{d.title}</p>
                <img src={d.icon} alt="Cloud_Sun_Icon" className='size-5' />
                <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Forecast
