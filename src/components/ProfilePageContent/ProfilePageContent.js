import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import "./ProfilePageContent.css"
import pencil from "../../assets/pencil.svg"
import CakeIcon from '@mui/icons-material/Cake';
import MailIcon from '@mui/icons-material/Mail';
import EditProfile from '../EditProfile/EditProfile';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ProfilePageContent = ({user,setUser}) => {
    const [editProfile,setEditProfile] = useState(false);
    const [userInfo,setUserInfo] = useState()
    const [avatarSize,setAvatarSize] = useState("128")
    const {userId} = useParams()
    useEffect(() => {
        const media1 = window.matchMedia('(max-width: 840px)');
        const media2 = window.matchMedia('(max-width: 640px)');
        const listener = () => setAvatarSize(()=>{

            if(media2.matches){
                return "96"
            }
            else if(media1.matches){
                return "64"
            }
            else{
                return "128"
            }

        });
        listener();
        window.addEventListener('resize', listener);
         
        async function getUser(userId){
            let res = await axios.post("https://stackoverflow-server-16ku.onrender.com/getUser",{userId})
            if(res.status==200){
                let joinedOn = res.data.data.joinedOn; 
                let today = new Date()
                let memberShip = Math.abs(today - joinedOn);
              setUserInfo({...res.data.data,memberShip})
            }
            else{
              alert(res.data.message)
            }
             }
            
             getUser(userId);

        return () => window.removeEventListener('resize', listener);


    }, [userId])
    

    return (<>

      {
        userInfo && 
       <div className='profile-page-container'>
            <div className='profile-header'>

                <div className='user-details-container'>
                    {/* Avatar */}
                    <Avatar backgroundColor="#009dff" color="white" width={avatarSize} height={avatarSize}>
                        <span style={{ fontSize:avatarSize/2+"px"  }}>
                            {userInfo?.name?.slice(0,1)?.toUpperCase()}
                        </span>
                    </Avatar>
                    {/* User Detaisl */}
                    <div className='user-details'>
                        <div className='name-header'>
                            <h1>
                                {userInfo.name}

                            </h1>

                        </div>

                        <div style={{display:"flex"}}>

                        <div className='mute'>
                            <CakeIcon sx={{ width: "18px", height: "18px", color: "hsl(210deg 8% 60%)", marginRight: "4px" }} />

                            {
                                userInfo.memberShip >0 ? `Member for ${userInfo.memberShip} ${userInfo.memberShip==1 ? "day" : "days"}` :"Member since today"
                            }
                        </div>
                        <div className='mute'>
                            <MailIcon sx={{ width: "18px", height: "18px", color: "hsl(210deg 8% 60%)", marginRight: "4px" }} />
                            {userInfo.email}
                        </div>
                        </div>




                    </div>


                </div>

             {
                user?.data?.userId ==userId && <button className='edit-profile-btn' onClick={()=>setEditProfile(prev => !prev)}>
                    <img className='edit-pencil-logo' src={pencil} alt="pencil-logo" width="14" height="14" />  Edit Profile
                </button>
           
          
             } 
            </div>
           

           
                {/* Edit Profile */}

             {
                editProfile &&  <EditProfile  setUserInfo={setUserInfo} setEditProfile={setEditProfile} user={user} setUser={setUser} />
             }  
        </div>
      } 
      
    </>

    )
}

export default ProfilePageContent