import React, {useState} from 'react';
import { useMutation, Button } from 'react-admin';
import BlockIcon from '@material-ui/icons/Block';
import {Redirect} from 'react-router-dom';

const DisapproveButton = ({ participantId, redirect }) => {
    const [disapprove, { loading }] = useMutation({
        type: 'update',
        resource: 'participants',
        payload: { id: participantId, data: { isApproved: false } }
    });
    const [redirectAction, setRedirectAction] = useState(false);

    return (
        <>
            <Button
                label="Désapprouver"   
                onClick={() => {
                    disapprove();
                    setRedirectAction(true);
                }}
                disabled={loading}
                type="submit"
            >
                <BlockIcon />    
            </Button>
            {redirectAction && <Redirect to={redirect} /> }
        </>
    )
};

export default DisapproveButton;
