//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface INexusBridge {
    struct Rewards {
        uint256 TotalRewardsEarned;
        uint256 RewardsRedeemed;
        uint256 Slashing;
    }
    struct Validator {
        bytes pubKey;
        bytes withdrawalAddress;
        bytes signature;
        bytes32 depositRoot;
    }
    error NotNexus_2();
    error NotDAO_2();
    error IncorrectAmount();
    error IncorrectWithdrawalCredentials();
    error StakingLimitExceeding();
    error WrongRewardAmount();

    event RewardsUpdated(uint256 amount, bool slashing);
    event RewardsRedeemed(uint256 amount, address rewardReceiver);

    function depositValidatorNexus(
        Validator[] calldata _validators,
        uint256 stakingLimit,
        uint256 validatorCount
    ) external;

    function updateRewards(uint256 amount, bool slashed,uint256 validatorCount) external;
}
