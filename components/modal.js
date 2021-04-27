import Image from "next/image"

const Modal = ({closeWallets}) => {
  return (
  <>
    <div className="modal">
      <div className="modal__head">
        <div className="modal__title">
          connect to a wallet          
        </div>
        <div className="modal__close" onClick={closeWallets}>
          X
        </div>
      </div>
      <div className="modal__content">
        <a class="modal__button">
          metamask
          <Image width="30" height={30} src="/images/metamask.svg"/>
        </a>
        <a class="modal__button">
          trustwallet
          <Image width="30" height={30} src="/images/trustwallet.png"/>
        </a>
        <a class="modal__button">
          mathwallet
          <Image width="30" height={30} src="/images/math-wallet.png"/>
        </a>
        <a class="modal__button">
          tokenpocket
          <Image width="30" height={30} src="/images/tokenpocket.png"/>
        </a>
        <a class="modal__button">
          walletconnect
          <Image width="30" height={30} src="/images/walletconnect-logo.svg"/>
        </a>
        <a class="modal__button">
          binance chain wallet
          <Image width="30" height={30} src="/images/binance-coin.svg"/>
        </a>
        <a class="modal__button">
          savepal wallet
          <Image width="30" height={30} src="/images/safepal.png"/>
        </a>
        <a className="modal__read-more"><span>?</span> learn how to connect</a>
      </div>
    </div>
    <div className="modal-overlay" onClick={closeWallets}/>
  </>
  )
}

export default Modal
