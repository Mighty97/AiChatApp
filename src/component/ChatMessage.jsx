
import RobotProfileImage from '../assets/robot.jpg'
import UserProfileImage from '../assets/user.jpg'

export function ChatMessage({message, sender}) {
  return (
    <div>
      {sender ==='robot' && <img src={RobotProfileImage} alt="robot_image" width={45} />} 
      {message}
      {sender ==='user' && <img src={UserProfileImage} alt="Use_image" width={45} /> }
    </div>
  );
}
