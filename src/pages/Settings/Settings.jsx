import React from 'react'
import BillingAddress from './Section/BillingAddress'
import AccountSetting from './Section/AccountSetting'
import ChangePassword from './Section/ChangePassword'

const Settings = () => {
  return (
    <div>
        <AccountSetting/>
        <BillingAddress/>
        <ChangePassword/>
    </div>
  )
}

export default Settings
