import Image from "next/image";
import Link from "next/link";
import { FC, FormEventHandler, useId } from "react";
import { REGEX } from "@/configs/constants";
import CSRLayout from "@/layouts/CSRLayout";
import { PageProps } from "./props";

export const Page: FC<PageProps> = () => {
  const emailId = useId();
  const pwdId = useId();

  const handleChangeEmail: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    input.setCustomValidity("");
  };

  const handleValidateEmail: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    if (input.validity.valueMissing) {
      input.setCustomValidity("Vui lòng không bỏ trống trường này");
    } else if (input.validity.typeMismatch) {
      input.setCustomValidity("Vui lòng nhập đúng định dạng email. Ví dụ: example@gmail.com");
    }
  };

  const handleChangePassword: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    input.setCustomValidity("");
  };

  const handleValidatePassword: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    if (input.validity.valueMissing) {
      input.setCustomValidity("Vui lòng không bỏ trống trường này");
    } else if (input.validity.patternMismatch) {
      input.setCustomValidity("Độ dài mật khẩu phải từ 8 đến 32 ký tự");
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <CSRLayout title="Đăng nhập với tư cách quản trị viên">
      <section className="min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center pb-4">
                <Link href="/" className="logo d-flex align-items-center w-auto gap-3 text-decoration-none">
                  <Image width={40} height={40} src="/favicon.ico" alt="Logo" />
                  <h1 className="d-none d-lg-block mb-0">AdminCMS</h1>
                </Link>
              </div>
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Đăng nhập</h5>
                    <p className="text-center small">Điền thông tin email và mật khẩu để đăng nhập</p>
                  </div>
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label htmlFor={emailId} className="form-label">
                        Email
                      </label>
                      <input
                        required
                        id={emailId}
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="example@gmail.com"
                        onChange={handleChangeEmail}
                        onInvalid={handleValidateEmail}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor={pwdId} className="form-label">
                        Mật khẩu
                      </label>
                      <input
                        required
                        id={pwdId}
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="************"
                        pattern={REGEX.password.source}
                        onChange={handleChangePassword}
                        onInvalid={handleValidatePassword}
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          value="true"
                          id="rememberMe"
                        />
                        <label className="form-check-label user-select-none" htmlFor="rememberMe">
                          Ghi nhớ thông tin đăng nhập
                        </label>
                      </div>
                    </div>
                    <div className="col-12 mb-2">
                      <button className="btn btn-primary w-100" type="submit">
                        Đăng nhập
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0 text-center">
                        Bạn chưa có tài khoản? <br /> Hãy liên hệ với quản trị viên để được cấp tài khoản
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="credits">
                <a
                  href="https://bootstrapmade.com/bootstrap-admin-templates/"
                  title="Bản quyền giao diện thuộc BootstrapMade"
                  target="_blank"
                >
                  BootstrapMade ©️
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CSRLayout>
  );
};
