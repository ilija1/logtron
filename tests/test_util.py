import os

from logtron.util import flatten_dict, merge, parse_env


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


def test_merge_dict():
    a = {
        "a": {"b": {"c": 1234}},
        "foo": "bar",
    }

    b = {"a": {"b": {"c": 123, "d": "hi"}}}
    result = merge(a, b)
    assert result["a"]["b"]["d"] == "hi"
    assert result["a"]["b"]["c"] == 123

    assert a["a"]["b"]["d"] == "hi"
    assert a["a"]["b"]["c"] == 123
