import { makeSignUpValidation } from "./signup-validation";
import { ValidationComposite } from "@/presentation/helpers/validators/validation-composite";
import { Validation } from "@/presentation/helpers/validators/validation";
import { RequireFieldValidation } from "@/presentation/helpers/validators/required-field-validation";

jest.mock("../../presentation/helpers/validators/validation-composite");

describe("SignUpValidation Factorie", () => {
  test("Should call ValidationComposite with all validations", () => {
    makeSignUpValidation();

    const validations: Validation[] = [];

    for (const field of ["name", "email", "password", "passwordConfirmation"]) {
      validations.push(new RequireFieldValidation(field));
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations);
  });
});
