This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TECH STACK USED

Tech stack used : 

```bash
NEXT.JS
```
Here's the data converted into a table format:

| Name                   | Description                                          | Default         |
|------------------------|------------------------------------------------------|-----------------|
| Control                |                                                      |                 |
| riskScoreArr           | Array of objects containing time and risk score     |                 |
| RAW                    |                                                      |                 |
| riskScoreArr           | [                                                    |                 |
|                        | 0: {...} 2 keys                                     |                 |
|                        | 1: {...} 2 keys                                     |                 |
|                        | 2: {...} 2 keys                                     |                 |
|                        | 3: {...} 2 keys                                     |                 |
|                        | 4: {...} 2 keys                                     |                 |
|                        | 5: {...} 2 keys                                     |                 |
|                        | 6: {...} 2 keys                                     |                 |
|                        | 7: {...} 2 keys                                     |                 |
|                        | ]                                                    |                 |
| rangeMax               | Maximum value for the risk score range              | 10              |
| rangeMin               | Minimum value for the risk score range              | 1               |
| lowLabel               | Label for low risk range                            | Low             |
| medLabel               | Label for medium risk range                         | Medium          |
| highLabel              | Label for high risk range                           | High            |
| lowRangeMin            | Minimum value for the low risk score range          | 1               |
| lowRangeMax            | Maximum value for the low risk score range          | 3               |
| medRangeMin            | Minimum value for the medium risk score range       | 4               |
| medRangeMax            | Maximum value for the medium risk score range       | 7               |
| highRangeMin           | Minimum value for the high risk score range         | 8               |
| highRangeMax           | Maximum value for the high risk score range         | 10              |
| lowCircleColor         | Color for low risk circle                           | rgb(119, 164, 212) |
| medCircleColor         | Color for medium risk circle                        | rgb(255, 202, 44) |
| highCircleColor        | Color for high risk circle                          | rgb(222, 167, 163) |
| lowCircleStroke        | Stroke color for low risk circle                    | rgb(22, 83, 147) |
| medCircleStroke        | Stroke color for medium risk circle                 | rgb(126, 96, 10) |
| highCircleStroke       | Stroke color for high risk circle                   | rgba(26,19,19, 0.6) |
| lowSelectColor         | Color for selected low range                        | rgb(28, 104, 184) |
| medSelectColor         | Color for selected medium range                     | rgb(255, 202, 44) |
| highSelectColor        | Color for selected high range                       | rgb(172, 36, 25) |
| lowPointerColor        | Color for low risk pointer                          | #fff            |
| medPointerColor        | Color for medium risk pointer                       | #000            |
| highPointerColor       | Color for high risk pointer                         | #fff            |
| ylowLabelColor         | Color for x-axis label for low risk                 | #165393         |
| ymedLabelColor         | Color for x-axis label for medium risk              | #000            |
| yhighLabelColor        | Color for x-axis label for high risk                | #ff0000         |
| yLabelFontSize         | Font size for y-axis label                          | 14px            |
| tooltipFontSize        | Font size for tooltip                               | 10px            |
| tooltipFontFamily      | Font family for tooltip                             | Arial, sans-serif |
| yLabelFontFamily      | Font family for y-axis label                        | Arial, sans-serif |
| lowRectColor           | Color for rectangle representing low risk           | #E8F0F8         |
| highRectColor          | Color for rectangle representing high risk          | #EED3D1         |
| medRectColor           | Color for rectangle representing medium risk        | #FFF4D5         |
| xAxisDateTimeFormat    | Format for date and time on x-axis                  | %Y-%m-%dT%H:%M:%S |
| tooltipTimeFormat      | Format for time in tooltip                          | %d-%b           |
| tooltipDateFormat      | Format for date in tooltip                          | %H%M            |
| onClickEvent           | Function to handle click events                      | -               |

Please note that the "riskScoreArr" is represented as an array containing objects, with the number of keys in each object indicated as "2 keys".
