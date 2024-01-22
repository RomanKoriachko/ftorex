import React, { useEffect } from "react"

const TradingComponent = () => {
    useEffect(() => {
        const script = document.createElement("script")
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        script.async = true
        script.innerHTML = `
          {
          "symbols": [
            {
              "description": "",
              "proName": "NYMEX:JKM1!"
            },
            {
              "description": "",
              "proName": "NYMEX:MTF1!"
            },
            {
              "description": "",
              "proName": "NYMEX:AZ71!"
            },
            {
              "description": "",
              "proName": "NYMEX:AGE1!"
            },
            {
              "description": "",
              "proName": "NYMEX:A1Q1!"
            },
            {
              "description": "",
              "proName": "NYMEX:EP11!"
            },
            {
              "description": "",
              "proName": "NYMEX:ALY1!"
            },
            {
              "description": "",
              "proName": "NYMEX:AGT1!"
            }
          ],
          "showSymbolLogo": true,
          "isTransparent": false,
          "displayMode": "adaptive",
          "colorTheme": "dark",
          "locale": "en"
        }`
        document
            .getElementById("tradingview-widget-script-container")
            .appendChild(script)
        return () => {
            document
                .getElementById("tradingview-widget-script-container")
                .removeChild(script)
        }
    }, [])

    return <div id="tradingview-widget-script-container"></div>
}

export default TradingComponent
