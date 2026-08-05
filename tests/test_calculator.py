"""Unit tests for the calculator's reusable operations."""

import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "calci_python"))

from main import (  # noqa: E402
    add,
    cm_to_m,
    divide,
    feet_to_inch,
    inch_to_feet,
    kg_to_pounds,
    m_to_cm,
    multiply,
    parse_number,
    pounds_to_kg,
    sqrt,
    subtract,
)


def test_arithmetic_operations():
    assert add(3, 2) == 5
    assert subtract(3, 2) == 1
    assert multiply(3, 2) == 6
    assert divide(7, 2) == 3.5


def test_invalid_arithmetic_operations_raise_value_errors():
    with pytest.raises(ValueError, match="Division by zero"):
        divide(1, 0)
    with pytest.raises(ValueError, match="negative"):
        sqrt(-1)


def test_sqrt():
    assert sqrt(81) == 9


def test_parse_number_rejects_invalid_input():
    assert parse_number("12.5") == 12.5
    with pytest.raises(ValueError, match="valid number"):
        parse_number("not-a-number")


def test_unit_conversions():
    assert pounds_to_kg(1) == 0.453592
    assert kg_to_pounds(0.453592) == 1
    assert cm_to_m(150) == 1.5
    assert m_to_cm(1.5) == 150
    assert inch_to_feet(24) == 2
    assert feet_to_inch(2) == 24
