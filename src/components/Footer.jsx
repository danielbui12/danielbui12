import SocialIcon from './SocialIcon'

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className='d-flex justify-content-between align-items-center'>
          <p className="small mb-0 text-light">
            © Created With&nbsp;<i className="ti-heart text-danger" /> By &nbsp;
            <a rel="noreferrer" href="http://github.com/danielbui12" target="_blank">
              <span className="text-danger" title="Daniel">
                Daniel
              </span>
            </a>
          </p>

          <SocialIcon />
        </div>

      </div>
    </footer>


  )
}

export default Footer