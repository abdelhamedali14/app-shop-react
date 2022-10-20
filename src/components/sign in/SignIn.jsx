import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="container vh-100 mt-5">
      <div className="row d-flex justify-content-center align-items-center w-100 ">
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength:{value:6,
                message:"min lenght is 6"}
            
                })}
              />
            </Form.Group>
            <p className="text-danger">{errors.password?.message}</p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
              <Link rel="stylesheet"  href="" />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
