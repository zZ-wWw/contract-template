import { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-solhint"
import "@nomiclabs/hardhat-waffle"
import "@openzeppelin/hardhat-upgrades"
import "hardhat-abi-exporter"
import "hardhat-contract-sizer"
import "hardhat-log-remover"
import "hardhat-typechain"
import dotenv from "dotenv"

dotenv.config()

const config: HardhatUserConfig = {
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.MNEMONIC}`]
    }
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: ".cache",
    artifacts: "./artifacts"
  },
  contractSizer: {
    alphaSort: true, // 是否按字母顺序对结果表排序(默认排序按合同大小), 默认: false
    runOnCompile: false, // 编译后是否自动输出合约大小, 默认: false
    disambiguatePaths: true // 是否输出编译工件的完整路径(相对于Hardhat根目录), 默认: false
  },
  typechain: {
    outDir: "build/types",
    target: "ethers-v5"
  },
  abiExporter: {
    path: './build/abi',
    clear: true,
    flat: true,
    only: [],
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`
  }
}

export default config
