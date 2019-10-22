// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ReconciliationFilledSvg from '@ant-design/icons-svg/lib/asn/ReconciliationFilled'

export default {
  name: 'ReconciliationFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReconciliationFilledSvg } },
      children
    )
};