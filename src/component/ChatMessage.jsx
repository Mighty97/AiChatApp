import UserProfileImage from '../assets/user.jpg'

export function ChatMessage() {
  return (
    <div>
      hello chatbot
      <img src={UserProfileImage} width={45} alt="" />
    </div>
  )
}