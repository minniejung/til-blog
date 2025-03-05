'use client'

import React, { memo, useEffect, useRef } from 'react'

function TradingViewWidget() {
	const container = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!container.current) return

		container.current.innerHTML = ''

		const script = document.createElement('script')
		script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
		script.type = 'text/javascript'
		script.async = true
		script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BYBIT:BTCUSDT.P",
          "interval": "60",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "calendar": false,
          "studies": [
            "STD;RSI"
          ],
          "support_host": "https://www.tradingview.com"
        }`
		container.current.appendChild(script)
	}, [])

	return <div className='tradingview-widget-container' ref={container} style={{ height: '100%', width: '100%' }} />
}

export default memo(TradingViewWidget)
