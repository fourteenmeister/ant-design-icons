// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AudioSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined'

export default {
  name: 'Audio',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AudioSvg } },
      children
    )
};