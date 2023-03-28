import React from 'react';

interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
}

interface State {
}

const defaultState: State = {
};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean
  {
    return this.props.isWhitelistMintEnabled || !this.props.isPaused;
  }

  render() {
    return (
      <>
        <div id="mint-r">
          <div className="title">
            {this.isSaleOpen() ?
              <>
                {this.props.isWhitelistMintEnabled ? 'Whitelist only' : 'Public Mint'}
              </>
              :
              'Closed'
            }
          </div>
          <div className="line">
            <div className="pre"/>
            <img src="/img/xz.png" alt=""/>
            <div className="next"/>
          </div>
          <div className="dl">
            <p>Wallet Address: {this.props.userAddress}</p>
          </div>
          <p className="pink">Your Wallet is conected sucsecfully</p>
          <p className="nums">
            {this.props.totalSupply}/{this.props.maxSupply}
          </p>
          <div className="line" style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#eee",
            marginTop: "10px",
            marginBottom: "10px",
            opacity: "0.8"
          }}/>
        </div>
      </>
    );
  }
}
