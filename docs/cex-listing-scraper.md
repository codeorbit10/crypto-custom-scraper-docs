# Exchange Listing Scraper & Bitget Buyer

Monitor Upbit and Binance listing announcements and execute trades on Bitget automatically.

## Workflow

1. **WS Subscription**  
   - **Upbit:** Listing announcement feed
   - **Binance:** Listing announcement feed
2. **Filter New Symbols**  
   Auto-detect when a token is officially listed.  
3. **Immediate Buy on Bitget**  
   REST call to Bitget’s API using the API key—sub-second execution.  
4. **Auto-Sell After Delay**  
   Specify a delay (in seconds) after which the bot will automatically place a sell order.  
5. **Logging & Alerts**  
   Console logs or webhook hooks can report each buy/sell with timestamps and pricing details.
