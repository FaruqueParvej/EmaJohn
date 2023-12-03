

const LoginForm = ({handleSubmit,error}) => {
    
    
    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} >
                <h1>Please Register</h1>
        <input type="email" name="email" id="email" placeholder="Enter Your Email" className="border rounded my-2"/>
        <br />
        <input type="password" name="" id="password" placeholder="Enter your password" className="border rounded"/>
        <br />
        <input type="submit" value="register" className="btn btn-primary my-2" />
      </form>
        </div>
    );
};

export default LoginForm;