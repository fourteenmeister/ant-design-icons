// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailFilledSvg}></AntdIcon>;
};

MailFilled.displayName = 'MailFilled';
MailFilled.inheritAttrs = false;
export default MailFilled;