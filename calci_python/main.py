import math
from typing import Union

Number = Union[int, float]


def add(a: Number, b: Number) -> Number:
    """Return the sum of two numbers."""
    return a + b


def subtract(a: Number, b: Number) -> Number:
    """Return the difference between two numbers."""
    return a - b


def multiply(a: Number, b: Number) -> Number:
    """Return the product of two numbers."""
    return a * b


def divide(a: Number, b: Number) -> float:
    """Divide two numbers, rejecting division by zero."""
    if b == 0:
        raise ValueError("Division by zero")
    return a / b


def sqrt(a: Number) -> float:
    """Return a real square root, rejecting negative inputs."""
    if a < 0:
        raise ValueError("Cannot take the square root of a negative number")
    return math.sqrt(a)


def pounds_to_kg(pounds: Number) -> float:
    return pounds * 0.453592


def kg_to_pounds(kg: Number) -> float:
    return kg / 0.453592


def cm_to_m(cm: Number) -> float:
    return cm / 100


def m_to_cm(m: Number) -> Number:
    return m * 100


def inch_to_feet(inch: Number) -> float:
    return inch / 12


def feet_to_inch(feet: Number) -> Number:
    return feet * 12


def parse_number(value: str) -> float:
    """Convert a user-supplied string to a number with a helpful error."""
    try:
        return float(value)
    except ValueError as error:
        raise ValueError("Enter a valid number") from error


def main() -> None:
    print("Complex Calculator")
    print("Operations: add, subtract, multiply, divide, sqrt")
    print(
        "Conversions: pounds_to_kg, kg_to_pounds, cm_to_m, m_to_cm, "
        "inch_to_feet, feet_to_inch"
    )
    mode = input("Operation/Conversion mode: ").strip().lower()

    if mode in ["o", "op"]:
        op = input(
            "Select operation (add, subtract, multiply, divide, sqrt): "
        ).strip().lower()
        try:
            if op in ["add", "subtract", "multiply", "divide"]:
                a = parse_number(input("Enter first number: "))
                b = parse_number(input("Enter second number: "))
                operations = {
                    "add": add,
                    "subtract": subtract,
                    "multiply": multiply,
                    "divide": divide,
                }
                print("Result:", operations[op](a, b))
            elif op == "sqrt":
                a = parse_number(input("Enter number: "))
                print("Result:", sqrt(a))
            else:
                print("Invalid operation.")
        except ValueError as error:
            print(f"Error: {error}")
    elif mode in ["c", "con"]:
        conv = input(
            "Select conversion (pounds_to_kg, kg_to_pounds, cm_to_m, m_to_cm, "
            "inch_to_feet, feet_to_inch): "
        ).strip().lower()
        conversions = {
            "pounds_to_kg": (pounds_to_kg, "pounds", "kg"),
            "kg_to_pounds": (kg_to_pounds, "kilograms", "pounds"),
            "cm_to_m": (cm_to_m, "centimeters", "meters"),
            "m_to_cm": (m_to_cm, "meters", "centimeters"),
            "inch_to_feet": (inch_to_feet, "inches", "feet"),
            "feet_to_inch": (feet_to_inch, "feet", "inches"),
        }
        if conv not in conversions:
            print("Invalid conversion.")
            return
        convert, input_unit, output_unit = conversions[conv]
        try:
            value = parse_number(input(f"Enter {input_unit}: "))
            print("Result:", convert(value), output_unit)
        except ValueError as error:
            print(f"Error: {error}")
    else:
        print("Invalid mode.")


if __name__ == "__main__":
    main()
