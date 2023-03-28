import { utils, BigNumber } from 'ethers';
import React from 'react';

interface Props {
  maxSupply: number,
  totalSupply: number,
  tokenPrice: BigNumber,
  maxMintAmountPerTx: number,
  isPaused: boolean,
  isWhitelistMintEnabled: boolean,
  isUserInWhitelist: boolean,
  mintTokens(mintAmount: number): Promise<void>,
  whitelistMintTokens(mintAmount: number): Promise<void>,
}

interface State {
  mintAmount: number;
}

const defaultState: State = {
  mintAmount: 1,
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(this.props.maxMintAmountPerTx, this.state.mintAmount + 1),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private setMaxAmount():void {
    this.setState({
      mintAmount: this.props.maxMintAmountPerTx
    })
  }

  private setMinAmount():void {
    this.setState({
      mintAmount: 1
    })
  }

  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount);

      return;
    }

    await this.props.whitelistMintTokens(this.state.mintAmount);
  }

  render() {
    return (
      <>
        {this.canMint() ?
          <>
            <div id="mint-b">
              <div className="buttons">
                <button onClick={() => this.setMinAmount()}>Min</button>
                <button onClick={() => this.decrementMintAmount()}>-</button>
                <div className="amount">{this.state.mintAmount}</div>
                <button onClick={() => this.incrementMintAmount()}>+</button>
                <button onClick={() => this.setMaxAmount()}>Max</button>
              </div>
              <p className="total">
                total price: {utils.formatEther(this.props.tokenPrice.mul(this.state.mintAmount))} $eth
              </p>
              <button className="buy" onClick={() => this.mint()}>MINT NOW</button>
            </div>
          </>
          :
          <div className="cannot-mint mt-1">
            <span className="emoji">⏳</span>

            {this.props.isWhitelistMintEnabled ? <>You are not included in the <strong>whitelist</strong>.</> : <>The contract is <strong>paused</strong>.</>}<br />
            Please come back during the next sale!
          </div>
        }
      </>
    );
  }
}
