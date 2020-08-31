import os

from logtron import autodiscover
from logtron.config import discover_config


def test_autodiscover():
    logger = autodiscover(refresh=True)
    logger.info("hello")


def test_autodiscover_existing():
    logger = autodiscover()
    logger.info("hello")
    logger = autodiscover()
    logger.info("world")


def test_autodiscover_named():
    logger = autodiscover("name1", refresh=True)
    logger.info("hello")


def test_exception():
    logger = autodiscover(refresh=True)
    try:
        raise Exception("test exception")
    except Exception:
        logger.info("error", extra={"foo": 123}, exc_info=True)


def test_config():
    config = discover_config("tests/resources/test.yaml")
    assert config["logtron.handlers.ConsoleHandler"]["test_setting"] == 14


def test_parse_env():
    os.environ["LOGTRON_TEST_VAR"] = "1,2,3.4"
    config = discover_config()
    assert config["test"]["var"] == [1, 2, 3.4]


def test_discover_context():
    logger = autodiscover(refresh=True, discover_context=lambda: {})
    assert logger is not None


def test_config_context():
    logger = autodiscover(refresh=True, config={"context": {"foo": "bar"}})
    assert logger is not None
