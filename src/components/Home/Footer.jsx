import darkLogo from '../../assets/logo-dark.svg';
import facebookIcon from '../../assets/icon-facebook.svg';
import instagramIcon from '../../assets/icon-instagram.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
const Footer = () => {
  return (
    <footer className='flex justify-center items-center flex-col pb-16'>
      <img src={darkLogo} />
      <div className='flex gap-8 mt-10'>
        <a href='https://www.facebook.com' target='_blank'>
          <img src={facebookIcon} />
        </a>
        <a href='https://www.instagram.com' target='_blank'>
          <img src={instagramIcon} />
        </a>
        <a href='https://www.twitter.com' target='_blank'>
          <img src={twitterIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
