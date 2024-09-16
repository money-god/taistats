  {/* <TabPanel>
        <Tabs>
          <TabList>
            <Tab><p className="is-size-5">ERC-20</p></Tab>
            <Tab><p className="is-size-5">ERC-20 LP</p></Tab>
            <Tab><p className="is-size-5">Real World Assets</p></Tab>
            <Tab><p className="is-size-5">Peg Stability Modules</p></Tab>
            <Tab><p className="is-size-5">Direct Deposits</p></Tab>
            <Tab><p className="is-size-5">Deprecated</p></Tab>
          </TabList>

          <TabPanel>
        <Collateral {...props} ilk="ETH-A" supply={props.ethSupply} />
        <Collateral {...props} ilk="ETH-B" supply={props.ethSupply} />
        <Collateral {...props} ilk="ETH-C" supply={props.ethSupply} />
        <Collateral {...props} ilk="WSTETH-A" />
        <Collateral {...props} ilk="WSTETH-B" />
        <Collateral {...props} ilk="RETH-A" />
        <Collateral {...props} ilk="WBTC-A" />
        <Collateral {...props} ilk="WBTC-B" />
        <Collateral {...props} ilk="WBTC-C" />
          </TabPanel>
          <TabPanel>
        <Collateral {...props} ilk="UNIV2USDCETH-A" showLockedDecimals={true} />
        <Collateral {...props} ilk="UNIV2DAIUSDC-A" showLockedDecimals={true} />
        <Collateral {...props} ilk="GUNIV3DAIUSDC1-A" />
        <Collateral {...props} ilk="GUNIV3DAIUSDC2-A" />
        <Collateral {...props} ilk="CRVV1ETHSTETH-A" showLockedDecimals={true} />
          </TabPanel>
          <TabPanel>
        <Collateral {...props} ilk="RWA001-A" />
        <Collateral {...props} ilk="RWA002-A" />
        <Collateral {...props} ilk="RWA003-A" />
        <Collateral {...props} ilk="RWA004-A" />
        <Collateral {...props} ilk="RWA005-A" />
        <Collateral {...props} ilk="RWA006-A" />
        <Collateral {...props} ilk="RWA007-A" />
        <Collateral {...props} ilk="RWA008-A" />
        <Collateral {...props} ilk="RWA009-A" />
        <Collateral {...props} ilk="RWA010-A" />
        <Collateral {...props} ilk="RWA011-A" />
        <Collateral {...props} ilk="RWA012-A" />
        <Collateral {...props} ilk="RWA013-A" />
        <Collateral {...props} ilk="RWA014-A" />
        <Collateral {...props} ilk="RWA015-A" />
          </TabPanel>
          <TabPanel>
        <Psm {...props} ilk="PSM-USDC-A" />
        <Psm {...props} ilk="PSM-USDP-A" />
        <Psm {...props} ilk="PSM-GUSD-A" />
          </TabPanel>
          <TabPanel>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mCompBalance}>{formatAmount.format(props.d3mCompBalance)}</h3>
              <h4 className="title subtitle is-size-4">cDAI Supply</h4>
              <h6 className="subtitle is-size-6" title={props.d3mCompMaxWithdraw}>Max Withdraw: {formatAmount.format(props.d3mCompMaxWithdraw)}</h6>
            </div>
          </div>
        </div>
        <hr />
      {/*
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mCompMaxDeposit}>{formatAmount.format(props.d3mCompMaxDeposit)}</h3>
              <h4 className="title subtitle is-size-4">cDai Maximum Deposit</h4>
            </div>
          </div>
        */}
      {/*
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mAdaiTargetSupply}>{formatAmount.format(props.d3mAdaiTargetSupply)}</h3>
              <h4 className="title subtitle is-size-4">aDAI Target Supply</h4>
              <h6 className="subtitle is-size-6" title={props.d3mAdaiAdjustment}>Adjustment: {formatAmount.format(props.d3mAdaiAdjustment)}</h6>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mAdaiAvailableLiquidity}>{formatAmount.format(props.d3mAdaiAvailableLiquidity)}</h3>
              <h4 className="title subtitle is-size-4">Available Liquidity</h4>
            </div>
          </div>
        </div>
        */}
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mAdaiTotalSupply}>{formatAmount.format(props.d3mAdaiTotalSupply)}</h3>
              <h4 className="title subtitle is-size-4">aDAI Total Supply</h4>
              <h6 className="title subtitle is-size-6">Variable Debt: {formatAmount.format(props.d3mAdaiTotalSupplyVariable)}</h6>
              <h6 className="title subtitle is-size-6">Stable Debt: {formatAmount.format(props.d3mAdaiTotalSupplyFixed)}</h6>
            </div>
          </div>
      {/*
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mAdaiBar}>{formatPercent.format(props.d3mAdaiBar)}</h3>
              <h4 className="title subtitle is-size-4">aDAI Target Interest Rate</h4>
              <h6 className="title subtitle is-size-6" title={props.d3mAdaiFeesPending}>Fees Pending: {formatAmount.format(props.d3mAdaiFeesPending)}</h6>
              <h6 className="title subtitle is-size-6" title={props.d3mAdaiIncentive}>Incentive Balance: {formatAmount.format(props.d3mAdaiIncentive)} stkAAVE</h6>
            </div>
          </div>
        */}
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mAdaiDepositAPR}>{formatPercent.format(props.d3mAdaiDepositAPR)}</h3>
              <h4 className="title subtitle is-size-4">Aave Deposit Rate (APR)</h4>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mAdaiVariableBorrowAPR}>{formatPercent.format(props.d3mAdaiVariableBorrowAPR)}</h3>
              <h4 className="title subtitle is-size-4">Aave Variable Borrow Rate (APR)</h4>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.d3mAdaiStableBorrowAPR}>{formatPercent.format(props.d3mAdaiStableBorrowAPR)}</h3>
              <h4 className="title subtitle is-size-4">Aave Stable Borrow Rate (APR)</h4>
            </div>
          </div>
        </div>

        <Collateral {...props} ilk="DIRECT-AAVEV2-DAI" />
          </TabPanel>
          <TabPanel>
        <Collateral {...props} ilk="AAVE-A" />
        <Collateral {...props} ilk="BAL-A" />
        <Collateral {...props} ilk="BAT-A" />
        <Collateral {...props} ilk="COMP-A" />
        <Collateral {...props} ilk="GNO-A" />
        <Collateral {...props} ilk="GUSD-A" />
        <Collateral {...props} ilk="KNC-A" />
        <Collateral {...props} ilk="LINK-A" />
        <Collateral {...props} ilk="LRC-A" />
        <Collateral {...props} ilk="MANA-A" />
        <Collateral {...props} ilk="MATIC-A" />
        <Collateral {...props} ilk="RENBTC-A" />
        <Collateral {...props} ilk="TUSD-A" />
        <Collateral {...props} ilk="UNI-A" />
        <Collateral {...props} ilk="UNIV2AAVEETH-A" showLockedDecimals={true} />
        <Collateral {...props} ilk="UNIV2DAIETH-A" />
        <Collateral {...props} ilk="UNIV2LINKETH-A" />
        <Collateral {...props} ilk="UNIV2UNIETH-A" />
        <Collateral {...props} ilk="UNIV2WBTCDAI-A" showLockedDecimals={true} />
        <Collateral {...props} ilk="UNIV2WBTCETH-A" showLockedDecimals={true} />
        <Collateral {...props} ilk="USDC-A" />
        <Collateral {...props} ilk="USDC-B" />
        <Collateral {...props} ilk="USDP-A" />
        <Collateral {...props} ilk="USDT-A" />
        <Collateral {...props} ilk="YFI-A" />
        <Collateral {...props} ilk="ZRX-A" />
          </TabPanel>
        </Tabs>
          </TabPanel>
          <TabPanel>
        <div className="columns">
          <Pip {...props} token="ETH" ilk="ETH-A" formater={formatTwoDp} />
          <Pip {...props} token="wstETH" ilk="WSTETH-A" formater={formatTwoDp} />
          <Pip {...props} token="rETH" ilk="RETH-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="BTC" ilk="WBTC-A" formater={formatTwoDp} />
          <Pip {...props} token="GNO" ilk="GNO-A" formater={formatTwoDp} />
          <Pip {...props} token="LINK" ilk="LINK-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="MANA" ilk="MANA-A" formater={formatCurrency} />
          <Pip {...props} token="MATIC" ilk="MATIC-A" formater={formatCurrency} />
          <Pip {...props} token="YFI" ilk="YFI-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="USDC, TUSD, USDP, GUSD, aDAI" ilk="USDC-A" formater={formatCurrency}/>
        </div>
        <div className="columns">
          <Pip {...props} token="UniV2UsdcEth" ilk="UNIV2USDCETH-A" formater={formatNoDecimals} />
          <Pip {...props} token="UniV2DaiUsdc" ilk="UNIV2DAIUSDC-A" formater={formatNoDecimals} />
        </div>
        <div className="columns">
          <Pip {...props} token="GUniV3DaiUsdc1" ilk="GUNIV3DAIUSDC1-A" formater={formatTwoDp} />
          <Pip {...props} token="GUniV3DaiUsdc2" ilk="GUNIV3DAIUSDC2-A" formater={formatFiveDp} />
          <Pip {...props} token="CrvV1EthSteth" ilk="CRVV1ETHSTETH-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="RWA001" ilk="RWA001-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA002" ilk="RWA002-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="RWA003" ilk="RWA003-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA004" ilk="RWA004-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="RWA005" ilk="RWA005-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA006" ilk="RWA006-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="RWA007" ilk="RWA007-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA008" ilk="RWA008-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="RWA009" ilk="RWA009-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA010" ilk="RWA010-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="RWA011" ilk="RWA011-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA012" ilk="RWA012-A" formater={formatTwoDp} />
        </div>
        <div className="columns">
          <Pip {...props} token="RWA013" ilk="RWA013-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA014" ilk="RWA014-A" formater={formatTwoDp} />
          <Pip {...props} token="RWA015" ilk="RWA015-A" formater={formatTwoDp} />
        </div>

          {/* <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.mkrPrice}>${formatCurrency.format(props.mkrPrice)}</h3>
                <p className="title subtitle is-size-4">MKR Price</p>
              </div>
            </div> */}

          </TabPanel>
          <TabPanel>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.flapKicks}>{formatAmount.format(props.flapKicks)}</h3>
              <p className="title subtitle is-size-4">{t('daistats.dai_surplus_auctions')}</p>
              <p className="subtitle is-size-6">{t('daistats.till_next_flap')}: {nextFlap()}</p>
              <p className="title subtitle is-size-6">Beg: {formatPercent.format(props.flapBeg - 1)} Ttl: {props.flapTtl / 60}m Tau: {props.flapTau / 60 / 60}h</p>
              <p className="title subtitle is-size-6" title={props.surplusBump}>{t('daistats.lot')}: {formatAmount.format(props.surplusBump)} Lid: {formatAmount.format(props.flapLid)}</p>
              <p className="title subtitle is-size-6" title={props.flapFill}>Fill: {formatAmount.format(props.flapFill)}</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.cdps}>{props.cdps}</h3>
              <p className="subtitle is-size-4">{t('daistats.vaults_opened')}</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.mkrSupply}>{formatAmount.format(props.mkrSupply)}</h3>
              <p className="subtitle is-size-4">{t('daistats.token_supply', { token: 'MKR' })}</p>
              <a href={`https://etherscan.io/address/${props.MCD_PAUSE_PROXY}`} target="_blank" rel="noopener noreferrer">
                <p className="subtitle is-size-6" title={props.protocolTreasury}>
                  Protocol Treasury: {formatAmount.format(props.protocolTreasury)} MKR
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.flopKicks}>{formatAmount.format(props.flopKicks)}</h3>
              <p className="title subtitle is-size-4">{t('daistats.debt_flop_auctions')}</p>
              <p className="title subtitle is-size-6">{t('daistats.initial_lot_size')}: {formatAmount.format(props.debtDump)} MKR</p>
              <p className="title subtitle is-size-6">{t('daistats.initial_price')}: ${formatAmount.format(props.debtSize / props.debtDump)}</p>
              <p className="title subtitle is-size-6">Beg: {formatPercent.format(props.flopBeg - 1)} Pad: {formatPercent.format(props.flopPad - 1)}</p>
              <p className="title subtitle is-size-6">Ttl: {props.flopTtl / 60}m Tau: {props.flopTau / 60 / 60}h</p>
              <p className="title subtitle is-size-6">Flop delay: {props.flopDelay / 60 / 60}h</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={Math.min(props.vow_dai, props.sysDebt)}>{formatAmount.format(Math.min(props.vow_dai, props.sysDebt))}</h3>
              <p className="title subtitle is-size-4">{t('daistats.debt_available_heal')}</p>
              <p className="title subtitle is-size-6">{t('daistats.debt_buffer')}: {formatAmount.format(props.debtSize)}</p>
              {/*<p className="title subtitle is-size-6" title={props.vice}>Total Unbacked Dai (vice): {formatAmount.format(props.vice)}</p>*/}
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.sysSurplus}>{formatAmount.format(props.sysSurplus)}</h3>
              <p className="title subtitle is-size-4">{t('daistats.system_surplus')}</p>
              <p className="title subtitle is-size-6" title={props.surplusBuffer}>{t('daistats.surplus_buffer')}: {formatAmount.format(props.surplusBuffer)}</p>
              <p className="title subtitle is-size-4">Hump Lerp</p>
              <p className="title subtitle is-size-6" title={props.lerpHumpStart}>Start: {formatNoDecimals.format(props.lerpHumpStart)}</p>
              <p className="title subtitle is-size-6" title={props.lerpHumpCurrent}>Value: {formatNoDecimals.format(props.lerpHumpCurrent)}</p>
              <p className="title subtitle is-size-6" title={props.lerpHumpEnd}>End: {formatNoDecimals.format(props.lerpHumpEnd)}</p>
              <p className="title subtitle is-size-6" title={props.lerpHumpStartTime}>Start Date: {props.lerpHumpStartTime}</p>
              <p className="title subtitle is-size-6" title={props.lerpHumpDuration}>Duration: {formatAmount.format(props.lerpHumpDuration / 86400)} Days</p>
              <p className="title subtitle is-size-6" title={props.lerpHumpAdjustment}>Pending Change: {formatNoDecimals.format(props.lerpHumpAdjustment)}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.dirt}>{formatAmount.format(props.dirt)}</h3>
              <p className="title subtitle is-size-4" title="Aggregate Dai collection target of all active auctions across all collateral types">{/*t('daistats.Dirt')*/}Total Unbacked Dai including Penalties (Dirt)</p>
              <p className="subtitle is-size-6" title={props.hole}>{/*t('daistats.Hole')*/}Global Limit (Hole) {formatAmount.format(props.hole)}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column table-container">
              <table className="table is-narrow" style={{backgroundColor: '#192734', color: '#e6e8f1'}}>
                <Clip heading={true}/>
                <tbody>
                  <Clip {...props} token="ETH-A" ilk="ETH-A"/>
                  <Clip {...props} token="ETH-B" ilk="ETH-B"/>
                  <Clip {...props} token="ETH-C" ilk="ETH-C"/>
                  <Clip {...props} token="WSTETH-A" ilk="WSTETH-A"/>
                  <Clip {...props} token="WSTETH-B" ilk="WSTETH-B"/>
                  <Clip {...props} token="RETH-A" ilk="RETH-A"/>
                  <Clip {...props} token="WBTC-A" ilk="WBTC-A"/>
                  <Clip {...props} token="WBTC-B" ilk="WBTC-B"/>
                  <Clip {...props} token="WBTC-C" ilk="WBTC-C"/>
                  <Clip {...props} token="AAVE" ilk="AAVE-A"/>
                  <Clip {...props} token="BAL" ilk="BAL-A"/>
                  <Clip {...props} token="BAT" ilk="BAT-A"/>
                  <Clip {...props} token="COMP" ilk="COMP-A"/>
                  <Clip {...props} token="GNO" ilk="GNO-A"/>
                  <Clip {...props} token="KNC" ilk="KNC-A"/>
                  <Clip {...props} token="LINK" ilk="LINK-A"/>
                  <Clip {...props} token="LRC" ilk="LRC-A"/>
                  <Clip {...props} token="MANA" ilk="MANA-A"/>
                  <Clip {...props} token="MATIC" ilk="MATIC-A"/>
                  <Clip {...props} token="RENBTC" ilk="RENBTC-A"/>
                  <Clip {...props} token="UNI" ilk="UNI-A"/>
                  <Clip {...props} token="YFI" ilk="YFI-A"/>
                  <Clip {...props} token="ZRX" ilk="ZRX-A"/>
                  <Clip {...props} token="UniV2DaiEth" ilk="UNIV2DAIETH-A"/>
                  <Clip {...props} token="UniV2WbtcEth" ilk="UNIV2WBTCETH-A"/>
                  <Clip {...props} token="UniV2UsdcEth" ilk="UNIV2USDCETH-A"/>
                  <Clip {...props} token="UniV2DaiUsdc" ilk="UNIV2DAIUSDC-A"/>
                  <Clip {...props} token="UniV2LinkEth" ilk="UNIV2LINKETH-A"/>
                  <Clip {...props} token="UniV2UniEth" ilk="UNIV2USDCETH-A"/>
                  <Clip {...props} token="UniV2WbtcDai" ilk="UNIV2WBTCDAI-A"/>
                  <Clip {...props} token="UniV2AaveEth" ilk="UNIV2AAVEETH-A"/>
                  <Clip {...props} token="GUniV3DaiUsdc1" ilk="GUNIV3DAIUSDC1-A"/>
                  <Clip {...props} token="GUniV3DaiUsdc2" ilk="GUNIV3DAIUSDC2-A"/>
                  <Clip {...props} token="CrvV1EthSteth" ilk="CRVV1ETHSTETH-A"/>
                  <Clip {...props} token="USDC-A" ilk="USDC-A"/>
                  <Clip {...props} token="USDC-B" ilk="USDC-B"/>
                  <Clip {...props} token="USDT" ilk="USDT-A"/>
                  <Clip {...props} token="TUSD" ilk="TUSD-A"/>
                  <Clip {...props} token="GUSD" ilk="GUSD-A"/>
                  <Clip {...props} token="USDP" ilk="USDP-A"/>
                  <Clip {...props} token="PSM-USDC-A" ilk="PSM-USDC-A"/>
                  <Clip {...props} token="PSM-USDP-A" ilk="PSM-USDP-A"/>
                  <Clip {...props} token="PSM-GUSD-A" ilk="PSM-GUSD-A"/>
                </tbody>
              </table>
          </div>
        </div>
          </TabPanel>
          <TabPanel>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.pauseDelay}>{props.pauseDelay / 60 / 60}h</h3>
              <p className="title subtitle is-size-4">{/*t('daistats.gsm_pause_delay')*/}GSM Pause Delay</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.flashLine}>{formatAmount.format(props.flashLine)}</h3>
              <p className="title subtitle is-size-4">{/*t('daistats.flash_loan_limit')*/}Dai Flash Loan Limit</p>
              <p className="subtitle is-size-6">{/*t('daistats.fee')}*/}Fee: 0.00%</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.esmMin}>{formatAmount.format(props.esmMin)}</h3>
              <p className="title subtitle is-size-4">{/*t('daistats.esm_threshold')*/}ESM Threshold</p>
              <p className="subtitle is-size-6" title={props.esmSum}>{/*t('daistats.total_MKR_burned')}*/}Total MKR Burned: {formatSixDp.format(props.esmSum)}</p>
              <p className="title subtitle is-size-6" title={props.endWait}>{/*t('daistats.end_wait')}*/}ESM Delay: {props.endWait / 60 / 60}h</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.daiSupply}>
                {formatAmount.format(props.daiSupply)}
              </h3>
              <p className="subtitle is-size-4">{
                t('daistats.token_supply', { token: 'Dai (ERC20)' })} ({formatAmount.format(props.daiSupply / props.debt * 100)}%)
              </p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.savingsDai}>{formatAmount.format(props.savingsDai)}</h3>
              <p className="title subtitle is-size-4">{t('daistats.dai_in_dsr')}
                  ({formatAmount.format(props.savingsDai / props.debt * 100)}%)</p>
              <p className="subtitle is-size-6">({t('daistats.pie_in_dsr')}: {formatAmount.format(props.savingsPie)})</p>
            </div>
          </div>

          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.potFee}>{formatPercent.format(props.potFee)}</h3>
              <p className="title subtitle is-size-4">{t('daistats.dai_savings_rate')}</p>
              <p className="subtitle is-size-6">{t('daistats.last_drip')}: {props.potDrip}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.optimisticDaiSupply}>{formatAmount.format(props.optimisticDaiSupply)}</h3>
              <p className="subtitle is-size-4">{t('daistats.token_in_dex', { token: 'Dai', dex: 'Optimism' })}</p>
              <p className="title subtitle is-size-6">
                <a href="https://gateway.optimism.io/" target="_blank" rel="noopener noreferrer">
                    Optimism Gateway
                </a>
              </p>
{/*<p className="subtitle is-size-6">{t('daistats.token_in_dex', { token: 'ETH', dex: 'Optimism' })}: {formatAmount.format(props.optimisticEthSupply)}</p> */}
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.starknetDaiSupply}>{formatAmount.format(props.starknetDaiSupply)}</h3>
              <p className="subtitle is-size-4">{t('daistats.token_in_dex', { token: 'Dai', dex: 'Starknet' })}</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.balancerV2Dai}>{formatAmount.format(props.balancerV2Dai)}</h3>
              <p className="subtitle is-size-4">{t('daistats.token_in_dex', { token: 'Dai', dex: 'Balancer V2' })}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.chaiSupply}>{formatAmount.format(props.chaiSupply)}</h3>
              <p className="title subtitle is-size-4">{t('daistats.token_supply', { token: 'Chai' })} <span role="img" aria-label="chai">🍵</span></p>
              <p className="subtitle is-size-6">({t('daistats.dai_brewing')}: {formatAmount.format(props.daiBrewing)})</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.oasisDexDai}>{formatAmount.format(props.oasisDexDai)}</h3>
              <p className="subtitle is-size-4">{t('daistats.token_in_dex', { token: 'Dai', dex: 'Oasis Dex' })}</p>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.uniswapDai}>{formatAmount.format(props.uniswapDai)}</h3>
              <p className="subtitle is-size-4">{t('daistats.token_in_dex', { token: 'Dai', dex: 'Uniswap V2 (Dai/ETH)' })}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title" title={props.bkrSupply}>{formatAmount.format(props.bkrSupply)}</h3>
              <p className="title subtitle is-size-4">
                <a href={`https://etherscan.io/token/${props.BKR}`} target="_blank" rel="noopener noreferrer">
                  {t('daistats.token_supply', { token: 'Breaker (BKR)' })}
                </a>
              </p>
              <p className="title subtitle is-size-6" title={props.mkrBroken}>MKR Broken: {formatEightDp.format(props.mkrBroken)}</p>
              <p className="title subtitle is-size-6">
                <a href="https://makerbreak.io/" target="_blank" rel="noopener noreferrer">Convert MKR to BKR with Makerbreak.io</a>
              </p>
            </div>
          </div>
        </div>
          </TabPanel>
          <TabPanel>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.GOV_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> GovAlpha</h3>
                <p className="subtitle is-size-7">{props.GOV_MULTISIG}</p>
              </a>
              <a href={`https://etherscan.io/address/${props.GOV_MULTISIG_2}`} target="_blank" rel="noopener noreferrer">
                <p className="subtitle is-size-7">{props.GOV_MULTISIG_2}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.RISK_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Risk Core Unit</h3>
                <p className="subtitle is-size-7">{props.RISK_MULTISIG}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.GRO_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Growth Core Unit</h3>
                <p className="subtitle is-size-7">{props.GRO_MULTISIG}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.IN_WALLET}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Data Insights Core Unit</h3>
                <p className="subtitle is-size-7">{props.IN_WALLET}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.COM_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Governance Communications Core Unit</h3>
                <p className="subtitle is-size-7">{props.COM_MULTISIG}</p>
              </a>
              <a href={`https://etherscan.io/address/${props.COM_ER_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <p className="subtitle is-size-7">{props.COM_ER_MULTISIG}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.RWF_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Real World Core Unit</h3>
                <p className="subtitle is-size-7">{props.RWF_MULTISIG}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.CP_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Content Production Unit</h3>
                <p className="subtitle is-size-7">{props.CP_MULTISIG}</p>
              </a>
              <a href={`https://etherscan.io/address/${props.CP_MULTISIG_2}`} target="_blank" rel="noopener noreferrer">
                <p className="subtitle is-size-7">{props.CP_MULTISIG_2}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.SES_AUDITORS_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Sustainable Ecosystem Scaling Core Unit (SES)</h3>
                <p className="subtitle is-size-7">{props.SES_AUDITORS_MULTISIG}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.SES_PERMANENT_TEAM_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> SES Permanent Team</h3>
                <p className="subtitle is-size-7">{props.SES_PERMANENT_TEAM_MULTISIG}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.SES_PERMANENT_TEAM_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> SES Incubation Program</h3>
                <p className="subtitle is-size-7">{props.SES_INCUBATION_PROGRAM_MULTISIG}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.SES_PERMANENT_TEAM_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> SES Grants Program</h3>
                <p className="subtitle is-size-7">{props.SES_GRANTS_PROGRAM_MULTISIG}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.SNE_WALLET}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> StarkNet Engineering Core Unit</h3>
                <p className="subtitle is-size-7">{props.SNE_WALLET}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.SH_WALLET}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Strategic Happiness Core Unit</h3>
                <p className="subtitle is-size-7">{props.SH_WALLET}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.PE_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Protocol Engineering Core Unit</h3>
                <p className="subtitle is-size-7">{props.PE_MULTISIG}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.ORA_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Oracle Core Unit</h3>
                <p className="subtitle is-size-7">{props.ORA_MULTISIG}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.ORA_ER_MULTISIG}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Oracle Emergency Fund</h3>
                <p className="subtitle is-size-7">{props.ORA_ER_MULTISIG}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.DAIF_WALLET}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Dai Foundation Core Unit</h3>
                <p className="subtitle is-size-7">{props.DAIF_WALLET}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.DAIF_EF_WALLET}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Dai Foundation Emergency Fund</h3>
                <p className="subtitle is-size-7">{props.DAIF_EF_WALLET}</p>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/address/${props.hat}#code`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Hat</h3>
                <p className="subtitle is-size-7">{props.hat}</p>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href="https://tokenlists.org/token-list?url=https://daistats.com/makerdao.tokenlist.json" target="_blank" rel="noopener noreferrer">
                <h3 className="title">MakerDAO Tokenlist v0.7.1</h3>
              </a>
              <a href="/makerdao.tokenlist.json" target="_blank" rel="noopener noreferrer">
                <p className="subtitle is-size-7">{`DaiStats.com/makerdao.tokenlist.json`}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href="https://chainlog.makerdao.com/" target="_blank" rel="noopener noreferrer">
                <h3 className="title">Multi-Collateral DAI Public Releases</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.MCD_DAI}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Dai</h3>
                <p className="subtitle is-size-7">{props.MCD_DAI}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.MCD_GOV}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> MKR</h3>
                <p className="subtitle is-size-7">{props.MCD_GOV}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.BAT}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> BAT</h3>
                <p className="subtitle is-size-7">{props.BAT}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.USDC}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> USDC</h3>
                <p className="subtitle is-size-7">{props.USDC}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.WBTC}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> WBTC</h3>
                <p className="subtitle is-size-7">{props.WBTC}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.AAVE}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> AAVE</h3>
                <p className="subtitle is-size-7">{props.AAVE}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.TUSD}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> TUSD</h3>
                <p className="subtitle is-size-7">{props.TUSD}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.KNC}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> KNC</h3>
                <p className="subtitle is-size-7">{props.KNC}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.ZRX}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> ZRX</h3>
                <p className="subtitle is-size-7">{props.ZRX}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RENBTC}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> renBTC</h3>
                <p className="subtitle is-size-7">{props.RENBTC}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.MANA}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> MANA</h3>
                <p className="subtitle is-size-7">{props.MANA}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.PAXUSD}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> USDP</h3>
                <p className="subtitle is-size-7">{props.PAXUSD}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.USDT}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> USDT</h3>
                <p className="subtitle is-size-7">{props.USDT}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.COMP}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> COMP</h3>
                <p className="subtitle is-size-7">{props.COMP}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.LRC}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> LRC</h3>
                <p className="subtitle is-size-7">{props.LRC}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.LINK}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> LINK</h3>
                <p className="subtitle is-size-7">{props.LINK}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.BAL}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> BAL</h3>
                <p className="subtitle is-size-7">{props.BAL}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.YFI}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> YFI</h3>
                <p className="subtitle is-size-7">{props.YFI}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.GUSD}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> GUSD</h3>
                <p className="subtitle is-size-7">{props.GUSD}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNI}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UNI</h3>
                <p className="subtitle is-size-7">{props.UNI}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.MATIC}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> MATIC</h3>
                <p className="subtitle is-size-7">{props.MATIC}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.ADAI}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> ADAI</h3>
                <p className="subtitle is-size-7">{props.ADAI}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.GNO}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> GNO</h3>
                <p className="subtitle is-size-7">{props.GNO}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2DAIETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2DaiEth</h3>
                <p className="subtitle is-size-7">{props.UNIV2DAIETH}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2WBTCETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2WbtcEth</h3>
                <p className="subtitle is-size-7">{props.UNIV2WBTCETH}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2USDCETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2UsdcEth</h3>
                <p className="subtitle is-size-7">{props.UNIV2USDCETH}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2DAIUSDC}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2DaiUsdc</h3>
                <p className="subtitle is-size-7">{props.UNIV2DAIUSDC}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2LINKETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2LinkEth</h3>
                <p className="subtitle is-size-7">{props.UNIV2LINKETH}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2UNIETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2UniEth</h3>
                <p className="subtitle is-size-7">{props.UNIV2UNIETH}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2WBTCDAI}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2WbtcDai</h3>
                <p className="subtitle is-size-7">{props.UNIV2WBTCDAI}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.UNIV2AAVEETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> UniV2AaveEth</h3>
                <p className="subtitle is-size-7">{props.UNIV2AAVEETH}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.GUNIV3DAIUSDC1}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> GUniV3DaiUsdc1</h3>
                <p className="subtitle is-size-7">{props.GUNIV3DAIUSDC1}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.GUNIV3DAIUSDC2}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> GUniV3DaiUsdc2</h3>
                <p className="subtitle is-size-7">{props.GUNIV3DAIUSDC2}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA001}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA001</h3>
                <p className="subtitle is-size-7">{props.RWA001}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA002}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA002</h3>
                <p className="subtitle is-size-7">{props.RWA002}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA003}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA003</h3>
                <p className="subtitle is-size-7">{props.RWA003}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA004}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA004</h3>
                <p className="subtitle is-size-7">{props.RWA004}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA005}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA005</h3>
                <p className="subtitle is-size-7">{props.RWA005}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA006}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA006</h3>
                <p className="subtitle is-size-7">{props.RWA006}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA007}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA007</h3>
                <p className="subtitle is-size-7">{props.RWA007}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA008}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA008</h3>
                <p className="subtitle is-size-7">{props.RWA008}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA009}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA009</h3>
                <p className="subtitle is-size-7">{props.RWA009}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA010}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA010</h3>
                <p className="subtitle is-size-7">{props.RWA010}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA011}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA011</h3>
                <p className="subtitle is-size-7">{props.RWA011}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA012}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA012</h3>
                <p className="subtitle is-size-7">{props.RWA012}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA013}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA013</h3>
                <p className="subtitle is-size-7">{props.RWA013}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA014}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA014</h3>
                <p className="subtitle is-size-7">{props.RWA014}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RWA015}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RWA015</h3>
                <p className="subtitle is-size-7">{props.RWA015}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.WSTETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> WSTETH</h3>
                <p className="subtitle is-size-7">{props.WSTETH}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.CRVV1ETHSTETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> CrvV1EthSteth</h3>
                <p className="subtitle is-size-7">{props.CRVV1ETHSTETH}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://etherscan.io/token/${props.RETH}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> RETH</h3>
                <p className="subtitle is-size-7">{props.RETH}</p>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://optimistic.etherscan.io/token/${props.OPTIMISTIC_DAI}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Optimistic Dai</h3>
                <p className="subtitle is-size-7">{props.OPTIMISTIC_DAI}</p>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="box has-text-centered">
              <a href={`https://optimistic.etherscan.io/token/${props.OPTIMISTIC_MKR}`} target="_blank" rel="noopener noreferrer">
                <h3 className="title"><i className="fal fa-file-code"></i> Optimistic MKR</h3>
                <p className="subtitle is-size-7">{props.OPTIMISTIC_MKR}</p>
              </a>
            </div>
          </div>
        </div>
          </TabPanel>
          <TabPanel>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title">Dai</h3>
              <table className="table" style={{margin: '0 auto', backgroundColor: '#192734', color: '#e6e8f1'}}>
                <Vest heading={true}/>
                <tbody>
                  {props.vestingDaiLegacy.map((award, idx) => (
                    <Vest key={award.usr + award.bgn} award={award} />
                  ))}
                  <tr><td colspan="10">&nbsp;</td></tr>
                  {props.vestingDai.map((award, idx) => (
                    <Vest key={award.usr + award.bgn} award={award} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
              <h3 className="title">MKR</h3>
              <table className="table" style={{margin: '0 auto', backgroundColor: '#192734', color: '#e6e8f1'}}>
                <Vest heading={true}/>
                <tbody>
                  {props.vestingMkrTreasury.map((award, idx) => (
                    <Vest key={award.usr + award.bgn} award={award} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
          </TabPanel> */}
