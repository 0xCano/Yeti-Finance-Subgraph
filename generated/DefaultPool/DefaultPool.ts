// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CollateralSent extends ethereum.Event {
  get params(): CollateralSent__Params {
    return new CollateralSent__Params(this);
  }
}

export class CollateralSent__Params {
  _event: CollateralSent;

  constructor(event: CollateralSent) {
    this._event = event;
  }

  get _collateral(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DefaultPoolBalanceUpdated extends ethereum.Event {
  get params(): DefaultPoolBalanceUpdated__Params {
    return new DefaultPoolBalanceUpdated__Params(this);
  }
}

export class DefaultPoolBalanceUpdated__Params {
  _event: DefaultPoolBalanceUpdated;

  constructor(event: DefaultPoolBalanceUpdated) {
    this._event = event;
  }

  get _collateral(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DefaultPoolBalancesUpdated extends ethereum.Event {
  get params(): DefaultPoolBalancesUpdated__Params {
    return new DefaultPoolBalancesUpdated__Params(this);
  }
}

export class DefaultPoolBalancesUpdated__Params {
  _event: DefaultPoolBalancesUpdated;

  constructor(event: DefaultPoolBalancesUpdated) {
    this._event = event;
  }

  get _collaterals(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class DefaultPoolETHBalanceUpdated extends ethereum.Event {
  get params(): DefaultPoolETHBalanceUpdated__Params {
    return new DefaultPoolETHBalanceUpdated__Params(this);
  }
}

export class DefaultPoolETHBalanceUpdated__Params {
  _event: DefaultPoolETHBalanceUpdated;

  constructor(event: DefaultPoolETHBalanceUpdated) {
    this._event = event;
  }

  get _ETH(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DefaultPoolYUSDDebtUpdated extends ethereum.Event {
  get params(): DefaultPoolYUSDDebtUpdated__Params {
    return new DefaultPoolYUSDDebtUpdated__Params(this);
  }
}

export class DefaultPoolYUSDDebtUpdated__Params {
  _event: DefaultPoolYUSDDebtUpdated;

  constructor(event: DefaultPoolYUSDDebtUpdated) {
    this._event = event;
  }

  get _YUSDDebt(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ETHBalanceUpdated extends ethereum.Event {
  get params(): ETHBalanceUpdated__Params {
    return new ETHBalanceUpdated__Params(this);
  }
}

export class ETHBalanceUpdated__Params {
  _event: ETHBalanceUpdated;

  constructor(event: ETHBalanceUpdated) {
    this._event = event;
  }

  get _newBalance(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class EtherSent extends ethereum.Event {
  get params(): EtherSent__Params {
    return new EtherSent__Params(this);
  }
}

export class EtherSent__Params {
  _event: EtherSent;

  constructor(event: EtherSent) {
    this._event = event;
  }

  get _to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class YUSDBalanceUpdated extends ethereum.Event {
  get params(): YUSDBalanceUpdated__Params {
    return new YUSDBalanceUpdated__Params(this);
  }
}

export class YUSDBalanceUpdated__Params {
  _event: YUSDBalanceUpdated;

  constructor(event: YUSDBalanceUpdated) {
    this._event = event;
  }

  get _newBalance(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DefaultPool__getAllCollateralResult {
  value0: Array<Address>;
  value1: Array<BigInt>;

  constructor(value0: Array<Address>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class DefaultPool__getAmountsSubsetResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;

  constructor(value0: Array<BigInt>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class DefaultPool__getVCAndRVCResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class DefaultPool extends ethereum.SmartContract {
  static bind(address: Address): DefaultPool {
    return new DefaultPool("DefaultPool", address);
  }

  DECIMAL_PRECISION(): BigInt {
    let result = super.call(
      "DECIMAL_PRECISION",
      "DECIMAL_PRECISION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DECIMAL_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DECIMAL_PRECISION",
      "DECIMAL_PRECISION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  NAME(): string {
    let result = super.call("NAME", "NAME():(string)", []);

    return result[0].toString();
  }

  try_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall("NAME", "NAME():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  YUSDDebt(): BigInt {
    let result = super.call("YUSDDebt", "YUSDDebt():(uint256)", []);

    return result[0].toBigInt();
  }

  try_YUSDDebt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("YUSDDebt", "YUSDDebt():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAllAmounts(): Array<BigInt> {
    let result = super.call("getAllAmounts", "getAllAmounts():(uint256[])", []);

    return result[0].toBigIntArray();
  }

  try_getAllAmounts(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getAllAmounts",
      "getAllAmounts():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getAllCollateral(): DefaultPool__getAllCollateralResult {
    let result = super.call(
      "getAllCollateral",
      "getAllCollateral():(address[],uint256[])",
      []
    );

    return new DefaultPool__getAllCollateralResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray()
    );
  }

  try_getAllCollateral(): ethereum.CallResult<
    DefaultPool__getAllCollateralResult
  > {
    let result = super.tryCall(
      "getAllCollateral",
      "getAllCollateral():(address[],uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DefaultPool__getAllCollateralResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray()
      )
    );
  }

  getAmountsSubset(
    _collaterals: Array<Address>
  ): DefaultPool__getAmountsSubsetResult {
    let result = super.call(
      "getAmountsSubset",
      "getAmountsSubset(address[]):(uint256[],uint256[])",
      [ethereum.Value.fromAddressArray(_collaterals)]
    );

    return new DefaultPool__getAmountsSubsetResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray()
    );
  }

  try_getAmountsSubset(
    _collaterals: Array<Address>
  ): ethereum.CallResult<DefaultPool__getAmountsSubsetResult> {
    let result = super.tryCall(
      "getAmountsSubset",
      "getAmountsSubset(address[]):(uint256[],uint256[])",
      [ethereum.Value.fromAddressArray(_collaterals)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DefaultPool__getAmountsSubsetResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray()
      )
    );
  }

  getCollateral(_collateral: Address): BigInt {
    let result = super.call(
      "getCollateral",
      "getCollateral(address):(uint256)",
      [ethereum.Value.fromAddress(_collateral)]
    );

    return result[0].toBigInt();
  }

  try_getCollateral(_collateral: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCollateral",
      "getCollateral(address):(uint256)",
      [ethereum.Value.fromAddress(_collateral)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCollateralVC(_collateral: Address): BigInt {
    let result = super.call(
      "getCollateralVC",
      "getCollateralVC(address):(uint256)",
      [ethereum.Value.fromAddress(_collateral)]
    );

    return result[0].toBigInt();
  }

  try_getCollateralVC(_collateral: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCollateralVC",
      "getCollateralVC(address):(uint256)",
      [ethereum.Value.fromAddress(_collateral)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVC(): BigInt {
    let result = super.call("getVC", "getVC():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getVC(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getVC", "getVC():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVCAndRVC(): DefaultPool__getVCAndRVCResult {
    let result = super.call(
      "getVCAndRVC",
      "getVCAndRVC():(uint256,uint256)",
      []
    );

    return new DefaultPool__getVCAndRVCResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getVCAndRVC(): ethereum.CallResult<DefaultPool__getVCAndRVCResult> {
    let result = super.tryCall(
      "getVCAndRVC",
      "getVCAndRVC():(uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DefaultPool__getVCAndRVCResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getYUSDDebt(): BigInt {
    let result = super.call("getYUSDDebt", "getYUSDDebt():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getYUSDDebt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getYUSDDebt", "getYUSDDebt():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddCollateralTypeCall extends ethereum.Call {
  get inputs(): AddCollateralTypeCall__Inputs {
    return new AddCollateralTypeCall__Inputs(this);
  }

  get outputs(): AddCollateralTypeCall__Outputs {
    return new AddCollateralTypeCall__Outputs(this);
  }
}

export class AddCollateralTypeCall__Inputs {
  _call: AddCollateralTypeCall;

  constructor(call: AddCollateralTypeCall) {
    this._call = call;
  }

  get _collateral(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddCollateralTypeCall__Outputs {
  _call: AddCollateralTypeCall;

  constructor(call: AddCollateralTypeCall) {
    this._call = call;
  }
}

export class DecreaseYUSDDebtCall extends ethereum.Call {
  get inputs(): DecreaseYUSDDebtCall__Inputs {
    return new DecreaseYUSDDebtCall__Inputs(this);
  }

  get outputs(): DecreaseYUSDDebtCall__Outputs {
    return new DecreaseYUSDDebtCall__Outputs(this);
  }
}

export class DecreaseYUSDDebtCall__Inputs {
  _call: DecreaseYUSDDebtCall;

  constructor(call: DecreaseYUSDDebtCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DecreaseYUSDDebtCall__Outputs {
  _call: DecreaseYUSDDebtCall;

  constructor(call: DecreaseYUSDDebtCall) {
    this._call = call;
  }
}

export class IncreaseYUSDDebtCall extends ethereum.Call {
  get inputs(): IncreaseYUSDDebtCall__Inputs {
    return new IncreaseYUSDDebtCall__Inputs(this);
  }

  get outputs(): IncreaseYUSDDebtCall__Outputs {
    return new IncreaseYUSDDebtCall__Outputs(this);
  }
}

export class IncreaseYUSDDebtCall__Inputs {
  _call: IncreaseYUSDDebtCall;

  constructor(call: IncreaseYUSDDebtCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class IncreaseYUSDDebtCall__Outputs {
  _call: IncreaseYUSDDebtCall;

  constructor(call: IncreaseYUSDDebtCall) {
    this._call = call;
  }
}

export class ReceiveCollateralCall extends ethereum.Call {
  get inputs(): ReceiveCollateralCall__Inputs {
    return new ReceiveCollateralCall__Inputs(this);
  }

  get outputs(): ReceiveCollateralCall__Outputs {
    return new ReceiveCollateralCall__Outputs(this);
  }
}

export class ReceiveCollateralCall__Inputs {
  _call: ReceiveCollateralCall;

  constructor(call: ReceiveCollateralCall) {
    this._call = call;
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ReceiveCollateralCall__Outputs {
  _call: ReceiveCollateralCall;

  constructor(call: ReceiveCollateralCall) {
    this._call = call;
  }
}

export class SendCollsToActivePoolCall extends ethereum.Call {
  get inputs(): SendCollsToActivePoolCall__Inputs {
    return new SendCollsToActivePoolCall__Inputs(this);
  }

  get outputs(): SendCollsToActivePoolCall__Outputs {
    return new SendCollsToActivePoolCall__Outputs(this);
  }
}

export class SendCollsToActivePoolCall__Inputs {
  _call: SendCollsToActivePoolCall;

  constructor(call: SendCollsToActivePoolCall) {
    this._call = call;
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SendCollsToActivePoolCall__Outputs {
  _call: SendCollsToActivePoolCall;

  constructor(call: SendCollsToActivePoolCall) {
    this._call = call;
  }
}

export class SetAddressesCall extends ethereum.Call {
  get inputs(): SetAddressesCall__Inputs {
    return new SetAddressesCall__Inputs(this);
  }

  get outputs(): SetAddressesCall__Outputs {
    return new SetAddressesCall__Outputs(this);
  }
}

export class SetAddressesCall__Inputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }

  get _troveManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _troveManagerLiquidationsAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _activePoolAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _controllerAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SetAddressesCall__Outputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }
}
