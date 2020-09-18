import os

from logtron import autodiscover, flush
from logtron.config import discover_config


def test_autodiscover():
    logger = autodiscover(refresh=True)
    logger.info("test_autodiscover")


def test_autodiscover_existing():
    logger = autodiscover(refresh=True)
    logger.info("test_autodiscover_existing1")
    logger = autodiscover()
    logger.info("test_autodiscover_existing2")


def test_autodiscover_named():
    logger = autodiscover("name1", refresh=True)
    logger.info("test_autodiscover_named")


def test_extra():
    logger = autodiscover(refresh=True)
    logger.info("test_extra", extra={"foo": 123, "bar": "baz", "d": {"e": 5}})


def test_exception():
    logger = autodiscover(refresh=True)
    try:
        raise Exception("test exception")
    except Exception:
        logger.info("test_exception", extra={"foo": 123}, exc_info=True)


def test_config():
    config = discover_config("tests/resources/test.yaml")
    assert config["logtron.handlers.ConsoleHandler"]["test_setting"] == 14


def test_handler_config_short_name():
    logger = autodiscover(refresh=True, config={"ConsoleHandler": {}})
    assert logger is not None


def test_handler_config_full_name():
    logger = autodiscover(refresh=True, config={"logtron.handlers.ConsoleHandler": {}})
    assert logger is not None


def test_parse_env():
    os.environ["LOGTRON_TEST_VAR"] = "1,2,3.4,bar"
    config = discover_config()
    os.environ.pop("LOGTRON_TEST_VAR")
    assert config["test"]["var"] == [1, 2, 3.4, "bar"]


def test_unsupported_env_var():
    os.environ["LOGTRON_CONSOLEHANDLER_FOO"] = "1,2,3.4,bar"
    logger = autodiscover(refresh=True)
    os.environ.pop("LOGTRON_CONSOLEHANDLER_FOO")
    logger.info("test_unsupported_env_var")


def test_discover_context():
    logger = autodiscover(refresh=True, discover_context=lambda: {})
    assert logger is not None


def test_context_from_env():
    os.environ["LOGTRON_CONTEXT_FOO_BAR"] = "123"
    logger = autodiscover(refresh=True)
    os.environ.pop("LOGTRON_CONTEXT_FOO_BAR")
    logger.info("test_context_from_env", extra={"foo": {"baz": "bar"}})
    assert logger is not None


def test_config_context():
    logger = autodiscover(refresh=True, config={"context": {"foo": "bar"}})
    assert logger is not None
    logger.info("test_config_context")


def test_reserved_key():
    logger = autodiscover(refresh=True)
    assert logger is not None
    logger.info("test_reserved_key", extra={"level": "bobo"})


def test_flatten():
    logger = autodiscover(refresh=True, config={"context": {"xyz": "abc"}}, flatten=True)
    assert logger is not None
    logger.info("test_flatten", extra={"foo": {"bar": "baz"}})


def test_flush():
    logger = autodiscover(refresh=True, config={"context": {"xyz": "abc"}})
    assert logger is not None
    logger.info("test_flush", extra={"foo": {"bar": "baz"}})
    flush()
