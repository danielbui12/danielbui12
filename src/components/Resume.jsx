import { EXPERIENCED_CONTRACT, EXPERTISE, NETWORK_BASE_URI } from "../utils/constant"

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
              {
                EXPERTISE.map(_item => {
                  return (
                    <div key={JSON.stringify(_item)} className="card-body">
                      <h6 className="title text-danger">{_item.time}</h6>
                      <p className="text-light">
                        {_item.title}
                      </p>
                      <ul className="mt40 info">
                        {
                          _item.outline.map(_outline => {
                            return (
                              <li key={_outline} dangerouslySetInnerHTML={{ __html: _outline }} />
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
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