import { object, string, TypeOf } from "zod";
import { useEffect, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import { LoadingButton } from "../components/LoadingButton";
import { toast } from "react-toastify";
import useStore from "../store";
import { forgotPasswordFn } from "../api/authApi";
import { useMutation } from "@tanstack/react-query";
import Message from "../components/Message";
import { Link, useNavigate } from "react-router-dom";
import { FaClipboardQuestion } from "react-icons/fa6";

const forgotPasswordSchema = object({
  email: string()
    .min(1, "Email verifciation code is required")
    .email("Email address is invalid")
});
const OTPSchema = object({
  OTP: string()
    .min(4, "OTP verifciation code is required")
});

export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>;
export type OTPInput = TypeOf<typeof OTPSchema>;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const store = useStore();

  const [isPassVerified, setIsPassVerf] = useState(false);

  const methods = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const OTPmethods = useForm<OTPInput>({
    resolver: zodResolver(OTPSchema),
  });

  const {
    mutate: forgotPassword,
    data,
    isSuccess,
  } = useMutation((email: string) => forgotPasswordFn(email), {
    onMutate(variables) {
      store.setRequestLoading(true);
    },
    onSuccess: (data) => {
      store.setRequestLoading(false);
      toast.success(data?.message);
      setIsPassVerf(true);
    },
    onError(error: any) {
      store.setRequestLoading(false);
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
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

  const {
    reset:OTPreset,
    handleSubmit: handleOTPSubmit,
    formState: { isSubmitSuccessful: isOTPSubmitSuccessfully },
  } = OTPmethods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (isOTPSubmitSuccessfully) {
      OTPreset();
    }
  }, [isOTPSubmitSuccessfully]);

  const onSubmitHandler: SubmitHandler<ForgotPasswordInput> = ({email}) => {
    // 👇 Executing the forgotPassword Mutation
      forgotPassword(email);
    }

  const handleOTPValidation = () =>{
    navigate("./resetpassword/:resetCode",);
  }
  

  const onOTPSubmitHandler: SubmitHandler<OTPInput> = (data) => {
    console.log(data,"data");
    handleOTPValidation()
    
  };


  return (
    <section className="bg-ct-blue-600 min-h-screen grid place-items-center">
      {data && isSuccess ? (
        <Message>
          <p className="text-xl">{data.message}</p>
          <p className="mt-8">
            Didn't forget password{" "}
            <Link to="/login" className="text-blue-700 underline">
              Go back to the login
            </Link>
          </p>
        </Message>
      ) : (

      <div className="w-full">
        <h2 className="text-xl text-center font-[600] text-ct-yellow-600 mb-14">
          {/* {isPassVerified ? "" :  */}
          Forgot Password
          {/* } */}
        </h2>
        {/* {!isPassVerified ?  */}
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
          >
            <FormInput label="Email Address" name="email" type="email" />
            <LoadingButton
              loading={store.requestLoading}
            >
              {isPassVerified ? "Validate OTP" : "Send Password Reset Link"}
            </LoadingButton>
          </form>
        </FormProvider>
         {/* :
          <FormProvider {...OTPmethods}>
            <form
              onSubmit={handleOTPSubmit(onOTPSubmitHandler)}
              className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
            >
              <FormInput label="OTP" name="OTP" type="text" />
              <LoadingButton
                loading={store.requestLoading}
              >
               Validate OTP
              </LoadingButton>
            </form>
          </FormProvider>
        } */}
      </div>)}
    </section>
  );
};

export default ForgotPasswordPage;
