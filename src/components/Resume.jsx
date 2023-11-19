import { EXPERIENCED_CONTRACT, NETWORK_BASE_URI } from "../utils/constant"

function Resume() {
  return (
    <section className="section bg-dark break" id="resume">
      <div className="container">
        <h2 className="mb-5 text-light">
          <span className="text-danger">My</span> Resume
        </h2>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="card bg-dark">
              <div className="card-header">
                <div className="mt-2">
                  <h4 className="text-light">Expertise</h4>
                  <span className="line" />
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2022 - Present</h6>
                <p className="text-light">
                  Blockchain Developer at RELIPA CO., LTD
                </p>
                <ul className="mt40 info">
                  <li>
                    Handle multiple tasks well: participate in 4-5 projects at one
                    time.
                  </li>
                  <li>
                    Participating in blockchain development: DeFi, dApp,
                    ecosystem, blockchain layer-1, etc.
                  </li>
                  <li>
                    Form a team to compete in external hackathons about blockchain
                    and won several awards: In top 10 at Road to Grizzlython hackathon of Web3 Space, Top 2 at Hackathon 08 of Solana SuperTeam Vietnam.
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2020 - 2023</h6>
                <p className="text-light">Software Engineer at TORITI LTD</p>
                <ul className="mt40 info">
                  <li>
                    R&amp;D confused business features and new technologies.
                  </li>
                  <li>
                    Ensuring progress, quality of work by reviewing code,
                    communicating with members in the team.
                  </li>
                  <li>
                    Developing & Operating system which got over 10,000 users every month.
                  </li>
                  <li>
                    Team leadership: Training and support in order to build a efficient team in work.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card bg-dark">
              <div className="card-header">
                <div className="mt-2">
                  <h4 className="text-light">Education</h4>
                  <span className="line" />
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2020 - 2023</h6>
                <p className="text-light">Information Technology</p>
                <ul className="mt40 info">
                  <li>
                    Graduated <b>1 year</b> earlier with very good bachelor&apos;s degree
                  </li>
                  <li>Actively participate in activities.</li>
                  <li><b>3 times continuously</b>winning 1st at Tool For Ideas.</li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-dark pb-3">
          <div className="card-header">
            <h4 className="mt-3 mb-2 text-light">
              <div className="mt-2">
                <h4 className="text-light">Highlighted smart contracts I have participated/developed</h4>
                <span className="line" />
              </div>
            </h4>
          </div>
          <div className="card-body">
            <div className="wrap-table">
              <table className="table table-bordered table-dark" style={{ minWidth: "1000px", maxHeight: "1200px" }}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Project</th>
                    <th scope="col">Contract</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(EXPERIENCED_CONTRACT).map((_project, index) => {
                      return EXPERIENCED_CONTRACT[_project].map((_contract, _index) => {
                        const contractCount = EXPERIENCED_CONTRACT[_project].length;
                        const classHiddenBorder = _index !== contractCount - 1 && contractCount > 0 ? "border-bottom-none" : ""
                        return (
                          <tr key={_project + _contract + _index}>
                            <th scope="row" className={classHiddenBorder}>
                              {_index === Math.floor((contractCount - 1) / 2) ? index + 1 : ''}
                            </th>
                            <td className={classHiddenBorder} style={{ minWidth: '120px'}}>
                              {_index === Math.floor((contractCount - 1) / 2) ? _project : ""}
                            </td>
                            <td>
                              <a 
                                rel="noreferrer" 
                                href={
                                  _contract.repo ? 
                                    _contract.repo : 
                                    `${NETWORK_BASE_URI[_contract.network]}/address/${_contract.address}`
                                } 
                                target="_blank"
                              >
                                {_contract.contractName}
                              </a>
                            </td>
                            <td>{_contract.description}</td>
                            <td>
                              <span className={`badge badge-${_contract.type === "Mainnet" ? "primary" : "secondary"}`}>{_contract.type}</span>
                            </td>
                          </tr>
                        )
                      })
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div className="pl-5"><i>For more, please direct to my Github repository.</i></div>
        </div>
      </div>
    </section>
  )
}

export default Resume