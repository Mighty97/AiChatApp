
import RobotProfileImage from '../assets/robot.jpg'
import UserProfileImage from '../assets/user.jpg'
import './ChatMessage.css'

export function ChatMessage({message, sender}) {
  return (
    <div className='chat-messages-container' >
      <div className={sender === 'user'? 'chat-user-message' : 'chat-robot-message'} >
      {sender ==='robot' && <img src={RobotProfileImage} alt="robot_image" className='chat-profile-picture'  />} 
      <div className='chat-messages'>
        {message}
      </div>
      {sender ==='user' && <img src={UserProfileImage} alt="Use_image" className='chat-profile-picture'  /> }
    </div>
    </div>
  );
}
