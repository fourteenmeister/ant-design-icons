// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ToolFilledSvg from '@ant-design/icons-svg/lib/asn/ToolFilled'

export default {
  name: 'ToolFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ToolFilledSvg } },
      children
    )
};