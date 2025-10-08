
import RobotProfileImage from '../assets/robot.jpg'
import UserProfileImage from '../assets/user.jpg'

export function ChatMessage({message, sender}) {
  return (
    <>
      {sender ==='robot' && <img src={RobotProfileImage} alt="robot_image" />} 
      {message}
      {sender ==='user' && <img src={UserProfileImage} alt="Use_image" /> }
    </>
  );
}
