import React, { useState } from "react";
import {useWeb3Contract} from 'react-moralis';
import { useMoralis } from "react-moralis";
import {abi} from '../constants/abi.json';

export default function Amount() {
const {runContractFunction} = useWeb3Contract();
  const { Moralis } = useMoralis();
  const mintTokena = {
    abi: abi, 
    contractAddress:"0xa7bE0301229f49d6ec999D22fdBea20fc3Dbdd7E",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.06"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _bravoAmount : 1,
    }
  };
  const mintTokenb = {
    abi: abi, 
    contractAddress:"0xa7bE0301229f49d6ec999D22fdBea20fc3Dbdd7E",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.12"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _bravoAmount: 2,
    }
  };
  const mintTokenc = {
    abi: abi, 
    contractAddress:"0xa7bE0301229f49d6ec999D22fdBea20fc3Dbdd7E",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.18"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _bravoAmount : 3,
    }
  };
  const mintTokend = {
    abi: abi, 
    contractAddress:"0xa7bE0301229f49d6ec999D22fdBea20fc3Dbdd7E",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.24"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _bravoAmount : 4,
    }
  };
  const mintTokene = {
    abi: abi, 
    contractAddress:"0xa7bE0301229f49d6ec999D22fdBea20fc3Dbdd7E",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.3"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _bravoAmount : 5,
    }
  };
 
  const getInitialState = () => {
    const value = "0";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
    const bravoAmount = parseInt(e.target.value);
    console.log(bravoAmount);
    switch(bravoAmount){
    case 1:
        runContractFunction({params: mintTokena});
        break;
    case 2:
        runContractFunction({params: mintTokenb});
        break;
    case 3:
        runContractFunction({params: mintTokenc});
        break;
    case 4:
        runContractFunction({params: mintTokend});
        break;
    case 5:
        runContractFunction({params: mintTokene});
        break;

    default:
  };
    };

  return (
    <div>
        <p>Mint Now by selecting number of tokens</p>
      <select value={value} onChange={handleChange}>
      <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>
      <p></p>
      <p>{`You selected to mint ${value} NFT tokens`}</p>
    </div>
  );
}