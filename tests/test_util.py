import os

from logtron.util import flatten_dict, parse_env


def test_parse_env():
    os.environ["TEST_PARSE_ENV"] = "123"
    env = parse_env()
    os.environ.pop("TEST_PARSE_ENV")
    assert env["TEST"]["PARSE"]["ENV"] == 123


def test_flatten_dict():
    d = {
        "a": {"b": {"c": 1234}},
        "foo": "bar",
    }
    flat = flatten_dict(d, "context")
    assert flat["context_a_b_c"] == 1234
