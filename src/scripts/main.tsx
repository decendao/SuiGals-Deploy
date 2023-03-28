import '../styles/main.scss';

import ReactDOM from 'react-dom';
// import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import Page from "./react/Page";
import { MoralisProvider } from "react-moralis";

// if (document.title === '') {
//   document.title = CollectionConfig.tokenName;
// }

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(
    <MoralisProvider appId="NYAj64Qu0oKfHVec6gWAhK5b3NJ6rj2zC2Sy929a" serverUrl="https://ls1mxo4vgxaq.usemoralis.com:2053/server">
      <Page />
    </MoralisProvider>,
    document.getElementById('Pink_3_NFT'));
});
