{
  props.noConnect ? (
    <div
      className='connect'
      onClick={() => {
        props.connect();
      }}
    >
      <img src='/img/wallet.png' alt='' />
      CONNECT WALLET
    </div>
  ) : (
    <div
      className='connect'
      onClick={() => {
        console.log("show");
        props.show();
      }}
    >
      <img src='/img/wallet.png' alt='' />
      {id(props.userAddress)}
    </div>
  );
}

<div className='coming-button' onClick={props.show}>
  Connect
</div>;
