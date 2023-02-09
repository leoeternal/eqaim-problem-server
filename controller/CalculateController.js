const calculateSum = async (req, res) => {
  const errors = [];
  const { firstNumber, secondNumber } = req.body;
  const regex = /^[0-9]+$/;
  const firstNumberValidate = regex.test(firstNumber);
  const secondNumberValidate = regex.test(secondNumber);
  try {
    if (typeof firstNumber !== "number") {
      errors.push({
        type: "error",
        fieldId: "firstNumber",
        error: "Enter number correctly in a Number format",
      });
    }
    if (!firstNumberValidate) {
      errors.push({
        type: "error",
        fieldId: "firstNumber",
        error:
          "Number shoud be positive and non decimal. Please check your number.",
      });
    }
    if (typeof secondNumber !== "number") {
      errors.push({
        type: "error",
        fieldId: "secondNumber",
        error: "Enter number correctly in a Number format",
      });
    }
    if (!secondNumberValidate) {
      errors.push({
        type: "error",
        fieldId: "secondNumber",
        error:
          "Number shoud be positive and non decimal. Please check your number.",
      });
    }
    if (errors.length > 0) {
      return res.status(400).send({
        status: "failed",
        message: "There are some errors. Please resolve them first",
        data: errors,
      });
    }

    let firstNumberString = firstNumber.toString();
    let secondNumberString = secondNumber.toString();

    let lengthDiff = firstNumberString.length - secondNumberString.length;
    if (lengthDiff > 0) {
      while (lengthDiff > 0) {
        secondNumberString = "0" + secondNumberString;
        lengthDiff--;
      }
    } else if (lengthDiff < 0) {
      while (lengthDiff < 0) {
        firstNumberString = "0" + firstNumberString;
        lengthDiff++;
      }
    }
    let json = {};
    let carryString = "_",
      sumString = "",
      carry = 0;
    for (let i = firstNumberString.length - 1; i >= 0; i--) {
      const tempStep = `step${firstNumberString.length - i}`;
      let sum =
        Number(firstNumberString[i]) + Number(secondNumberString[i]) + carry;
      let addition = sum % 10;
      carry = Math.floor(sum / 10);
      carryString = i === 0 ? carryString : carry + carryString;
      sumString = i === 0 ? sum + sumString : addition + sumString;
      json[tempStep] = { carryString: carryString, sumString: sumString };
    }
    return res.status(200).send({
      status: "success",
      message: "JSON generated",
      data: json,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

module.exports = { calculateSum };
