import { Form, Button } from "react-bootstrap";
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
const Register = () => {

    const { register,control, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("myData ", data)
    }
    const myHoppies = [
        { value: 1, label: 'journaling' },
        { value: 2, label: 'reading' },
        { value: 3, label: 'yoga' },
        { value: 4, label: 'panting' },
        { value: 4, label: 'sports' }
    ]
    const gender = [
        { value: 1, label: ' male' },
        { value: 2, label: 'female' }
    ]

    return <div className="d-flex flex-column">
        <h4 className="my-4 text-center">REGISTER MY DATA .!</h4>

        <Form onSubmit={handleSubmit(onSubmit)} className="my-2 w-50 m-auto border p-5">
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="mt-2">Email address :</Form.Label>
                <Form.Control type="email"
                    placeholder="Enter email"
                    {...register('email',
                     { required: true, pattern: /^[A-Za-z0-9+_.-]+@(.+)$/ })} />
                {/* check required */}
                {errors.email && <p className="text-danger">please, email is required</p>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label className="mt-2">Password :</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    {...register('password',
                     { required: true ,pattern :/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/ })} />
            </Form.Group>
            {errors.password && <p className="text-danger">please, password is required</p>}
            <Form.Group controlId="formBasicPassword">
                <Form.Label className="mt-2">Confirm password :</Form.Label>
                <Form.Control type="password"
                    placeholder="Confirm password"
                    {...register('confirmPassword', {
                        required: true, validate: (value) => {
                            const { password } = getValues();
                            return password === value || "Passwords should match!";
                        }
                    })} />
            </Form.Group>
            {errors.confirmPassword && <p className="text-danger">please, password is not match</p>}

            <Form.Group >
                <Form.Label className="mt-2">My hoppies :</Form.Label>

{/* integrad react hook with another ui library */}
<Controller
        name=" hoppy"
        control={control}
        render={({ field }) => <ReactSelect 
        isMulti
        placeholder="select your hoppies"
        options={myHoppies} 
        {...field} 
        />}
        />
            </Form.Group>
            <Form.Group >
                <Form.Label className="mt-2">Gender :</Form.Label>
                <Controller
        name=" gender"
        control={control}
        render={({ field }) => <ReactSelect
        placeholder="select your gender"
        options={gender} 
        {...field} 
        />}
        />
            </Form.Group>

            <Button className="my-2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    </div>
}
export default Register;