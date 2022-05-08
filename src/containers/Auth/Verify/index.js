import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../api/axiosClient'
import { openErrorNotifyModal, openSuccessNotifyModal } from '../../../utils/notifyModal'
import {useIntl} from 'react-intl';
import { Modal } from 'antd'

const Verify = props => {
    const params = useParams();
    const navigate = useNavigate();
    const code = params.id.split('+mail:')[0];
    const email = params.id.split('+mail:')[1];
    const intl = useIntl();

    const sendNewCode = async(e)=>{
        Modal.destroyAll();
        e.preventDefault();
        try {
            const res = await axiosClient.post(`/account/verify/newCode`,{
                email
            });
            if(res.success){
                openSuccessNotifyModal({
                    title: intl.formatMessage({id: 'response.message.title.new-verify-code'}),
                content: intl.formatMessage({id: 'response.message.content.new-verify-code'}),
                })
                navigate('/');
            }
            
        } catch (error) {
            openErrorNotifyModal({
                title: intl.formatMessage({id: 'response.message.title.has-error'}),
                content: intl.formatMessage({id: 'response.message.content.has-error'}),
            })
            navigate('/');

        }
    }

    useEffect(() => {
        const FetchVerify = async()=>{
            try {
                const res = await axiosClient.get(`/account/verify/${code}`);
                if(res.success){
                    openSuccessNotifyModal({
                        title: intl.formatMessage({id: 'response.message.title.verify-code'}),
                        content: intl.formatMessage({id: 'response.message.content.verify-code'}),
                    })
                    navigate('/');
                }
            } catch (error) {
                openErrorNotifyModal({
                    title: 'Account Verify Failed',
                    content: <div>Verify code expired, Please click <a href="/" onClick={
                        sendNewCode
                    }>Here</a> to receive new verify code.
                    </div> ,
                    
                })
                navigate('/');
            }
        }  
        FetchVerify();
    },[])

  return (
     <div style={{
         height: '30rem',
     }}>
     </div>
  )
}

Verify.propTypes = {}

export default Verify