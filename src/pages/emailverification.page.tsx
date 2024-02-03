import { object, string, TypeOf } from "zod";
import { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import { LoadingButton } from "../components/LoadingButton";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../store";
import { verifyEmailFn } from "../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { FaClipboardQuestion } from "react-icons/fa6";

const emailVerificationSchema = object({
  verificationCode: string().min(1, "Email verifciation code is required"),
});

export type EmailVerificationInput = TypeOf<typeof emailVerificationSchema>;

const EmailVerificationPage = () => {
  const store = useStore();
  const navigate = useNavigate();
  const { verificationCode } = useParams();

  const methods = useForm<EmailVerificationInput>({
    resolver: zodResolver(emailVerificationSchema),
  });

  const { mutate: verifyEmail } = useMutation(
    (verificationCode: string) => verifyEmailFn(verificationCode),
    {
      onSuccess: (data) => {
        toast.success(data?.message);
        navigate("/login");
      },
      onError(error: any) {
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

  useEffect(() => {
    if (verificationCode) {
      reset({ verificationCode });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitHandler: SubmitHandler<EmailVerificationInput> = ({
    verificationCode,
  }) => {
    // 👇 Executing the verifyEmail Mutation
    verifyEmail(verificationCode);
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
            <FormInput label="Verification Code" name="verificationCode" />
            <LoadingButton
              loading={store.requestLoading}
              textColor="text-ct-blue-600"
            >
              Verify Email
            </LoadingButton>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default EmailVerificationPage;
