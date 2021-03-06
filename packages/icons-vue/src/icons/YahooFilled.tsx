// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YahooFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YahooFilledSvg}></AntdIcon>;
};

YahooFilled.displayName = 'YahooFilled';
YahooFilled.inheritAttrs = false;
export default YahooFilled;