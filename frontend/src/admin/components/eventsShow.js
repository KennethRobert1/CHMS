import { useEffect } from "react";
import { useChurchContext } from "../Hooks/useChurchContext";

const EventsShow = () => {

    const {data, dispatch} = useChurchContext()

     useEffect(() => {
        
        const fetchEvents = async() => {
            const response = await fetch('http://localhost:4000/api/v1/events')
            const json = await response.json()     

            if(response.ok){
               dispatch({type: 'SET_DATA', payload: json})
            }

        }
        fetchEvents()
    }, [dispatch])

    return ( 
        <div className="show-all">
            <h3>Upcoming Events</h3>
            <div className="show-data">
                {data && data.map((data) => (
                    <div className="show-title"  key={data._id}>
                        <div className="s-title">
                            <p> <b>{data.title}</b> </p>
                        </div>

                        <div className="e-date">
                            <p>{data.date}</p>
                        </div>                    
                        
                    </div>
                      
        
                ))}
            </div>

           
        </div>

     );
}
 
export default EventsShow;