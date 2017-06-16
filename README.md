# box-fader
Configurable fading box widge for YUDU publisher

Using these files in a YUDU publisher overlay allows you to set a solid block which will fadeout.

The behaviour can be customized via query strings and is trigger automagically on page visibility.

The parameters that can customized are:

- color (solid color or hex code)
- speed (speed of fade in milliseconds)
- delay (delay of start after page load in milliseconds)
- link (link to click through to after animation, not required)

An example query string could be:

```
color=blue&link=http://www.yudu.com&delay=3000&speed=1000
```

If no query string is defined then the defaults of a white color background and 1000 milliseconds will be used.

Enjoy :-)

andrew.bibby@yudu.com

