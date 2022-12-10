import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEnterprise } from './enterpriseSlice'
import Button from '@mui/material/Button';

export function EnterpriseList() {
    const enterprises = useSelector((state) => state.enterprise.enterprises)
    const dispatch = useDispatch()

    return(
        <div>
            {enterprises}
            <Button onClick={() => dispatch(addEnterprise("hello"))}>TRY</Button>
        </div>
    )
}
