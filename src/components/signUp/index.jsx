import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const SignUp = () => {
  const options = [
    {
      value: 1,
      label: "cairo",
    },
    {
      value: 2,
      label: "alexandria",
    },
    {
      value: 3,
      label: "ismailia",
    },
    {
      value: 4,
      label: "aswan",
    },
    {
      value: 5,
      label: "qena",
    },
  ];

  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center  ">
          <div className="col-md-8">
            <Form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  {...register("email", {
                    required: "this is requierd",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "invaild email",
                    },
                  })}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <p className="text-danger">{errors.email?.message}</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control
                  {...register("name", {
                    required: "this is required ",
                  })}
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <p className="text-danger">{errors.name?.message}</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  {...register("mobile", {
                    required: true,
                    minLength: {
                      value: 13,
                      message: "number must contain 13 character",
                    },
                  })}
                >
                  mobile
                </Form.Label>
                <Form.Control type="text" placeholder="Enter your mobile" />
              </Form.Group>

              <Form.Label>choose your city </Form.Label>
              <Controller
                name="select"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    {...register }
                  />
                )}
              />

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password?.type === "required" && (
                  <Form.Text className="text-danger">
                    password is required
                  </Form.Text>
                )}
                {errors.password?.type === "minLength" && (
                  <Form.Text className="text-danger">min length is 8</Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("confPassword", {
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return "Your passwords is not match";
                      }
                    },
                  })}
                />
                {errors.confPassword?.type === "validate" && (
                  <Form.Text className="text-danger">
                    password is not match.
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCheckbox">
                <Controller
                  name="checkbox"
                  control={control}
                  render={({ field }) => (
                    <Form.Check
                      {...field}
                      type="checkbox"
                      label="Remember me"
                      {...register}
                    />
                  )}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                signUp
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
