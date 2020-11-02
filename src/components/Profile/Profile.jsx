import React from 'react';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <section className="profile">
      <div>
        <img src="https://www.donnashape.com/33840-medium_default/hot-girl-body.jpg" alt="hot-girl"/>
      </div>
      <div>
        <img src="https://sc02.alicdn.com/kf/HTB1yA_abXzsK1Rjy1Xbq6xOaFXaA.jpg" alt="hot-girl"/>
      </div>
      <Posts/>
    </section>
  )
}

export default Profile;