import '../../styles/globals.css';

// グーグルフォームの出力
const ContactPage = () => {
  return (
    <>
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScE5B1EPtIQSKV_PyB4iBp0Q310hdAKCtxupJNVMAjV-ZFDXg/viewform?embedded=true"
          width="720"
          height="900"
          className='m-auto bg-white'
        >
          読み込んでいます…
        </iframe>
      </div>
    </>
  );
};

export default ContactPage;
