import { object, string, TypeOf } from "zod";
import { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import { LoadingButton } from "../components/LoadingButton";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useStore from "../store";
import { loginUserFn } from "../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { FaClipboardQuestion } from "react-icons/fa6";

useStore.subscribe(() => console.log("subscribe"));
const loginSchema = object({
  username: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
  // .refine(
  //   (value) =>
  //     /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,32}$/.test(value),
  //   "Password must contain atleast one digit, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long"
  // ),
});

export type LoginInput = TypeOf<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = ((location.state as any)?.from.pathname as string) || "/dashboard";

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const store = useStore();

  //  API Login Mutation
  const { mutate: loginUser } = useMutation(

    (userData: LoginInput) => loginUserFn(userData),
    {

      onMutate(variables) {
        debugger;
        store.setRequestLoading(true);
      },
      onSuccess: (response) => {
        debugger;
        console.log("new token is" + response?.access_token);
        store.setRequestLoading(false);
        let token = response?.access_token;
        store.setAuthToken(token);
        // useStore(state =>state.setAuthToken(token))
        if(token){
          let loginResponse = {
            status: "success",
            access_token: token,
            user: response?.username
          }
          store.setLoginResponse(loginResponse);
          console.log("token is ??" + store.authToken);
          const state = useStore.getState();
          console.log("getState is " + state);
          // store.setAuthToken(token);
          console.log("loading is " + store.requestLoading);
          toast.success("You successfully logged in");
          console.log("new AuthToke" + store.authToken);
          navigate(from);
        }
        

      },
      onError: (error: any) => {
        store.setRequestLoading(false);
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el.message, {
              position: "top-right",
            })
          );
        } else {
          toast.error((error as any).response.data.message, {
            position: "top-right",
          });
        }
      },
    }
  );

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    // 👇 Executing the loginUser Mutation
    loginUser(values);
  };

  return (
    <section className="bg-ct-blue-600 min-h-screen grid place-items-center">
      <div className="w-full">
        <h2 className="text-xl text-center text-ct-dark-200">
          Login to have access
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
          >
            <FormInput label="User Name" name="username" type="text" />
            <FormInput label="Password" name="password" type="password" />

            <div className="text-right">
              <Link to="/forgotpassword" className="">
                Forgot Password?
              </Link>
            </div>
            <LoadingButton
              loading={store.requestLoading}
              textColor="text-white"
            >
              Login
            </LoadingButton>
            <span className="block">
              Need an account?{" "}
              <Link to="/register" className="text-ct-blue-600">
                Sign Up Here
              </Link>
            </span>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default LoginPage;
