import React from 'react';
import './User.css';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import EventIcon from '@material-ui/icons/Event';


const User = () => {
    return (
        <div className="user">
            <img src="./images/avatar2.jpg" alt='' className='user_avatar'/>
            <h1 className="user_name">Baya SEBIA</h1>
            <p className='user_profession' >Développeur Web</p>
            <div className='user_infos'>
                <p className='user_info' ><HomeIcon/> 1101 boulevard de la haute folie 14200 Hérouville Saint Clair</p>
                <p className='user_info'>
                    <a href='tel:+33758473600'><PhoneIphoneIcon/> 0758473600</a>
                </p>
                <p className='user_info'>
                    <a href='mailto:sebia.baya@gmail.com'><MailIcon/> sebia.baya@gmail.com</a>
                </p>
                <p className='user_info' ><EventIcon/>  Date de naissance: 03 juin 1994</p>
            </div>
        </div>
    );
};

export default User;