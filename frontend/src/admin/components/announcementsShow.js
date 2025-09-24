import { useEffect } from "react";
import { useChurchContext } from "../Hooks/useChurchContext";

const AnnouncementsShow = () => {

    const {data, dispatch} = useChurchContext()

     useEffect(() => {
        
        const fetchAnouncement = async() => {
            const response = await fetch("http://localhost:4000/api/v1/announcements")
            const json = await response.json()     

            if(response.ok){
               dispatch({type: 'SET_DATA', payload: json})
            }

        }
        fetchAnouncement()
    }, [dispatch])

    return ( 
        <div className="show-all">
            <h3>Upcoming Announcements</h3>
            <div className="show-data">
                {data && data.map((data) => (
                    <div className="show-title"  key={data._id}>
                        <div className="s-title">
                            <p> {data.title} </p>
                        </div>
                        <div className="s-date">
                            <p>{data.day}</p>
                        </div>
                        
                        
                    </div>
                      
        
                ))}
            </div>

           
        </div>

     );
}
 
export default AnnouncementsShow;