# Telegram ↔ Discord ↔ Twitter Scraper

Aggregate CA announcements from Telegram groups, Discord channels and Twitter posts with ultra-low latency and full buy/sell controls.

## Key Options

- **Processor**  
  Select processor (`jito`, `NextBlock`).  
- **Delay (s)**  
  Milliseconds or seconds to wait after the post before submitting a buy.  
- **Autosell %**  
  Automatically sell X% of your position after launch.  
- **Buy Tip / Sell Tip**  
  Add a small tip (e.g. `0.0101` SOL) to improve tx priority.  
- **Buy Fee / Sell Fee**  
  On-chain fee payer settings.  
- **Slippage %**  
  Maximum slippage tolerance.  
- **Max Market Cap**  
  Skip tokens above this cap (in K or M).  
- **Accept Raydium?**  
  Toggle buying of non-launchpad Raydium tokens.

![TG Scraper settings](/media/scraper-settings.jpg)
