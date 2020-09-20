# Logtron

[![Release](https://img.shields.io/pypi/v/logtron?logo=python&style=flat)](https://pypi.org/project/logtron)
[![Downloads](https://img.shields.io/pypi/dm/logtron?logo=python&style=flat)](https://pypi.org/project/logtron)
[![Supported Versions](https://img.shields.io/pypi/pyversions/logtron.svg?logo=python&style=flat)](https://pypi.org/project/logtron)
[![License](https://img.shields.io/github/license/ilija1/logtron?logo=apache&style=flat)](https://raw.githubusercontent.com/ilija1/logtron/master/LICENSE)

[![Build](https://img.shields.io/travis/ilija1/logtron?logo=travis&style=flat)](https://travis-ci.org/ilija1/logtron)
[![Coverage](https://img.shields.io/codecov/c/gh/ilija1/logtron?logo=codecov&style=flat)](https://codecov.io/gh/ilija1/logtron)
[![Documentation](https://badgen.net/badge/documentation/gh-pages/green)](https://ilija1.github.io/logtron)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/ilija1/logtron?logo=code-climate&style=flat)](https://codeclimate.com/github/ilija1/logtron/maintainability)
[![Tech Debt](https://img.shields.io/codeclimate/tech-debt/ilija1/logtron?logo=code-climate&style=flat)](https://codeclimate.com/github/ilija1/logtron/issues)
[![Issues](https://img.shields.io/codeclimate/issues/ilija1/logtron?logo=code-climate&style=flat)](https://codeclimate.com/github/ilija1/logtron/issues)

**Logtron** is a simple logging library with JSON log formatting.

```python
>>> import logtron
>>> logger = logtron.autodiscover()
>>> logger.info("hello world")
{"timestamp": 1598900664859, "message": "hello world", "name": "root", "level": 20, "context": {}, "extra": {}}
>>> logger.info("extra args", extra={"foo": "bar", "count": 7})
{"timestamp": 1598900667704, "message": "extra args", "name": "root", "level": 20, "context": {}, "extra": {"foo": "bar", "count": 7}}
>>>
```

Or

```python
>>> import logtron
>>> logtron.autodiscover() # Only needs to run once somewhere to configure the root logger
<RootLogger root (INFO)>
>>>
>>> import logging
>>> logger = logging.getLogger()
>>> logger.info("hello world")
{"timestamp": 1598900735699, "message": "hello world", "name": "root", "level": 20, "context": {}, "extra": {}}
>>> logger.info("extra args", extra={"foo": "bar", "count": 7})
{"timestamp": 1598900757238, "message": "extra args", "name": "root", "level": 20, "context": {}, "extra": {"foo": "bar", "count": 7}}
>>>
```

Logtron allows you to skip all the usual boilerplate when configuring python logging.

Logtron will default to a console JSON log formatter that is compatible with popular log aggregators such as [Logstash](https://www.elastic.co/guide/en/logstash/current/introduction.html), [Fluent Bit](https://docs.fluentbit.io/manual/), or [AWS CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html).

## Installing Logtron and Supported Versions

Logtron is available on PyPI:

```shell
$ python -m pip install logtron
```

Logtron officially supports Python 2.7 & 3.5+.
