import React,{Fragment} from 'react'
import { useSelector } from 'react-redux'


const Profile=()=>{
    const {user,loading} =useSelector(state=>state.auth)

    return <Fragment>
        <h2>Sam</h2>
    </Fragment>

}

export default Profile