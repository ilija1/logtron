import logging
import sys
import time

from logtron import autodiscover


def measure_clock():
    if sys.version_info > (3, 0):
        return time.perf_counter()
    return time.clock()


def test_iterations():
    logger = autodiscover(level=logging.WARN, refresh=True)

    iterations = 100000

    start = measure_clock()
    for i in range(0, iterations):
        logger.info("hello world", extra={"i": i})
    delta_sec = measure_clock() - start
    delta_ms = delta_sec * 1000

    print("time for {:,} iterations: {:,.2f} ms".format(iterations, delta_ms))
    print("time for one log event: {:.2f} ns".format(1000000 * delta_ms / iterations))
    print("{:,.0f} logs / sec".format(iterations / delta_sec))

    assert delta_sec < 1
