import React, {useState} from 'react';
import { useMutation, Button } from 'react-admin';
import DoneIcon from '@material-ui/icons/Done';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const ApproveButton = ({ participantId, redirect }) => {
    const [approve, { loading }] = useMutation({
        type: 'update',
        resource: 'participants', 
        payload: { id: participantId, data: { isApproved: true } }
    });
    
    const [redirectAction, setRedirectAction] = useState(false);
    
    const sendEmail = axios.post(`/api/back/v1/participants/${participantId}/approved`);

    return (
        <>
            <Button
                label="Approuver"   
                onClick={() => {
                    approve();
                    setRedirectAction(true);
                    sendEmail();
                }}
                disabled={loading}
                type="submit"
            >
                <DoneIcon />    
            </Button>
            {redirectAction && <Redirect to={redirect} /> }
        </>
    )
};

export default ApproveButton;
