import { BigInt } from "@graphprotocol/graph-ts"
import {
  TroveManager,
  BaseRateUpdated,
  InterestApplied,
  LTermsUpdated,
  LTermsUpdated1,
  L_YUSDInterestUpdated,
  LastFeeOpTimeUpdated,
  Liquidation,
  Redemption,
  SystemSnapshotsUpdated,
  SystemSnapshotsUpdated1,
  TotalStakesUpdated,
  TroveIndexUpdated,
  TroveLiquidated,
  TroveSnapshotsUpdated,
  TroveSnapshotsUpdated1,
  TroveUpdated
} from "../generated/TroveManager/TroveManager"
import { ExampleEntity } from "../generated/schema"

export function handleBaseRateUpdated(event: BaseRateUpdated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._baseRate = event.params._baseRate

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DECIMAL_PRECISION(...)
  // - contract.MAX_BORROWING_FEE(...)
  // - contract.MINUTE_DECAY_FACTOR(...)
  // - contract.NAME(...)
  // - contract.addTroveOwnerToArray(...)
  // - contract.baseRate(...)
  // - contract.calcDecayedBaseRate(...)
  // - contract.changeTroveDebt(...)
  // - contract.checkRecoveryMode(...)
  // - contract.decayBaseRateFromBorrowingAndCalculateFee(...)
  // - contract.getBorrowingFee(...)
  // - contract.getBorrowingFeeWithDecay(...)
  // - contract.getBorrowingRate(...)
  // - contract.getBorrowingRateWithDecay(...)
  // - contract.getCCR(...)
  // - contract.getCollateralProportionDenominator(...)
  // - contract.getCollateralProportionNumerator(...)
  // - contract.getCurrentAICR(...)
  // - contract.getCurrentICR(...)
  // - contract.getCurrentTroveState(...)
  // - contract.getEntireDebtAndColls(...)
  // - contract.getEntireSystemColl(...)
  // - contract.getEntireSystemDebt(...)
  // - contract.getL_Coll(...)
  // - contract.getL_YUSD(...)
  // - contract.getMCR(...)
  // - contract.getMIN_NET_DEBT(...)
  // - contract.getPendingCollRewards(...)
  // - contract.getPendingYUSDDebtReward(...)
  // - contract.getREDEMPTION_FEE_FLOOR(...)
  // - contract.getRedemptionFeeWithDecay(...)
  // - contract.getRedemptionRate(...)
  // - contract.getRedemptionRateWithDecay(...)
  // - contract.getRewardSnapshotColl(...)
  // - contract.getRewardSnapshotYUSD(...)
  // - contract.getTCR(...)
  // - contract.getTotalStake(...)
  // - contract.getTroveColls(...)
  // - contract.getTroveDebt(...)
  // - contract.getTroveFromTroveOwnersArray(...)
  // - contract.getTroveOwnersCount(...)
  // - contract.getTroveStake(...)
  // - contract.getTroveStatus(...)
  // - contract.getTroveVC(...)
  // - contract.getYUSD_GAS_COMPENSATION(...)
  // - contract.hasPendingRewards(...)
  // - contract.interestTimeWindow(...)
  // - contract.isTroveActive(...)
  // - contract.lastCollError_Redistribution(...)
  // - contract.lastFeeOperationTime(...)
  // - contract.lastInterestRateUpdateTime(...)
  // - contract.lastYUSDDebtError_Redistribution(...)
  // - contract.totalCollateralSnapshot(...)
  // - contract.totalStakesSnapshot(...)
}

export function handleInterestApplied(event: InterestApplied): void {}

export function handleLTermsUpdated(event: LTermsUpdated): void {}

export function handleLTermsUpdated1(event: LTermsUpdated1): void {}

export function handleL_YUSDInterestUpdated(
  event: L_YUSDInterestUpdated
): void {}

export function handleLastFeeOpTimeUpdated(event: LastFeeOpTimeUpdated): void {}

export function handleLiquidation(event: Liquidation): void {}

export function handleRedemption(event: Redemption): void {}

export function handleSystemSnapshotsUpdated(
  event: SystemSnapshotsUpdated
): void {}

export function handleSystemSnapshotsUpdated1(
  event: SystemSnapshotsUpdated1
): void {}

export function handleTotalStakesUpdated(event: TotalStakesUpdated): void {}

export function handleTroveIndexUpdated(event: TroveIndexUpdated): void {}

export function handleTroveLiquidated(event: TroveLiquidated): void {}

export function handleTroveSnapshotsUpdated(
  event: TroveSnapshotsUpdated
): void {}

export function handleTroveSnapshotsUpdated1(
  event: TroveSnapshotsUpdated1
): void {}

export function handleTroveUpdated(event: TroveUpdated): void {}
