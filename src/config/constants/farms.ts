import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DAX-BUSD LP',
    lpAddresses: {
      97: '',
      24: '0x4D1BD6486f084B2bBA3eA04263E77B921E7bbb5f',
    },
    tokenSymbol: 'DAX',
    tokenAddresses: {
      97: '',
      24: '0xf1B6055bFd0e778cea6712670919B4d0ee2f8D07',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


]

export default farms
