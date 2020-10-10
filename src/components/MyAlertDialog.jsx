import React, { useEffect, useState } from 'react';
import { themeConfig } from '../config/themeConfig';
import { noop } from 'lodash';
import AwesomeAlert from 'react-native-awesome-alerts';

export const DialogType = {
  NORMAL: 'normal',
  CONFIRM: 'confirm',
};

const MyAlertDialog = (props) => {
  const {
    type = DialogType.NORMAL,
    show = false,
    showProgress = false,
    cancelText = 'Bỏ qua',
    confirmText = 'Đồng ý',
    onCancel = noop,
    onConfirm = noop,
    confirmColor = themeConfig.color.primary_button,
    ...alertProps
  } = props;

  const [showCancel, setShowCancel] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);

  useEffect(() => {
    switch (type) {
      case DialogType.NORMAL:
        break;
      case DialogType.CONFIRM:
        setShowCancel(false);
        break;
    }
  }, [type]);

  return (
    <AwesomeAlert
      {...alertProps}
      show={show}
      showProgress={showProgress}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={showCancel}
      showConfirmButton={showConfirm}
      cancelText={cancelText}
      confirmText={confirmText}
      confirmButtonColor={confirmColor}
      onCancelPressed={onCancel}
      onConfirmPressed={onConfirm}
    />
  );
};

export default MyAlertDialog;
