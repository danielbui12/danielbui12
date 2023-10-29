import SocialIcon from './SocialIcon'

function About() {
  return (
    <div className="container-fluid bg-dark">
      <div id="about" className="row about-section break">
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light text-light">Who am I ?</h3>
          <span className="line mb-5" />
          <h5 className="mb-3 text-light">
            A Blockchain Developer / Software Engineer
          </h5>
          <p className="mt-20 text-white-50">
            Blockchain developer with more than 2 years of working experience in
            Ethereum-based blockchain and Solana blockchain combined with 3 years in
            software development. My ambition is to offer customers high-quality
            software with the most convenient and perfect UI/UX as well as
            performance.
          </p>
          <button className="btn btn-outline-danger">
            <i className="icon-down-circled2 " />
            Download My CV
          </button>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light text-light" id="personal-info">
            Personal Info
          </h3>
          <p className="text-white-50">
            Blockchain Developer | Blogger | Workaholic, Studious, Flexible
          </p>
          <span className="line mb-5" />
          <ul className="mt40 info list-unstyled">
            <li>
              <span className="text-white-50">Full name</span> : Bùi Huy Tùng
            </li>
            <li>
              <span className="text-white-50">English name</span> : Daniel
            </li>
            <li>
              <span className="text-white-50">Birthday</span> : 12/01/2002
            </li>
            <li>
              <span className="text-white-50">Email</span> : huytung139@gmail.com
            </li>
            <li>
              <span className="text-white-50">Language</span> : Vietnamese (native),
              English
            </li>
          </ul>
          <SocialIcon />
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light text-light">My Expertise</h3>
          <span className="line mb-5" />
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-layout-grid4-alt icon-lg" />
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6 className="text-light">Blockchain Developer</h6>
              <p className="subtitle text-white-50">
                Experienced in Ethereum-based blockchain, Solana blockchain
              </p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-package icon-lg" />
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6 className="text-light">Software Engineer</h6>
              <p className="subtitle text-white-50">
                Develop and operate Vietnam vehicle registration center software,
                with over 10,000 users joining each month.
              </p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-medall-alt icon-lg" />
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6 className="text-light">Enthusiastic Contest Competitor</h6>
              <p className="subtitle text-white-50">
                I am always full of energy and ready to participate in competitions
                and hackathons to gain my knowledge about other aspects: marketing,
                business development, software operations, etc.
              </p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-pencil-alt icon-lg" />
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6 className="text-light">Blog writer</h6>
              <p className="subtitle text-white-50">
                I write blockchain blogs with the purpose of sharing the knowledge I
                have learned to help developer more easily access blockchain.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About