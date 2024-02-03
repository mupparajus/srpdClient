import { object, string, TypeOf } from "zod";
import { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import { LoadingButton } from "../components/LoadingButton";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../store";
import { resetPasswordFn } from "../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { FaClipboardQuestion } from "react-icons/fa6";
import { Link} from "react-router-dom";

const resetPasswordSchema = object({
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
});

export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;

const ResetPasswordPage = () => {
  const store = useStore();
  const navigate = useNavigate();
 // const { resetCode } = useParams();
debugger;
  
  const state=useStore.getState();
 const resetCode= state.loginResponse?.user;
 console.log("resetCode" +resetCode);
 const storedToken= state.loginResponse?.access_token
  const methods = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate: resetPassword } = useMutation(
    
  //  (data: ResetPasswordInput) => resetPasswordFn(data, resetCode!),
  (data: ResetPasswordInput) => resetPasswordFn(data, resetCode!,storedToken),
    {
      onMutate(variables) {
        store.setRequestLoading(true);
      },
      onSuccess: (data) => {
        store.setRequestLoading(false);
        toast.success(data?.message);
        navigate("/login");
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

  const onSubmitHandler: SubmitHandler<ResetPasswordInput> = (values) => {
    debugger;
    console.log("ResetPasswordInput"+values);
    resetPassword(values);
  };

  return (
    <section className="bg-ct-blue-600 min-h-screen grid place-items-center">
      <div className="w-full">
        <Link to="/" className="text-ct-dark-600 text-2xl font-semibold">
          <div className="flex justify-center mx-auto">
            <FaClipboardQuestion
              color="white"
              size={22}
              className="pt-1 mr-1"
            />
            <h2 className="text-lg text-center mb-4 text-ct-dark-200">
              SecureExams
            </h2>
          </div>
        </Link>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
          >
            <FormInput label="New Password" name="password" type="password" />
            <FormInput
              label="Confirm Password"
              name="passwordConfirm"
              type="password"
            />
            <LoadingButton
              loading={store.requestLoading}
              textColor="text-ct-white-600"
            >
              Reset Password
            </LoadingButton>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
