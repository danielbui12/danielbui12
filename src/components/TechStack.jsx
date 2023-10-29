function TechStack() {
  return (
    <section className="section bg-dark break" id="techstack">
      <div className="container">
        <h2 className="mb-5 pb-4 text-light">
          <span className="text-danger">Tech</span> Stack
        </h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="row">
                <span className="badge badge-primary">
                  <span className="h6">Blockchain</span>
                </span>
              </th>
              <td>
                <ul className="info text-light">
                  <li>
                    Solidity, Chainlink, Truffle, Hardhat, Moralis, Infura, IPFS,
                    Near SDK, etc.
                  </li>
                  <li>
                    Understanding operating mechanism of PoW, PoS, PoH, PoA, EVM,
                    Yield Farming, Liquid Staking.
                  </li>
                  <li>
                    Experienced in Marketplace, Lottery, Lending-Renting NFT,
                    Auction, etc.
                  </li>
                  <li>Solana, Rust, Anchor, cNFT, xNFT, Helius, etc</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span className="badge badge-primary">
                  <span className="h6">JavaScript</span>
                </span>
              </th>
              <td>
                <ul className="info text-light">
                  <li>ReactJS, NextJS, EJS, Vite, React Native, Redux, etc.</li>
                  <li>
                    NodeJS, ExpressJS, MQTT, SocketIO, web-socket stream,
                    Sequelize, Azure Functions, Azure Static Web Apps, serverless
                    etc.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span className="badge badge-primary">
                  <span className="h6">CSS</span>
                </span>
              </th>
              <td>
                <div className="pl-4 info text-light">
                  Chakra UI, Antd, Rsuite, Material UI, Reactstrap, Less,
                  SASS/SCSS, Bootstrap, Tailwind, etc.
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span className="badge badge-primary">
                  <span className="h6">Python</span>
                </span>
              </th>
              <td>
                <div className="pl-4 info text-light">
                  Pandas, Numpy, OpenCV 2, Flask API, etc.
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span className="badge badge-primary">
                  <span className="h6">Database</span>
                </span>
              </th>
              <td>
                <div className="pl-4 info text-light">
                  MongoDB, mySQL, postgreSQL, SQL Server, Azure CosmosDB, etc.
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span className="badge badge-primary">
                  <span className="h6">Management</span>
                </span>
              </th>
              <td>
                <div className="pl-4 info text-light">
                  IT mentor, Team leadership.
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span className="badge badge-primary">
                  <span className="h6">Others</span>
                </span>
              </th>
              <td>
                <ul className="info text-light">
                  <li>
                    Firebase SDK, Facebook SDK, MoMo payment service, VNPay
                    payment service, Zalo Notification Service SDK, Zalo Mini App
                    SDK, etc.
                  </li>
                  <li>
                    Hands-on setting up pipeline on Github/Gitlab, automatic
                    deploying script.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TechStack