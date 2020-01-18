import React, {useState} from 'react';
import { useMutation, Button } from 'react-admin';
import DoneIcon from '@material-ui/icons/Done';
import {Redirect} from 'react-router-dom';

const ApproveButton = ({ participantId, redirect }) => {
    const [approve, { loading }] = useMutation({
        type: 'update',
        resource: 'participants',
        payload: { id: participantId, data: { isApproved: true } }
    });
    const [redirectAction, setRedirectAction] = useState(false);
    
    return (
        <>
            <Button
                label="Approuver"   
                onClick={() => {
                    approve();
                    setRedirectAction(true);
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
