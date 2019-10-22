// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled'

export default {
  name: 'CompassFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CompassFilledSvg } },
      children
    )
};