import AnnouncementsShow from '../components/announcementsShow';
import EventsShow from '../components/eventsShow';
import Metrics from '../components/metrics'


const Home = () => {
  return ( 
    <div className="home">
      
      {<Metrics/>}

      <div className="show-metrics">
        <div className="events-show">
           {< EventsShow/>}
        </div>

        <div className="announcements-show">
           {< AnnouncementsShow/>}
        </div>
        ``       
      </div>
    </div>
   );
}
 
export default Home;