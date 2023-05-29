import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../peoviders/AuthProvider";


const SignUp = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const { createUser } = useContext(AuthContext);

	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
		})
	};
	return (
		<>
			<Helmet>
				<title>Bistro Boss | SignUp</title>
			</Helmet>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Sign Up now!</h1>
						<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					</div>

					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit(onSubmit)} className="card-body">

							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
							</div>
							{errors.name?.type === 'required' && <p className="text-red-500" role="alert">Name is required</p>}


							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
							</div>
							{errors.email?.type === 'required' && <p className="text-red-500" role="alert">Email is required</p>}


							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password"  {...register("password", {
									required: true, minLength: 6,
									maxLength: 20,
									pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
								})} placeholder="password" className="input input-bordered" />

							</div>
							{errors.password?.type === 'required' && <p className="text-red-500" >Password is required</p>}
							{errors.password?.type === 'minLength' && <p className="text-red-500" >Password must be 6 characters</p>}
							{errors.password?.type === 'maxLength' && <p className="text-red-500" >Password must be less than 20 characters</p>}
							{errors.password?.type === 'pattern' && <p className="text-red-500" >Password must be one uppercase, one lowercase, one special character</p>}

							<div className="form-control mt-6">
								<input className="btn btn-primary" type="submit" value="SignUp" />
							</div>
						</form>
						<p className="p-4 text-center"><small>Already have an account?</small> <Link className="text-blue-500" to="/login">Login</Link></p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;