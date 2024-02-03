import { object, string, TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import FormInput from "../components/FormInput";
import { LoadingButton } from "../components/LoadingButton";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { signUpUserFn } from "../api/authApi";
import useStore from "../store";
import { useMutation } from "@tanstack/react-query";
import Message from "../components/Message";
import { FaClipboardQuestion } from "react-icons/fa6";

const registerSchema = object({
  name: string().min(1, "Full name is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export type RegisterInput = TypeOf<typeof registerSchema>;

const RegisterPage = () => {
  const store = useStore();

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  // 👇 Calling the Register Mutation
  const {
    mutate: registerUser,
    data,
    isSuccess,
  } = useMutation((userData: RegisterInput) => signUpUserFn(userData), {
    onMutate(variables) {
      store.setRequestLoading(true);
    },
    onSuccess(data) {
      store.setRequestLoading(false);
      toast.success(data?.message);
    },
    onError(error: any) {
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
  });

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

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    // 👇 Execute the Mutation
    registerUser(values);
  };

  return (
    <section className="py-8 bg-ct-blue-600 min-h-screen grid place-items-center">
      {data && isSuccess ? (
        <Message>
          <p className="text-xl">{data.message}</p>
          <p className="mt-8">
            Already confirmed? Then you can{" "}
            <Link to="/login" className="text-blue-700 underline">
              Log in
            </Link>
          </p>
        </Message>
      ) : (
        <div className="w-full">
          <h2 className="text-xl text-center mb-4 text-ct-dark-200">
            Sign Up To Get Started!
          </h2>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
            >
              <FormInput label="Full Name" name="name" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />
              <FormInput
                label="Confirm Password"
                name="passwordConfirm"
                type="password"
              />
              <span className="block">
                Already have an account?{" "}
                <Link to="/login" className="text-ct-blue-600">
                  Login Here
                </Link>
              </span>
              <LoadingButton
                loading={store.requestLoading}
                textColor="text-white"
              >
                Sign Up
              </LoadingButton>
            </form>
          </FormProvider>
        </div>
      )}
    </section>
  );
};

export default RegisterPage;
