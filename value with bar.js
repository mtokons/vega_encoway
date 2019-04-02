{
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  /* "width": 100, "height": 30,*/
  "background": "#eef2e8",
  "padding": 5,
  "marks": [
    {
      "type": "text",
       "encode": {
        "update": {
          "text":     { "value": "Hello Hasnain" },
          "align":    { "value": "center"},
          "baseline": { "value": "middle"},
          "stroke":   { "value": "#A32299" },
          "angle":    { "value": 0},
          "x":        { "signal": "width/5" },
          "y":        { "signal": "height/5" }
        }
      }
    }
  ]
}