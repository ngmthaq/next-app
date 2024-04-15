import Image from "next/image";
import Link from "next/link";
import { FC, FormEventHandler, useId } from "react";
import { Constants, Paths } from "@/configs";
import { CSRLayout } from "@/layouts";
import { useLocale, useTheme } from "@/hooks";
import { PageProps } from "./props";

export const Page: FC<PageProps> = () => {
  const { t } = useLocale();
  const { theme, toggleTheme } = useTheme();

  const emailId = useId();
  const pwdId = useId();

  const handleChangeEmail: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    input.setCustomValidity("");
  };

  const handleValidateEmail: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    if (input.validity.valueMissing) {
      input.setCustomValidity(t("validation_required"));
    } else if (input.validity.typeMismatch) {
      input.setCustomValidity(t("validation_email"));
    }
  };

  const handleChangePassword: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    input.setCustomValidity("");
  };

  const handleValidatePassword: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget;
    if (input.validity.valueMissing) {
      input.setCustomValidity(t("validation_required"));
    } else if (input.validity.patternMismatch) {
      input.setCustomValidity(t("validation_password"));
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <CSRLayout title={t("title_admin_cms_login_page")}>
      <section className="min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center pb-4">
                <Link
                  href={Paths.WEB.home}
                  className="logo d-flex align-items-center w-auto gap-3 text-decoration-none"
                >
                  <Image width={40} height={40} src={Paths.STATICS.favicon} alt="Logo" />
                  <h1 className="d-none d-lg-block mb-0">AdminCMS</h1>
                </Link>
              </div>
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">{t("login")}</h5>
                    <p className="text-center small">{t("enter_credentials")}</p>
                  </div>
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label htmlFor={emailId} className="form-label">
                        {t("email")}
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
                    <div className="col-12 mb-1">
                      <label htmlFor={pwdId} className="form-label">
                        {t("password")}
                      </label>
                      <input
                        required
                        id={pwdId}
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="************"
                        pattern={Constants.REGEX.password.source}
                        onChange={handleChangePassword}
                        onInvalid={handleValidatePassword}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <button className="btn btn-primary w-100" type="submit">
                        {t("login")}
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0 text-center" style={{ whiteSpace: "pre-line" }}>
                        {t("contact_to_create_admin_account")}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex align-items-center gap-1 mb-3">
                <i className="bi bi-sun-fill"></i>
                <div className="form-check form-switch" style={{ paddingLeft: "2.7rem" }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switchTheme"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                </div>
                <i className="bi bi-moon-fill"></i>
              </div>
              <div className="credits">
                <a href={Paths.OTHERS.bootstrapMade} title={t("bootstrap_made_copyright")} target="_blank">
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

