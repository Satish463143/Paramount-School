import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTrackMutation } from '../../api/page.api'

const AnalyticsTracker = () => {
  const location = useLocation()
  const [track, {isLoading}] = useTrackMutation()
  
  // Get logged in user from Redux store
  const loggedInUser = useSelector((state) => state.user?.loggedInUser)

  useEffect(()=>{
      // Use actual user ID if logged in, otherwise generate guest ID
      const userId = loggedInUser?._id || null
      const page = location.pathname
      const sessionId = generateSessionId()
      const referrer = document.referrer || null
      const device = getDeviceType()
      const startTime = Date.now()

      const sendAnalytics = async()=>{
        const duration = Math.round((Date.now()-startTime)/1000) //second
        try{
          await track({userId, page,sessionId, duration, referrer, device}).unwrap()
        }catch(error){
          console.log(error)
        }
      }

      // Send analytics on page load
      sendAnalytics()

      // Add event listener for page unload
      window.addEventListener('beforeunload', sendAnalytics)
      
      return ()=>{
        window.removeEventListener('beforeunload', sendAnalytics)
      }
  },[location, track, loggedInUser])

  return null;
}

//helper functions

const generateGuestId = ()=>{
  let id = localStorage.getItem('guestId');
  if(!id){
    id = Math.random().toString(36).substring(2,15);
    localStorage.setItem('guestId', id);
  }
  return id;
}

const generateSessionId = ()=>{
  let session = sessionStorage.getItem('sessionId');
  if(!session){
    session = "sess__" + Math.random().toString(36).substring(2,15);
    sessionStorage.setItem('sessionId', session);
  }
  return session;
}

const getDeviceType = ()=>{
  const userAgent = navigator.userAgent.toLowerCase()
  if(/mobile|tablet|ip(ad|od|hone)|android|blackberry|mini|windows\sce|palm/i.test(userAgent)){
    return 'mobile';
  }else if(/ipad|macintosh/i.test(userAgent)){
    return 'tablet';
  }else{
    return 'desktop';
  }
}


export default AnalyticsTracker