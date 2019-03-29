#!/usr/bin/env python

import time
import sys

from envirophat import weather, leds

temperature = weather.temperature()

sys.stdout.write(format(temperature))